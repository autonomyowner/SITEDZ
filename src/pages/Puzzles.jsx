/* ─── Data ─────────────────────────────────────────────────── */

const PUZZLES = [
  {
    id: 1,
    tag: 'Best Seller',
    name: 'Custom Photo Jigsaw',
    desc: 'Upload any photo — family portrait, landscape, pet — and we engrave it onto premium walnut, then precision-cut it into 100+ interlocking pieces.',
    detail: 'Birch plywood · 30×40 cm · 100–500 pieces',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
  },
  {
    id: 2,
    tag: '3D Assembly',
    name: 'Wildlife 3D Sculpture',
    desc: 'Flat laser-cut pieces that slot together without glue to form a freestanding 3D animal. Lion, deer, eagle, elephant — choose your creature.',
    detail: 'MDF 3mm · Natural or stained finish · 40–80 pieces',
    img: '/products/p10.jpg',
  },
  {
    id: 3,
    tag: 'Educational',
    name: 'Kids Name Puzzle',
    desc: 'Each letter of a child\'s name becomes a chunky, hand-friendly piece engraved with animals or shapes. Perfect first birthday or nursery gift.',
    detail: 'Birch plywood · Painted or natural · Age 1+',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    id: 4,
    tag: 'Map',
    name: 'City Map Puzzle',
    desc: 'Any city in the world, laser-cut into its neighbourhoods and districts. Streets are engraved onto each piece. Custom framing available.',
    detail: 'Walnut veneer · 50×50 cm · 40–120 pieces',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=80',
  },
  {
    id: 5,
    tag: 'Illuminated',
    name: 'Mandala Puzzle Panel',
    desc: 'A full mandala design cut into concentric ring segments. When assembled and wall-mounted with our LED kit, it glows. Puzzle and wall art in one.',
    detail: 'Walnut · LED warm white included · 24 pieces',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=700&q=80',
  },
  {
    id: 6,
    tag: 'Brain Teaser',
    name: 'Geometric Brain Teaser',
    desc: 'A set of precision-cut interlocking oak shapes that pack into a perfect rectangle — but reassembling them is the challenge. Satisfying to display.',
    detail: 'Oak · 20×20 cm · 7–15 pieces · Difficulty: Hard',
    img: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=700&q=80',
  },
  {
    id: 7,
    tag: 'Gift',
    name: 'Wedding Date Puzzle',
    desc: 'Names, date, and a custom message are engraved across the puzzle face. Pieces reveal the hidden text only when fully assembled.',
    detail: 'Maple · 25×35 cm · 60 pieces · Gift box included',
    img: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=700&q=80',
  },
  {
    id: 8,
    tag: 'Star Map',
    name: 'Constellation Puzzle',
    desc: 'The exact night sky from any date and location, precision-engraved and cut. Stars, constellations, and the horizon rendered in solid walnut.',
    detail: 'Walnut · 40×40 cm · 80 pieces · Engraved coordinates',
    img: 'https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=700&q=80',
  },
]

const MARQUEE_PUZZLES = [
  'Jigsaw Puzzles', '3D Assembly', 'Name Puzzles', 'Map Puzzles',
  'Brain Teasers', 'Star Maps', 'Wedding Gifts', 'Custom Orders',
  'Jigsaw Puzzles', '3D Assembly', 'Name Puzzles', 'Map Puzzles',
  'Brain Teasers', 'Star Maps', 'Wedding Gifts', 'Custom Orders',
]

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'Choose a style',
    desc: 'Pick from our puzzle types or bring your own idea. We handle everything from a single photo to a complex custom design.',
  },
  {
    num: '02',
    title: 'We design & cut',
    desc: 'Our CNC laser cuts every piece to ±0.1mm precision. Interlocking joints are tight, satisfying, and built to last for decades.',
  },
  {
    num: '03',
    title: 'Finished & shipped',
    desc: 'Each puzzle is hand-sanded, finished, and packaged in a custom wooden keepsake box — ready to gift or display.',
  },
]

/* ─── Sections ──────────────────────────────────────────────── */

function PuzzleHero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div>
          <h1 className="hero__headline">
            <span className="hero__line" style={{ '--d': '0ms' }}>
              Wood <span className="hero__underline">puzzles</span>,
            </span>
            <span className="hero__line" style={{ '--d': '120ms' }}>
              laser-cut with
            </span>
            <span className="hero__line" style={{ '--d': '240ms' }}>
              <span className="hero__underline">precision</span>
            </span>
          </h1>
        </div>
        <div className="hero__tagline-col">
          <p className="hero__tagline">
            Every puzzle is cut from premium solid wood using our
            CNC laser — tight joints, crisp engravings, and a
            satisfying snap on every piece. Easy to make, made to last.
          </p>
        </div>
      </div>
    </section>
  )
}

function PuzzleFeatured() {
  return (
    <section className="featured-wrap">
      <div className="featured__card">
        <span className="featured__label">PUZZLES</span>
        <h2 className="featured__title">
          LASER CUT
          <br />
          IN SOLID <em>wood</em>
        </h2>
        <div className="featured__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=85"
            alt="Laser cut wood puzzle"
            className="featured__image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

function PuzzleMarquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {MARQUEE_PUZZLES.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

function PuzzleGrid() {
  return (
    <section className="puzzle-section">
      <div className="puzzle-section__inner">
        <p className="section-label">What We Make</p>
        <div className="puzzle-grid">
          {PUZZLES.map((p, i) => (
            <article key={p.id} className={`puzzle-card${i === 0 ? ' puzzle-card--featured' : ''}`}>
              <div className="puzzle-card__img-wrap">
                <img src={p.img} alt={p.name} className="puzzle-card__img" loading="lazy" />
                <span className="puzzle-card__tag">{p.tag}</span>
              </div>
              <div className="puzzle-card__body">
                <h3 className="puzzle-card__name">{p.name}</h3>
                <p className="puzzle-card__desc">{p.desc}</p>
                <p className="puzzle-card__detail">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__inner">
        <div className="how-it-works__header">
          <p className="section-label" style={{ color: 'rgba(240,237,229,0.4)' }}>The Process</p>
          <h2 className="how-it-works__title">
            From your idea
            <br />
            to <em>finished puzzle</em>
          </h2>
        </div>
        <div className="how-it-works__steps">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.num} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <h3 className="how-step__title">{s.title}</h3>
              <p className="how-step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PuzzleCTA() {
  return (
    <section className="commission" id="commission">
      <div className="commission__inner">
        <h2 className="commission__title">
          Your design,
          <br />
          <em>cut to perfection</em>
        </h2>
        <p className="commission__sub">
          Send us a photo, a map, a name, or just an idea —
          we'll turn it into a precision-cut wood puzzle you'll
          want to keep forever.
        </p>
        <a href="mailto:hello@origawood.com" className="btn-light">
          Order a Custom Puzzle
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function PuzzlesPage() {
  return (
    <>
      <PuzzleHero />
      <PuzzleFeatured />
      <PuzzleMarquee />
      <PuzzleGrid />
      <HowItWorks />
      <PuzzleCTA />
    </>
  )
}
