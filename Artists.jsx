
// Artists.jsx — Roster grid + individual bio pages
const ARTIST_DATA = [
  {
    name: 'Wesley Hanna', slug: 'wesley-hanna', initials: 'WH', genre: 'Neo-Traditional Country',
    hometown: 'Fort Worth, TX',
    photo: 'uploads/wesley_hanna.png',
    bio: `Independent country singer-songwriter from Fort Worth, Texas. Roughneck, oilfield engineer, and showman. Wesley's real-world experience as a working man informs every line he writes. He regularly plays in legendary Texas dancehalls, blending neo-traditional country, Western Swing, and local flair. His songwriting reflects his lifelong Texan experiences, delivered with an authenticity that's hard-earned and impossible to fake.`,
    tags: ['Neo-Traditional Country', 'Western Swing', 'Texas Dancehall'],
    website: 'https://wesleyhannamusic.com',
    links: {
      youtube: 'https://www.youtube.com/@wesleyhannamusic',
      instagram: 'https://www.instagram.com/wesleyhannamusic/',
      facebook: 'https://www.facebook.com/wesleyhannamusic/',
      twitter: 'https://x.com/weshannamusic',
      contact: 'https://wesleyhannamusic.com/pages/contact',
    },
  },
  {
    name: 'Chris Welch', slug: 'chris-welch', initials: 'CW', genre: 'Americana / Roots',
    hometown: 'Jackson, MO',
    photo: 'uploads/ef534480-5491-4254-b1a1-8aa650ad3c71.png',
    bio: `Road-tested singer-songwriter whose music is driven by story, simplicity, and truth. Steeped in the storytelling traditions of Americana and roots country, his writing reflects a life shaped by travel, time, and reflection. He explores themes of restlessness, resilience, and the quiet moments in between, delivered with a voice that feels familiar and sincere.`,
    tags: ['Americana', 'Roots Country', 'Storytelling'],
    website: 'https://chriswelchmusic.com/home',
    links: {
      bandcamp: 'https://chriswelch2.bandcamp.com/track/trilogy',
      youtube: 'https://www.youtube.com/@chriswelchmusic',
      instagram: 'https://www.instagram.com/chriswelchmusic/',
      facebook: 'https://www.facebook.com/chrisrwelchmusic/',
      contact: 'https://chriswelchmusic.com/contact',
    },
  },
  {
    name: 'Jack Angel', slug: 'jack-angel', initials: 'JA', genre: 'Folk / Singer-Songwriter',
    hometown: 'Montgomery, TX',
    photo: 'uploads/dc9ff49a-2d62-4188-b7c8-527ceff0f7fd.png',
    bio: `Novice aspiring singer-songwriter from Montgomery, Texas, with an eclectic finger and cross-picking guitar style. Jack's music is rooted in old school folk songwriters from the '70s and '80s, coupled with timeless ballads from Country's Golden Age. He brings a reverence for the craft and a genuine love of the tradition to every song.`,
    tags: ['Folk', 'Fingerpicking', 'Traditional Country'],
    website: null,
    links: {},
  },
  {
    name: 'John Gurnot', slug: 'john-gurnot', initials: 'JG', genre: 'Americana / Red Dirt',
    hometown: 'Texas',
    photo: 'uploads/c476921b-6f46-40dd-af98-965b1c7acc8f.png',
    bio: `Americana and Texas Red Dirt songwriter who draws from real experiences and explores love, loss, and personal growth. His debut single, "Memories in a Frame," honors USMC K9 Handler CLP Dustin J. Lee, a testament to his commitment to writing songs that mean something. John brings honesty and heart to everything he puts on paper.`,
    tags: ['Americana', 'Red Dirt', 'Texas Country'],
    website: null,
    featuredSong: '"Memories in a Frame"',
    links: {
      instagram: 'https://www.instagram.com/jgurnotmusic/',
    },
  },
  {
    name: 'Nathan Young', slug: 'nathan-young', initials: 'NY', genre: 'Folk / Country',
    hometown: 'Kansas',
    photo: 'uploads/22397cd2-b1d9-468e-9c74-88041af5778e.png',
    bio: `Kansas-based songwriter anchored in folk and country traditions. Nathan's songs are rooted in deep storytelling, drawing from lived experiences and delivered with an authentic voice that builds trust and draws listeners into every line. Whether tender or gritty, his songs carry the weight of a life closely observed.`,
    tags: ['Folk', 'Country', 'Storytelling'],
    website: null,
    links: {
      instagram: 'https://www.instagram.com/nathan_young_music/',
    },
    songLog: 'uploads/songlist.png',
  },
  {
    name: 'Rowdy Miller', slug: 'rowdy-miller', initials: 'RM', genre: 'Outlaw / Southern Gothic',
    hometown: 'Canyon Lake, TX',
    photo: 'uploads/3955c5f1-a370-4349-b088-4003903d7bf5.png',
    bio: `Texas Hill Country songwriter blending outlaw country, southern gothic storytelling, and acoustic grit. Rowdy's songs explore loss, redemption, and restless roads, delivered with honest vocals and a voice shaped by a hard-earned life. His writing carries a rawness that can only come from someone who's lived every word.`,
    tags: ['Outlaw Country', 'Southern Gothic', 'Acoustic'],
    featuredSong: 'Producer: 2026 Texas Hill Country Spring House Concert',
    website: null,
    links: {
      soundcloud: 'https://soundcloud.com/rowdymiller',
      instagram: 'https://www.instagram.com/andreisimo/',
    },
  },
  {
    name: 'Jack Brandt', slug: 'jack-brandt', initials: 'JB', genre: 'Country / Americana', hideMusicLink: true,
    hometown: 'Houston, TX',
    photo: 'uploads/7ed29f46-0596-4218-b610-d3c8093b94c7.png',
    bio: `Country and Americana songs rooted in strong melodies, honest emotion, and a deep respect for craft. Jack's songs draw from country traditions but are grounded in the guitar work. His lyric videos and Apple Music credits reflect a writer building a real body of work, one voice and one story at a time.`,
    tags: ['Country', 'Americana', 'Guitar-Driven'],
    website: null,
    links: {
      youtube: 'https://www.youtube.com/channel/UC-czQzYgM5oSEv6wpAKl7rQ',
      instagram: 'https://www.instagram.com/jackbrandtmusic/',
    },
    featuredVideo: 'https://www.youtube.com/watch?v=KiUmAEeCsX0',
  },
  {
    name: 'Todd Johnson', slug: 'todd-johnson', initials: 'TJ', genre: 'Americana Folk',
    hometown: 'Texas Hill Country',
    photo: 'uploads/bf61bdd0-8be1-41dc-9e6e-86ae9d814b15.png',
    bio: `Americana folk singer-songwriter from the Texas Hill Country. Todd's playing and writing style is inspired by the great singer-songwriter legends: Guy Clark, Robert Earl Keen, John Prine, and Jason Isbell. His songs carry that same spirit of place, plainspoken truth, and deep humanity that defines the best of the form.`,
    tags: ['Americana', 'Folk', 'Singer-Songwriter'],
    website: null,
    links: {},
  },
  {
    name: 'Katie Markus', slug: 'katie-markus', initials: 'KM', genre: 'Indie Americana',
    hometown: 'Tennessee / California',
    photo: 'uploads/dea0fe7e-22b0-4509-88f8-5fe7e7493a58.png',
    bio: `Multidisciplinary creative who explores songwriting through narrative, mood, and atmosphere. Rooted in Tennessee and shaped by Texas and California, Katie's songs hold quiet tension with fleeting moments of clarity and restraint. Her writing moves between the personal and the universal, always arriving somewhere honest and unexpected.`,
    tags: ['Indie Americana', 'Narrative', 'Atmospheric'],
    website: null,
    links: {
      instagram: 'https://www.instagram.com/katiemarkus/',
    },
  },
  {
    name: 'Dana Snyder', slug: 'dana-snyder', initials: 'DS', genre: 'Folk / Pop',
    hometown: 'Florida / Nashville',
    photo: 'uploads/3964d42c-b958-4b12-8f4d-148c00a432df.png',
    bio: `Lyricist and travel addict currently splitting time between Florida and Nashville. Dana is an NSAI Chapter Coordinator and International Songwriting Competition finalist, with songs recorded by multiple artists and more releases on the way. Her work spans genre lines with an ear for melody and a gift for a well-turned phrase.`,
    tags: ['Folk', 'Pop', 'Nashville'],
    website: null,
    links: {
      instagram: 'https://www.instagram.com/nashvilledana/',
    },
  },
];

const ArtistCard = ({ artist, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={() => onClick(artist)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#2d1a0a' : '#221508',
        border: `1px solid ${hovered ? '#c8a45a' : '#3d2810'}`,
        padding: '32px 24px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}>
      <div style={{
        width: '100px', height: '100px', borderRadius: '50%',
        border: `2px solid ${hovered ? '#f2ead8' : '#c8a45a'}`,
        background: '#2d1a0a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 16px',
        fontSize: '30px', fontFamily: "'Playfair Display', serif",
        color: '#c8a45a', fontWeight: 700,
        transition: 'border-color 0.2s',
        overflow: 'hidden',
      }}>{artist.photo ? <img src={artist.photo} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : artist.initials}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '18px', marginBottom: '4px' }}>{artist.name}</div>
      <div style={{ fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>{artist.genre}</div>
      <div style={{ color: '#8b6540', fontSize: '13px', fontStyle: 'italic' }}>{artist.hometown}</div>
      <div style={{ marginTop: '16px', fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '11px', letterSpacing: '0.2em', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>READ BIO →</div>
    </div>
  );
};

const ArtistBioPage = ({ artist, onBack }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ background: '#1a1208', minHeight: '100vh', paddingTop: '72px' }}>
      {/* Back bar */}
      <div style={{ background: '#221508', padding: '16px 40px', borderBottom: '1px solid #3d2810' }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', color: '#c8a45a',
          fontFamily: "'Oswald', sans-serif", fontSize: '13px',
          letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
        }}>← Back to Artists</button>
      </div>
      {/* Bio content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <div style={{
            width: '160px', height: '160px', borderRadius: '50%',
            border: '3px solid #c8a45a',
            background: '#2d1a0a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            fontSize: '52px', fontFamily: "'Playfair Display', serif",
            color: '#c8a45a', fontWeight: 700,
            overflow: 'hidden',
          }}>{artist.photo ? <img src={artist.photo} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : artist.initials}</div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>Member · The Gruene Songwriters Collective</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 8px', lineHeight: 1.1 }}>{artist.name}</h1>
            <div style={{ fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>{artist.hometown}</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {artist.tags.map(t => (
                <span key={t} style={{ background: '#2d1a0a', border: '1px solid #3d2810', color: '#c8a45a', padding: '4px 12px', fontSize: '11px', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, #c8a45a, transparent)', marginBottom: '40px' }} />
        {artist.featuredSong && (
          <div style={{ background: '#221508', border: '1px solid #c8a45a', padding: '16px 24px', marginBottom: '32px', fontFamily: "'Playfair Display', serif", color: '#c8a45a', fontSize: '18px', fontStyle: 'italic' }}>
            {artist.featuredSong}
          </div>
        )}
        <p style={{ fontSize: '20px', lineHeight: 1.9, color: '#d4c4a8', fontFamily: "'Crimson Pro', Georgia, serif", margin: '0 0 40px' }}>{artist.bio}</p>
        {/* Website */}
        {artist.website && (
          <a href={artist.website} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', marginBottom: '20px',
            background: '#c8a45a', color: '#1a1208', padding: '10px 24px',
            fontFamily: "'Oswald', sans-serif", fontSize: '12px',
            letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none',
          }}>Official Website ↗</a>
        )}
        {/* Streaming & social links */}
        {Object.keys(artist.links).length > 0 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: artist.website ? '0' : '0' }}>
            {[
              ['spotify',   'Spotify',      '#1DB954'],
              ['apple',     'Apple Music',  '#fa243c'],
              ['youtube',   'YouTube',      '#FF0000'],
              ['bandcamp',  'Bandcamp',     '#1da0c3'],
              ['soundcloud','SoundCloud',   '#ff5500'],
              ['instagram', 'Instagram',    '#E1306C'],
              ['facebook',  'Facebook',     '#1877F2'],
              ['twitter',   'Twitter / X',  '#1DA1F2'],
              ['contact',   'Booking / EPK','#c8a45a'],
            ].filter(([key]) => artist.links[key]).map(([key, label, color]) => (
              <a key={key} href={artist.links[key]} target="_blank" rel="noopener noreferrer" style={{
                background: 'transparent', border: `1px solid ${color}50`,
                color: '#f2ead8', padding: '9px 18px',
                fontFamily: "'Oswald', sans-serif", fontSize: '11px',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                textDecoration: 'none', display: 'inline-block',
              }}>{label} ↗</a>
            ))}
          </div>
        )}
        {!artist.website && Object.keys(artist.links).length === 0 && (
          <p style={{ color: '#5a3a1a', fontStyle: 'italic', fontSize: '15px' }}>Links coming soon.</p>
        )}
        {artist.songLog && (
          <div style={{ marginTop: '48px' }}>
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, #c8a45a, transparent)', marginBottom: '32px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '24px', margin: '0 0 24px' }}>Song Log</h3>
            <img src={artist.songLog} alt="Song Log" style={{ width: '100%', maxWidth: '600px', display: 'block' }} />
          </div>
        )}
      </div>
    </div>
  );
};

const ArtistsPage = ({ navigate, selectedArtistSlug }) => {
  const [selectedArtist, setSelectedArtist] = React.useState(
    selectedArtistSlug ? ARTIST_DATA.find(a => a.slug === selectedArtistSlug) : null
  );

  if (selectedArtist) {
    return <ArtistBioPage artist={selectedArtist} onBack={() => setSelectedArtist(null)} />;
  }

  return (
    <div style={{ background: '#1a1208', minHeight: '100vh', paddingTop: '72px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>The Roster</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0 0 16px' }}>Meet the Artists</h1>
          <div style={{ color: '#c8a45a', letterSpacing: '0.2em', fontSize: '13px' }}>★ AMERICANA &nbsp;★&nbsp; COUNTRY &nbsp;★&nbsp; FOLK ★</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
          {ARTIST_DATA.map(artist => (
            <ArtistCard key={artist.slug} artist={artist} onClick={setSelectedArtist} />
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ArtistsPage, ARTIST_DATA });
