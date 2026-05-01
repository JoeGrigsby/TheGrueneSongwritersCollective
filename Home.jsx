// Home.jsx — Hero, intro, and featured event banner
const HERO_IMAGES = [
  "uploads/Screenshot 2026-04-19 at 2.11.13 PM.png",
  "uploads/Screenshot 2026-04-19 at 2.11.05 PM.png",
  "uploads/Screenshot 2026-04-19 at 2.10.52 PM.png",
  "uploads/Screenshot 2026-04-19 at 2.10.32 PM.png",
  "uploads/Screenshot 2026-04-19 at 2.10.22 PM.png",
];

const HeroCarousel = ({ navigate, loaded, headlineFont = 'Abril Fatface' }) => {
  const [current, setCurrent] = React.useState(0);
  const [prev, setPrev] = React.useState(null);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(c => (c + 1) % HERO_IMAGES.length);
      setTimeout(() => { setPrev(null); setFading(false); }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i) => {
    if (i === current) return;
    setPrev(current); setFading(true);
    setCurrent(i);
    setTimeout(() => { setPrev(null); setFading(false); }, 1000);
  };

  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Outgoing image */}
      {prev !== null && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("${HERO_IMAGES[prev]}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: fading ? 0 : 1, transition: 'opacity 1s ease',
          zIndex: 1,
        }} />
      )}
      {/* Current image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("${HERO_IMAGES[current]}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: fading ? 1 : 1,
        zIndex: 2,
      }} />
      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        background: 'linear-gradient(to bottom, rgba(15,8,2,0.55) 0%, rgba(15,8,2,0.35) 40%, rgba(15,8,2,0.75) 100%)',
      }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 4, textAlign: 'center', padding: '100px 24px 80px', width: '100%' }}>
        <div style={{ color: '#c8a45a', letterSpacing: '0.12em', fontSize: 'clamp(10px, 2.8vw, 13px)', marginBottom: '28px', opacity: loaded ? 1 : 0, transition: 'opacity 0.8s', fontFamily: "'Oswald', sans-serif", whiteSpace: 'nowrap' }}>
          ★ AMERICANA &nbsp;★&nbsp; COUNTRY &nbsp;★&nbsp; FOLK ★
        </div>
        <h1 style={{
          fontFamily: `'${headlineFont}', 'Playfair Display', Georgia, serif`,
          fontSize: 'clamp(40px, 6vw, 86px)',
          color: '#f2ead8',
          margin: '0 0 8px',
          letterSpacing: '0.05em',
          lineHeight: 1.1,
          opacity: loaded ? 1 : 0, transition: 'opacity 1s 0.3s',
          textWrap: 'pretty',
          textShadow: '0 2px 24px rgba(0,0,0,0.6)',
        }}>
          The Gruene<br/>Songwriters<br/>Collective
        </h1>
        <div style={{ width: '200px', height: '2px', background: 'linear-gradient(to right, transparent, #c8a45a, transparent)', margin: '24px auto' }} />
        <p style={{
          color: '#e8d8a8', fontSize: 'clamp(14px, 2vw, 19px)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          fontFamily: "'Oswald', sans-serif", fontWeight: 400,
          margin: '0 0 44px',
          opacity: loaded ? 1 : 0, transition: 'opacity 1s 0.5s',
          textShadow: '0 1px 8px rgba(0,0,0,0.5)',
        }}>
          Gruene, Texas · Est. Summer 2025
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', opacity: loaded ? 1 : 0, transition: 'opacity 1s 0.7s' }}>
          <button onClick={() => navigate('artists')} style={homeStyles.btnPrimary}>Meet the Artists</button>
          <button onClick={() => navigate('events')} style={homeStyles.btnSecondary}>Upcoming Shows</button>
        </div>
      </div>
      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', gap: '10px', alignItems: 'center' }}>
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '24px' : '8px', height: '8px',
            borderRadius: '4px', border: 'none', cursor: 'pointer',
            background: i === current ? '#c8a45a' : 'rgba(200,164,90,0.4)',
            padding: 0, transition: 'all 0.3s',
          }} />
        ))}
      </div>
    </section>
  );
};

const HomePage = ({ navigate, headlineFont }) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
      {/* HERO — full-bleed photo carousel */}
      <HeroCarousel navigate={navigate} loaded={loaded} headlineFont={headlineFont} />

      {/* ABOUT STRIP */}
      <section style={{ background: '#f2ead8', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={homeStyles.sectionLabel}>Our Story</div>
          <h2 style={homeStyles.sectionTitle}>Where Songs Are Built<br/>One Story at a Time</h2>
          <div style={{ width: '120px', height: '1px', background: '#8b2020', margin: '24px auto' }} />
          <p style={homeStyles.bodyText}>
            The Gruene Songwriters Collective formed in the summer of '25, when a mix of aspiring and seasoned writers gathered for a three-day workshop in Gruene, Texas. Led by acclaimed songwriters Jason Eady and Adam Hood, the experience helped shape both our craft and the community we've built.
          </p>
          <p style={homeStyles.bodyText}>
            Since then, we've stayed connected through monthly songwriting circles: sharing new material, listening closely, and offering honest feedback and encouragement. Our group spans a range of styles, backgrounds, and goals, but we're united by a shared respect for the craft, and for each other.
          </p>
          <button onClick={() => navigate('story')} style={{ ...homeStyles.btnPrimary, background: '#8b2020', marginTop: '24px' }}>Read the Full Story</button>
        </div>
      </section>

      {/* ARTIST GRID PREVIEW */}
      <section style={{ background: '#221508', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ ...homeStyles.sectionLabel, color: '#c8a45a' }}>The Roster</div>
          <h2 style={{ ...homeStyles.sectionTitle, color: '#f2ead8' }}>Ten Voices.<br/>One Collective.</h2>
          <div style={{ width: '120px', height: '1px', background: '#c8a45a', margin: '24px auto 48px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {ARTISTS.map(a => (
              <div key={a.name} onClick={() => navigate('artists', a.slug)}
                style={{ cursor: 'pointer', textAlign: 'center' }}
                className="artist-thumb">
                <div style={{
                  width: '100px', height: '100px', borderRadius: '50%',
                  border: `2px solid #c8a45a`,
                  background: '#2d1a0a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontSize: '28px', fontFamily: "'Playfair Display', serif",
                  color: '#c8a45a', fontWeight: 700,
                  transition: 'border-color 0.2s, background 0.2s',
                  overflow: 'hidden',
                }}>
                  {a.photo
                    ? <img src={a.photo} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : a.initials}
                </div>
                <div style={{ color: '#f2ead8', fontFamily: "'Oswald', sans-serif", fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.name}</div>
                <div style={{ color: '#c8a45a', fontSize: '12px', marginTop: '4px', fontStyle: 'italic' }}>{a.genre}</div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('artists')} style={homeStyles.btnGold}>View All Artist Bios</button>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section style={{ background: '#f2ead8', padding: '80px 24px' }}>
        <div className="featured-event-grid" style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={homeStyles.sectionLabel}>Featured Event</div>
            <h2 style={{ ...homeStyles.sectionTitle, textAlign: 'left', fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Texas Hill Country<br/>Spring House Concert
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#8b2020', margin: '16px 0' }} />
            <div style={{ fontFamily: "'Oswald', sans-serif", color: '#b84040', letterSpacing: '0.15em', fontSize: '15px', marginBottom: '8px' }}>
              SATURDAY · MARCH 28, 2026
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", color: '#5a3a1a', letterSpacing: '0.1em', fontSize: '14px', marginBottom: '24px' }}>
              6 O'CLOCK IN THE EVENING · CANYON LAKE, TEXAS
            </div>
            <p style={{ ...homeStyles.bodyText, textAlign: 'left', margin: '0 0 24px' }}>
              From the hills of Gruene to the shores of Canyon Lake, near the Guadalupe River, with bluebonnets and Indian paintbrush in bloom.
            </p>
            <button onClick={() => navigate('events', null, 'past-events')} style={{ ...homeStyles.btnPrimary, background: '#8b2020' }}>Event Recap</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="uploads/Gruene_Poster.jpg" alt="Spring House Concert Poster"
              style={{ width: '100%', maxWidth: '340px', boxShadow: '8px 8px 32px rgba(0,0,0,0.3)', border: '4px solid #1a1208' }} />
          </div>
        </div>
      </section>

      {/* MERCH STRIP */}
      <section style={{ background: '#1a1208', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ ...homeStyles.sectionLabel, color: '#c8a45a' }}>Official Merch</div>
        <h2 style={{ ...homeStyles.sectionTitle, color: '#f2ead8', fontSize: '36px' }}>Own a Part of the Story</h2>
        <div style={{ width: '80px', height: '1px', background: '#c8a45a', margin: '16px auto 32px' }} />
        <button onClick={() => navigate('merch')} style={homeStyles.btnGold}>Shop Now</button>
      </section>

      <style>{`
        .artist-thumb:hover > div:first-child { border-color: #f2ead8 !important; background: #3d2210 !important; }
        @media (max-width: 640px) {
          .featured-event-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

const homeStyles = {
  btnPrimary: {
    background: '#1a1208', color: '#f2ead8',
    border: '1px solid #1a1208', padding: '14px 32px',
    fontFamily: "'Oswald', sans-serif", fontSize: '14px',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    cursor: 'pointer', transition: 'background 0.2s, color 0.2s',
  },
  btnSecondary: {
    background: 'transparent', color: '#f2ead8',
    border: '1px solid #c8a45a', padding: '14px 32px',
    fontFamily: "'Oswald', sans-serif", fontSize: '14px',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    cursor: 'pointer',
  },
  btnGold: {
    background: '#c8a45a', color: '#1a1208',
    border: 'none', padding: '14px 32px',
    fontFamily: "'Oswald', sans-serif", fontSize: '14px',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    cursor: 'pointer',
  },
  sectionLabel: {
    fontFamily: "'Oswald', sans-serif", fontSize: '12px',
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: '#b84040', marginBottom: '12px',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(32px, 5vw, 56px)',
    color: '#1a1208', margin: '0', lineHeight: 1.15, textWrap: 'pretty',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: '18px', lineHeight: 1.8, color: '#3d2b1a',
    textAlign: 'center', margin: '0 0 16px',
  },
};

const ARTISTS = [
  { name: 'Wesley Hanna', slug: 'wesley-hanna', initials: 'WH', genre: 'Neo-Traditional Country', photo: 'uploads/wesley_hanna.png' },
  { name: 'Chris Welch', slug: 'chris-welch', initials: 'CW', genre: 'Americana / Roots', photo: 'uploads/ef534480-5491-4254-b1a1-8aa650ad3c71.png' },
  { name: 'Jack Angel', slug: 'jack-angel', initials: 'JA', genre: 'Folk / Singer-Songwriter', photo: 'uploads/dc9ff49a-2d62-4188-b7c8-527ceff0f7fd.png' },
  { name: 'John Gurnot', slug: 'john-gurnot', initials: 'JG', genre: 'Americana / Red Dirt', photo: 'uploads/c476921b-6f46-40dd-af98-965b1c7acc8f.png' },
  { name: 'Nathan Young', slug: 'nathan-young', initials: 'NY', genre: 'Folk / Country', photo: 'uploads/22397cd2-b1d9-468e-9c74-88041af5778e.png' },
  { name: 'Rowdy Miller', slug: 'rowdy-miller', initials: 'RM', genre: 'Outlaw / Southern Gothic', photo: 'uploads/3955c5f1-a370-4349-b088-4003903d7bf5.png' },
  { name: 'Jack Brandt', slug: 'jack-brandt', initials: 'JB', genre: 'Country / Americana', photo: 'uploads/7ed29f46-0596-4218-b610-d3c8093b94c7.png' },
  { name: 'Todd Johnson', slug: 'todd-johnson', initials: 'TJ', genre: 'Americana Folk', photo: 'uploads/bf61bdd0-8be1-41dc-9e6e-86ae9d814b15.png' },
  { name: 'Katie Markus', slug: 'katie-markus', initials: 'KM', genre: 'Indie Americana', photo: 'uploads/dea0fe7e-22b0-4509-88f8-5fe7e7493a58.png' },
  { name: 'Dana Snyder', slug: 'dana-snyder', initials: 'DS', genre: 'Folk / Pop', photo: 'uploads/3964d42c-b958-4b12-8f4d-148c00a432df.png' },
];

Object.assign(window, { HomePage, ARTISTS, homeStyles });
