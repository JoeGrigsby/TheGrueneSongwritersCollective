// Weekly script: scrapes artist show pages and opens a PR if new shows are found.
const Anthropic = require('@anthropic-ai/sdk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const { execSync } = require('child_process');

const PAGES_JSX = 'Pages.jsx';

const ARTIST_PAGES = [
  {
    artist: 'Chris Welch',
    photo: 'uploads/ef534480-5491-4254-b1a1-8aa650ad3c71.png',
    url: 'https://chriswelchmusic.com/shows',
  },
  {
    artist: 'Wesley Hanna',
    photo: 'uploads/wesley_hanna.png',
    url: 'https://wesleyhannamusic.com/',
  },
];

async function fetchPage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    return await page.content();
  } finally {
    await browser.close();
  }
}

// Strip tags and collapse whitespace so Claude gets denser, cheaper input.
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, 25000);
}

async function main() {
  const client = new Anthropic();

  const pagesContent = fs.readFileSync(PAGES_JSX, 'utf8');
  const eventsMatch = pagesContent.match(/const UPCOMING_EVENTS = \[[\s\S]*?\];/);
  if (!eventsMatch) throw new Error('Could not locate UPCOMING_EVENTS in Pages.jsx');
  const currentEventsBlock = eventsMatch[0];

  // Fetch all artist pages (failures are non-fatal).
  const fetched = [];
  for (const page of ARTIST_PAGES) {
    try {
      console.log(`Fetching ${page.url} ...`);
      const html = await fetchPage(page.url);
      const text = stripHtml(html);
      console.log(`--- Extracted text for ${page.artist} (first 800 chars) ---`);
      console.log(text.slice(0, 800));
      console.log('---');
      fetched.push({ ...page, text });
    } catch (err) {
      console.error(`  Could not fetch ${page.url}: ${err.message}`);
    }
  }

  if (fetched.length === 0) {
    console.log('No pages fetched successfully. Exiting.');
    return;
  }

  const today = new Date().toDateString();
  const photoMap = ARTIST_PAGES.map(p => `${p.artist} → ${p.photo}`).join('\n');

  const prompt = `Today is ${today}.

Below is the current UPCOMING_EVENTS JavaScript array from our website (Pages.jsx):

${currentEventsBlock}

Below is text scraped from each artist's show page:

${fetched.map(p => `=== ${p.artist} (${p.url}) ===\n${p.text}`).join('\n\n')}

TASK:
1. From the scraped text, identify all UPCOMING shows (dates strictly after today) for each artist.
2. For each show, check whether it already exists in UPCOMING_EVENTS (match on artist name + date + venue). Skip duplicates.
3. If there are no new shows, reply with exactly the word: NO_NEW_SHOWS

4. If there ARE new shows, reply with this exact structure (no extra commentary):

UPDATED_EVENTS_START
const UPCOMING_EVENTS = [
  (full array — keep all existing entries, append new ones with sequential ids)
];
UPDATED_EVENTS_END

NEW_SHOWS_SUMMARY_START
- ArtistName at VenueName, City, ST — Date (Time)
(one line per new show)
NEW_SHOWS_SUMMARY_END

Rules for new event objects:
- id: next integer after the highest existing id
- artist: exact artist name from the mapping
- photo: use this photo mapping:
${photoMap}
- date: long format like "Thursday, May 15, 2026"
- time: "7:00 PM" or "" if unknown
- venue: venue name as a string
- venueUrl: the source page URL for that artist
- location: "City, ST"

Important: output ONLY the markers and the code/list — no explanations.`;

  console.log('Asking Claude to compare shows...');
  const message = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  const response = message.content[0].text.trim();
  console.log('--- Claude raw response ---');
  console.log(response.slice(0, 1000));
  console.log('---');

  if (response === 'NO_NEW_SHOWS' || response.includes('NO_NEW_SHOWS')) {
    console.log('No new shows found. Nothing to update.');
    return;
  }

  const updatedBlockMatch = response.match(/UPDATED_EVENTS_START\n([\s\S]*?)\nUPDATED_EVENTS_END/);
  const summaryMatch = response.match(/NEW_SHOWS_SUMMARY_START\n([\s\S]*?)\nNEW_SHOWS_SUMMARY_END/);

  if (!updatedBlockMatch) {
    console.error('Unexpected Claude response format:\n', response);
    process.exit(1);
  }

  const updatedEventsBlock = updatedBlockMatch[1].trim();
  const summary = summaryMatch ? summaryMatch[1].trim() : '(see diff)';

  // Write updated Pages.jsx.
  const updatedContent = pagesContent.replace(
    /const UPCOMING_EVENTS = \[[\s\S]*?\];/,
    updatedEventsBlock
  );
  fs.writeFileSync(PAGES_JSX, updatedContent);
  console.log('Pages.jsx updated.');

  // Create a branch, commit, and open a PR.
  const branch = `shows/update-${Date.now()}`;
  execSync('git config user.name "github-actions[bot]"');
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');
  execSync(`git checkout -b ${branch}`);
  execSync('git add Pages.jsx');
  execSync(`git commit -m "Add newly found shows from artist pages"`);
  execSync(`git push origin ${branch}`);

  const prBody = `Weekly show scan found new upcoming shows.\n\nNew shows detected:\n${summary}\n\nReview the diff and merge to publish to the live site.`;

  execSync(
    `gh pr create --title "New shows found" --body ${JSON.stringify(prBody)} --base main --head ${branch}`,
    { stdio: 'inherit' }
  );

  console.log('PR opened successfully.');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
