
// Pages.jsx — Story, Events, Music, Merch, Contact pages

// ── OUR STORY ──────────────────────────────────────────────
const StoryPage = () => {
  return (
    <div style={{ background: '#f2ead8', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero banner */}
      <div style={{ background: '#1a1208', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>The Gruene Songwriters Collective</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0 0 16px' }}>Our Story</h1>
        <div style={{ color: '#c8a45a', letterSpacing: '0.25em', fontSize: '13px' }}>★ &nbsp; FROM THE HILLS OF GRUENE &nbsp; ★</div>
      </div>
      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={pagesStyles.pullQuote}>
          "From the hills of Gruene to the shores of Canyon Lake, where songs are built one story at a time."
        </div>
        <div style={{ width: '60px', height: '2px', background: '#8b2020', margin: '40px 0' }} />
        <h2 style={pagesStyles.h2}>Summer of 2025</h2>
        <p style={pagesStyles.body}>
          The Gruene Songwriters Collective formed in the summer of '25, when a mix of aspiring and seasoned writers gathered for a three-day workshop in Gruene, Texas. Led by acclaimed songwriters <a href="https://www.jasoneady.com/" target="_blank" rel="noopener noreferrer" style={{color:'#8b2020'}}>Jason Eady</a> and <a href="https://www.adamhood.com/" target="_blank" rel="noopener noreferrer" style={{color:'#8b2020'}}>Adam Hood</a>, the experience helped shape both our craft and the community we've built together.
        </p>
        <p style={pagesStyles.body}>
          What none of us expected was how much the place itself would matter. Gruene — with its legendary dance hall, its cypress-shaded river bends, its unhurried pace — has a way of pulling the truth out of a song. You can't fake it there.
        </p>
        <div style={{ width: '60px', height: '2px', background: '#8b2020', margin: '40px 0' }} />
        <h2 style={pagesStyles.h2}>The Community We've Built</h2>
        <p style={pagesStyles.body}>
          Since then, we've stayed connected through monthly songwriting circles — sharing new material, listening closely, and offering honest feedback and encouragement. What began as a creative exercise has grown into something deeper: a place where friendships take root, ideas sharpen, and each writer finds their voice.
        </p>
        <p style={pagesStyles.body}>
          Our group spans a range of styles, backgrounds, and goals. Neo-traditional country from the Fort Worth dancehalls. Red Dirt ballads from the Texas plains. Kansas folk. Nashville pop. Outlaw southern gothic. Indie Americana. We don't all sound the same — and that's exactly the point.
        </p>
        <p style={pagesStyles.body}>
          But we're united by a shared respect for the craft, and for each other. Gatherings like this are simply an extension of that spirit.
        </p>
        <div style={{ width: '60px', height: '2px', background: '#8b2020', margin: '40px 0' }} />
        <h2 style={pagesStyles.h2}>Canyon Lake, Texas</h2>
        <p style={pagesStyles.body}>
          We're proud to be bringing our music to Canyon Lake, near the Guadalupe River, in the heart of the Texas Hill Country. With River Road nearby and bluebonnets and Indian paintbrush in bloom, it's a fitting backdrop for songs grounded in story, place, and connection.
        </p>
        <div style={{ background: '#1a1208', padding: '32px', marginTop: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }}>
            {[['Est.', "Summer '25", 'Founded in Gruene, TX'], ['10', 'Artists', 'From across the country'], ['1', 'Mission', 'Songs that tell the truth']].map(([num, label, sub]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display', serif", color: '#c8a45a', fontSize: '40px', fontWeight: 700 }}>{num}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", color: '#f2ead8', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</div>
                <div style={{ color: '#8b6540', fontSize: '13px', marginTop: '4px', fontStyle: 'italic' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── EVENTS ─────────────────────────────────────────────────
const PAST_EVENTS = [
  {
    id: 1, title: 'Texas Hill Country Spring House Concert',
    date: 'Saturday, March 28, 2026', time: '6:00 PM',
    location: 'Canyon Lake, Texas', sublocation: 'Near the Guadalupe River',
    hostedBy: 'Andy Rackley & Lucas Duda',
    producedBy: 'Rowdy Miller',
    headliners: ['Wesley Hanna', 'Chris Welch'],
    supporting: ['Jack Angel', 'John Gurnot', 'Nathan Young', 'Rowdy Miller', 'Jack Brandt', 'Todd Johnson', 'Katie Markus', 'Dana Snyder'],
    description: 'The Gruene Songwriters Collective presents an intimate house concert in the heart of the Texas Hill Country. With bluebonnets and Indian paintbrush in bloom along River Road, this evening of original music is one you won\'t forget.',
    donateInfo: 'All proceeds go directly to the artists. Donate via Venmo @Andy-Rackley.',
    poster: 'uploads/Gruene_Poster.jpg',
    tags: ['House Concert', 'All Ages', 'BYOB'],
  },
];

const UPCOMING_EVENTS = [
  {
    id: 2,
    artist: 'Chris Welch',
    photo: 'uploads/ef534480-5491-4254-b1a1-8aa650ad3c71.png',
    date: 'Thursday, April 30, 2026',
    time: '7:00 PM',
    venue: "Papa Dubi's",
    location: 'Albertville, AL',
  },
  {
    id: 3,
    artist: 'Wesley Hanna',
    photo: 'uploads/wesley_hanna.png',
    date: 'Thursday, May 7, 2026',
    time: '',
    venue: 'Dosey Doe - The Big Barn',
    location: 'The Woodlands, TX',
  },
];

const EventsPage = ({ navigate }) => {
  return (
    <div style={{ background: '#1a1208', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ background: '#221508', padding: '60px 32px', textAlign: 'center', borderBottom: '1px solid #3d2810' }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>Live Music</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0' }}>Shows</h1>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 32px' }}>

        {/* Upcoming Events */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>On the Calendar</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(28px, 4vw, 48px)', margin: '0 0 32px', borderBottom: '1px solid #3d2810', paddingBottom: '24px' }}>Upcoming Shows</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {UPCOMING_EVENTS.map(evt => (
              <div key={evt.id} style={{ background: '#221508', border: '1px solid #3d2810', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid #c8a45a', background: '#2d1a0a', flexShrink: 0, overflow: 'hidden' }}>
                  {evt.photo
                    ? <img src={evt.photo} alt={evt.artist} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c8a45a', fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700 }}>{evt.artist[0]}</div>
                  }
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '22px', marginBottom: '4px' }}>{evt.artist}</div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '13px', letterSpacing: '0.1em' }}>
                    {evt.date}{evt.time ? ` · ${evt.time}` : ''}
                  </div>
                </div>
                <div style={{ textAlign: 'right', minWidth: '160px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '16px' }}>{evt.venue}</div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b6540', fontSize: '12px', letterSpacing: '0.1em', marginTop: '2px' }}>{evt.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b6540', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>In the Books</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(28px, 4vw, 48px)', margin: '0 0 32px', borderBottom: '1px solid #3d2810', paddingBottom: '24px' }}>Past Events</h2>
          {PAST_EVENTS.map(evt => (
            <div key={evt.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'start', marginBottom: '48px' }}>
              <div>
                <img src={evt.poster} alt={evt.title}
                  style={{ width: '100%', boxShadow: '6px 6px 24px rgba(0,0,0,0.5)', border: '3px solid #3d2810' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b6540', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>Past Event</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(22px, 3vw, 36px)', margin: '0 0 16px', lineHeight: 1.2 }}>{evt.title}</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {evt.tags.map(t => <span key={t} style={{ background: '#2d1a0a', border: '1px solid #3d2810', color: '#8b6540', padding: '4px 12px', fontSize: '11px', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em' }}>{t}</span>)}
                </div>
                <div style={{ borderLeft: '3px solid #3d2810', paddingLeft: '20px', marginBottom: '24px' }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b6540', fontSize: '15px', letterSpacing: '0.1em', marginBottom: '4px' }}>{evt.date} · {evt.time}</div>
                  <div style={{ color: '#d4c4a8', fontSize: '17px', fontFamily: "'Playfair Display', serif" }}>{evt.location}</div>
                  <div style={{ color: '#5a3a1a', fontSize: '14px', fontStyle: 'italic' }}>{evt.sublocation}</div>
                </div>
                <p style={{ color: '#8b6540', fontSize: '15px', lineHeight: 1.8, fontFamily: "'Crimson Pro', Georgia, serif", marginBottom: '20px' }}>{evt.description}</p>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: '#5a3a1a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Headlined by</div>
                  <div style={{ color: '#8b6540', fontFamily: "'Playfair Display', serif", fontSize: '16px' }}>{evt.headliners.join(' ★ ')}</div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: '#5a3a1a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Also Performed</div>
                  <div style={{ color: '#5a3a1a', fontSize: '14px', fontFamily: "'Crimson Pro', Georgia, serif", lineHeight: 1.8 }}>{evt.supporting.join(' · ')}</div>
                </div>
                {evt.producedBy && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #3d2810' }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", color: '#5a3a1a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Produced by</div>
                    <div style={{ color: '#8b6540', fontSize: '15px', fontFamily: "'Playfair Display', serif" }}>{evt.producedBy}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div style={{ background: '#221508', border: '1px solid #3d2810', padding: '40px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '22px', marginBottom: '8px' }}>Want to Book the Collective?</div>
          <p style={{ color: '#8b6540', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '16px', margin: '0 0 20px' }}>Available for private events, house concerts, festivals, and more.</p>
          <button onClick={() => navigate('contact')} style={{ background: '#c8a45a', color: '#1a1208', border: 'none', padding: '12px 28px', fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>Inquire About Booking</button>
        </div>
      </div>
    </div>
  );
};

// ── MUSIC ──────────────────────────────────────────────────
const MusicPage = () => {
  const artists = window.ARTIST_DATA || [];
  return (
    <div style={{ background: '#f2ead8', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ background: '#1a1208', padding: '60px 32px', textAlign: 'center', borderBottom: '1px solid #3d2810' }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>Stream & Download</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0' }}>Music</h1>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 32px' }}>
        {/* Featured Music */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>Watch</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1a1208', fontSize: 'clamp(28px, 4vw, 44px)', margin: '0 0 32px', textAlign: 'center' }}>Featured Music</h2>
          <div style={{ position: 'relative', paddingTop: '56.25%', background: '#1a1208', boxShadow: '8px 8px 32px rgba(0,0,0,0.25)' }}>
            <iframe
              src="https://www.youtube.com/embed/MaiZnVxY3xI"
              title="Featured Music"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
        {/* The Artists */}
        <div>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>Find Your Favorite</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1a1208', fontSize: 'clamp(28px, 4vw, 44px)', margin: '0 0 32px', textAlign: 'center' }}>The Artists</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {artists.map(a => {
            const firstLink = a.links?.spotify || a.links?.apple || a.links?.bandcamp || a.links?.soundcloud || a.links?.youtube || a.website;
            return (
              <div key={a.slug} style={{ background: '#1a1208', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #c8a45a', background: '#2d1a0a', flexShrink: 0, overflow: 'hidden' }}>
                  {a.photo
                    ? <img src={a.photo} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c8a45a', fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700 }}>{a.initials}</div>
                  }
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#f2ead8', fontFamily: "'Playfair Display', serif", fontSize: '16px', marginBottom: '4px' }}>{a.name}</div>
                  <div style={{ color: '#8b6540', fontSize: '12px', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.genre}</div>
                </div>
                {firstLink ? (
                  <a href={firstLink} target="_blank" rel="noopener noreferrer" style={{ color: '#c8a45a', fontSize: '18px', textDecoration: 'none', flexShrink: 0 }}>▶</a>
                ) : (
                  <span style={{ color: '#3d2810', fontSize: '18px', flexShrink: 0 }}>▶</span>
                )}
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── MERCH ──────────────────────────────────────────────────
const MERCH_ITEMS = [
  { id: 1, name: 'Spring House Concert Poster', price: 25, description: 'Official 2026 Texas Hill Country Spring House Concert poster. Museum-quality print, 12×18 inches.', tag: 'Art Print', img: 'uploads/Gruene_Poster.jpg', badge: 'BESTSELLER' },
  { id: 2, name: 'GSC Logo Tee', price: 35, description: 'Classic unisex tee featuring the iconic Gruene water tower logo. 100% ring-spun cotton, garment dyed.', tag: 'Apparel', img: null, badge: null },
  { id: 3, name: 'Round Badge Sticker', price: 5, description: 'High-quality vinyl sticker featuring the 2026 Texas Hill Country Spring House Concert badge design. Weatherproof.', tag: 'Accessories', img: 'uploads/logo (1).png', badge: null },
  { id: 4, name: 'GSC Logo Cap', price: 30, description: 'Five-panel cap with embroidered Gruene water tower logo. One size fits most, adjustable strap.', tag: 'Apparel', img: null, badge: null },
  { id: 5, name: 'Music Bundle (Digital)', price: 15, description: 'Digital download collection featuring tracks from GSC artists. MP3 + WAV formats included.', tag: 'Music', img: null, badge: 'NEW' },
  { id: 6, name: 'GSC Hoodie', price: 55, description: 'Premium heavyweight fleece hoodie with embroidered GSC logo on the chest. Unisex sizing.', tag: 'Apparel', img: null, badge: null },
];

const MerchPage = () => {
  return (
    <div style={{ background: '#f2ead8', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ background: '#1a1208', padding: '60px 32px', textAlign: 'center', borderBottom: '1px solid #3d2810' }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>Official Merchandise</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0' }}>The Store</h1>
      </div>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '100px 32px', textAlign: 'center' }}>
        <img src="uploads/logo_badge.png" alt="GSC" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '32px', opacity: 0.6 }} />
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>Good Things Take Time</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1a1208', fontSize: 'clamp(36px, 5vw, 56px)', margin: '0 0 16px' }}>Coming Soon</h2>
        <div style={{ width: '60px', height: '2px', background: '#8b2020', margin: '0 auto 24px' }} />
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '19px', color: '#5a3a1a', lineHeight: 1.8 }}>
          Official merchandise for The Gruene Songwriters Collective is on its way. Check back soon.
        </p>
      </div>
    </div>
  );
};

// ── CONTACT ────────────────────────────────────────────────
const ContactPage = () => {
  const [form, setForm] = React.useState({ name: '', email: '', subject: 'booking', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
    }).then(() => setSent(true)).catch(() => setSent(true));
  };

  return (
    <div style={{ background: '#1a1208', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ background: '#221508', padding: '60px 32px', textAlign: 'center', borderBottom: '1px solid #3d2810' }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: '#8b2020', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: 'clamp(36px, 5vw, 64px)', margin: '0' }}>Contact & Booking</h1>
      </div>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 32px' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", color: '#c8a45a', fontSize: '48px', marginBottom: '16px' }}>★</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#f2ead8', fontSize: '32px', marginBottom: '12px' }}>Message Sent</h2>
            <p style={{ color: '#d4c4a8', fontFamily: "'Crimson Pro', serif", fontSize: '18px' }}>We'll be in touch soon. Thank you for reaching out to the Gruene Songwriters Collective.</p>
          </div>
        ) : (
          <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            {[['Name', 'name', 'text', 'Your full name'], ['Email', 'email', 'email', 'your@email.com']].map(([label, key, type, placeholder]) => (
              <div key={key} style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</label>
                <input type={type} placeholder={placeholder} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  style={{ width: '100%', background: '#221508', border: '1px solid #3d2810', color: '#f2ead8', padding: '14px 16px', fontFamily: "'Crimson Pro', serif", fontSize: '16px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Inquiry Type</label>
              <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                style={{ width: '100%', background: '#221508', border: '1px solid #3d2810', color: '#f2ead8', padding: '14px 16px', fontFamily: "'Crimson Pro', serif", fontSize: '16px', outline: 'none', boxSizing: 'border-box' }}>
                <option value="booking">Booking / Event Inquiry</option>
                <option value="press">Press / Media</option>
                <option value="merch">Merch / Orders</option>
                <option value="general">General Question</option>
                <option value="join">Join the Collective</option>
              </select>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
              <textarea placeholder="Tell us about your event, question or idea..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={6}
                style={{ width: '100%', background: '#221508', border: '1px solid #3d2810', color: '#f2ead8', padding: '14px 16px', fontFamily: "'Crimson Pro', serif", fontSize: '16px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" style={{ width: '100%', background: '#8b2020', color: '#f2ead8', border: 'none', padding: '16px', fontFamily: "'Oswald', sans-serif", fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        )}
        <div style={{ marginTop: '60px', borderTop: '1px solid #3d2810', paddingTop: '40px' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", color: '#c8a45a', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>Follow the Collective</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {['Facebook', 'Instagram', 'YouTube', 'Spotify'].map(s => (
              <a key={s} href="#" style={{ color: '#8b6540', fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #3d2810', paddingBottom: '2px' }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const pagesStyles = {
  h2: { fontFamily: "'Playfair Display', serif", color: '#1a1208', fontSize: 'clamp(24px, 3vw, 36px)', margin: '0 0 16px' },
  body: { fontSize: '19px', lineHeight: 1.9, color: '#3d2b1a', fontFamily: "'Crimson Pro', Georgia, serif", margin: '0 0 20px' },
  pullQuote: { fontFamily: "'Playfair Display', serif", color: '#8b2020', fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.5, fontStyle: 'italic', borderLeft: '4px solid #8b2020', paddingLeft: '24px', margin: '0 0 32px' },
};

Object.assign(window, { StoryPage, EventsPage, MusicPage, MerchPage, ContactPage });
