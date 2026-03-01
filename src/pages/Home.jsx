/* ─── Data ─────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1,
    name: 'Stellar Mandala',
    desc: 'Six-pointed star with warm amber LED halo',
    img: '/products/p1.jpg',
  },
  {
    id: 2,
    name: 'Chromatic Octagon',
    desc: 'Eight-sided panel with programmable RGB glow',
    img: '/products/p3.jpg',
  },
  {
    id: 3,
    name: 'Terrain Canvas',
    desc: 'Landscape panel with flowing golden illumination',
    img: '/products/p4.jpg',
  },
  {
    id: 4,
    name: 'Ocean Mandala',
    desc: 'Circular mandala in deep teal ambient light',
    img: '/products/p7.jpg',
  },
]

const GALLERY = [
  { src: '/products/p4.jpg', wide: true },
  { src: '/products/p15.jpg' },
  { src: '/products/p11.jpg' },
  { src: '/products/p1.jpg' },
  { src: '/products/p3.jpg' },
]

const MARQUEE_ITEMS = [
  'Walnut', 'Oak', 'Maple', 'Cherry',
  'LED Backlit', 'Laser Engraved', 'Hand Finished',
  'Custom Commission', 'Heirloom Quality',
  'Walnut', 'Oak', 'Maple', 'Cherry',
  'LED Backlit', 'Laser Engraved', 'Hand Finished',
  'Custom Commission', 'Heirloom Quality',
]

const MATERIALS = [
  {
    tag: 'Hardwood',
    name: 'American Walnut',
    desc: 'Rich, dark grain with warm chocolate tones. Our most popular choice for dramatic illumination contrast.',
  },
  {
    tag: 'Hardwood',
    name: 'White Oak',
    desc: 'Open grain with silvery undertones. Exceptional at diffusing warm LED light into subtle gradients.',
  },
  {
    tag: 'Softwood',
    name: 'Hard Maple',
    desc: 'Fine-grained and pale. Ideal for intricate engravings where detail resolution is paramount.',
  },
]

const STEPS = [
  { num: '01', title: 'Design Consultation', desc: 'We discuss your space, vision, and the story you want the piece to tell.' },
  { num: '02', title: 'Wood Selection', desc: 'We hand-select boards for grain character and suitability to your design.' },
  { num: '03', title: 'Carving & Engraving', desc: 'Precision laser engraving combined with hand-finishing brings the pattern to life.' },
  { num: '04', title: 'LED Integration', desc: 'Custom-wired LED system is built in — warm white, colour-changing, or smart-controlled.' },
]

/* ─── Sections ──────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div>
          <h1 className="hero__headline">
            <span className="hero__line" style={{ '--d': '0ms' }}>
              Custom <span className="hero__underline">crafted</span> and
            </span>
            <span className="hero__line" style={{ '--d': '120ms' }}>
              <span className="hero__underline">hand-carved</span> wood
            </span>
            <span className="hero__line" style={{ '--d': '240ms' }}>
              that puts artistry
            </span>
            <span className="hero__line" style={{ '--d': '360ms' }}>
              at the frontier
            </span>
          </h1>
        </div>
        <div className="hero__tagline-col">
          <p className="hero__tagline">
            Wood has a profound impact on space and memory.
            Origawood is a workshop dedicated to creating
            heirloom pieces that honour the grain, texture, and
            soul of natural materials.
          </p>
        </div>
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="featured-wrap">
      <div className="featured__card">
        <span className="featured__label">FEATURED</span>
        <h2 className="featured__title">
          HAND CARVED
          <br />
          IN SOLID <em>wood</em>
        </h2>
        <div className="featured__image-wrap">
          <img src="/products/p4.jpg" alt="Hand-carved illuminated wood panel" className="featured__image" loading="eager" />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

function Collection() {
  return (
    <section className="collection" id="collection">
      <p className="section-label">Our Collection</p>
      <div className="collection__grid">
        {PRODUCTS.map((p) => (
          <a key={p.id} href="#commission" className="product-card">
            <div className="product-card__img-wrap">
              <img src={p.img} alt={p.name} className="product-card__img" loading="lazy" />
            </div>
            <h3 className="product-card__name">{p.name}</h3>
            <p className="product-card__desc">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section className="craft" id="craft">
      <div className="craft__inner">
        <div>
          <p className="craft__section-label">The Process</p>
          <h2 className="craft__headline">
            Each piece born
            <br />
            from <em>patience</em>,
            <br />
            wood, and light
          </h2>
        </div>
        <div>
          <div className="craft__text">
            <p>
              We begin with premium hardwoods — walnut, oak, and maple —
              selected for their grain character and structural integrity.
              Every line you see is cut by precision laser and hand-finished
              to perfection.
            </p>
            <p>
              LED backlighting is integrated during construction, casting
              warm or chromatic light through the carved relief. The result
              is not furniture — it is sculpture that breathes on your wall.
            </p>
          </div>
          <div className="craft__steps">
            {STEPS.map((s) => (
              <div key={s.num} className="craft__step">
                <span className="craft__step-num">{s.num}</span>
                <div className="craft__step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="section-label">The Work</p>
      <div className="gallery__grid">
        {GALLERY.map((item, i) => (
          <div key={i} className={`gallery__item${item.wide ? ' gallery__item--wide' : ''}`}>
            <img src={item.src} alt={`Origawood wood art panel ${i + 1}`} className="gallery__img" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Materials() {
  return (
    <section className="materials" id="materials">
      <div className="materials__inner">
        <div className="materials__header">
          <h2 className="materials__headline">The finest<br />natural wood</h2>
          <p className="materials__sub">
            We work exclusively with premium North American hardwoods,
            sourced from sustainable mills and aged for stability.
          </p>
        </div>
        <div className="materials__grid">
          {MATERIALS.map((m, i) => (
            <div key={i} className="material-card">
              <span className="material-card__tag">{m.tag}</span>
              <h3 className="material-card__name">{m.name}</h3>
              <p className="material-card__desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Commission() {
  return (
    <section className="commission" id="commission">
      <div className="commission__inner">
        <h2 className="commission__title">
          Your vision,
          <br />
          <em>carved in wood</em>
        </h2>
        <p className="commission__sub">
          Every Origawood piece is fully custom. Tell us your idea —
          size, style, light colour, meaning — and we will bring it to life in wood.
        </p>
        <a href="mailto:hello@origawood.com" className="btn-light">
          Start a Commission
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <Marquee />
      <Collection />
      <Craft />
      <Gallery />
      <Materials />
      <Commission />
    </>
  )
}
