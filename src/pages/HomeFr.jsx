/* ─── Data ─────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: 1,
    num: '01',
    tag: 'Service principal',
    name: 'Développement Web',
    desc: "Sites sur mesure, plateformes dynamiques avec tableaux de bord, landing pages et systèmes complexes bâtis avec des technologies modernes.",
  },
  {
    id: 2,
    num: '02',
    tag: 'Service principal',
    name: 'Applications Mobiles',
    desc: "Applications natives et multiplateformes iOS et Android — livraison, réservation et e-commerce.",
  },
  {
    id: 3,
    num: '03',
    tag: 'Design',
    name: 'Design UI/UX',
    desc: "Un design centré utilisateur qui allie esthétique et fonctionnalité pour des expériences digitales mémorables.",
  },
  {
    id: 4,
    num: '04',
    tag: 'Automatisation',
    name: 'Intégration de Bots',
    desc: "Bots Telegram, automatisation WhatsApp et chatbots intelligents adaptés à votre activité.",
  },
]

/* ─── Logo icons (monochrome) ───────────────────────────────── */

function IcoCloudflare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
    </svg>
  )
}

function IcoConvex() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.09 18.916c3.488-.387 6.776-2.246 8.586-5.348-.857 7.673-9.247 12.522-16.095 9.545a3.47 3.47 0 0 1-1.547-1.314c-1.539-2.417-2.044-5.492-1.318-8.282 2.077 3.584 6.3 5.78 10.374 5.399m-10.501-7.65c-1.414 3.266-1.475 7.092.258 10.24-6.1-4.59-6.033-14.41-.074-18.953a3.44 3.44 0 0 1 1.893-.707c2.825-.15 5.695.942 7.708 2.977-4.09.04-8.073 2.66-9.785 6.442m11.757-5.437C14.283 2.951 11.053.992 7.515.933c6.84-3.105 15.253 1.929 16.17 9.37a3.6 3.6 0 0 1-.334 2.02c-1.278 2.594-3.647 4.607-6.416 5.352 2.029-3.763 1.778-8.36-.589-11.847" />
    </svg>
  )
}

function IcoWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

const LOGOS = [
  {
    key: 'ma5zani',
    el: <><span className="wm wm--bold">ma5zani</span></>,
  },
  {
    key: 'djezzy',
    el: <><span className="wm wm--bold">Djezzy</span></>,
  },
  {
    key: 'mobilis',
    el: <><span className="wm-dot" aria-hidden="true" /><span className="wm">mobilis</span></>,
  },
  {
    key: 'at',
    el: <><span className="wm-badge">AT</span><span className="wm wm--sm">Algérie Télécom</span></>,
  },
  {
    key: 'ooredoo',
    el: <><span className="wm wm--track">ooredoo</span></>,
  },
  {
    key: 'convex',
    el: <><IcoConvex /><span className="wm">Convex</span></>,
  },
  {
    key: 'cloudflare',
    el: <><IcoCloudflare /><span className="wm">Cloudflare</span></>,
  },
  {
    key: 'whatsapp',
    el: <><IcoWhatsApp /><span className="wm">WhatsApp</span></>,
  },
]

const STEPS = [
  { num: '01', title: 'Découverte', desc: "Nous comprenons vos objectifs, votre audience cible et le problème à résoudre." },
  { num: '02', title: 'Design', desc: "Wireframes et prototypes UI alignés avec votre marque et les attentes utilisateurs." },
  { num: '03', title: 'Développement', desc: "Construit avec des technologies modernes — du code propre, rapide, scalable et maintenable." },
  { num: '04', title: 'Lancement & Support', desc: "Déploiement, tests rigoureux et maintenance continue pour une activité fluide." },
]

const PRICING = [
  {
    tag: 'Starter',
    name: '1 400 € – 2 300 €',
    desc: "Sites statiques de 1 à 3 pages avec identité soignée. Parfait pour fondateurs, indépendants et landing pages à forte conversion.",
  },
  {
    tag: 'Croissance',
    name: '3 200 € – 5 500 €',
    desc: "Sites dynamiques avec tableau de bord, jusqu'à 10 pages. Conçus pour les entreprises qui dépassent le site vitrine.",
  },
  {
    tag: 'Scale',
    name: '7 500 €+',
    desc: "Plateformes e-commerce, intégrations IA, applications mobiles et systèmes sur mesure. Devis selon le périmètre.",
  },
]

const STATS = [
  { num: '30+', label: 'Projets livrés' },
  { num: '24h', label: 'Temps de réponse' },
  { num: '2025', label: 'Fondée en' },
]

/* ─── Sections ──────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div>
          <h1 className="hero__headline">
            <span className="hero__line" style={{ '--d': '0ms' }}>
              Votre <span className="hero__underline">vision</span>,
            </span>
            <span className="hero__line" style={{ '--d': '120ms' }}>
              notre <span className="hero__underline">code</span>.
            </span>
          </h1>
        </div>
        <div className="hero__tagline-col">
          <p className="hero__tagline">
            SiteDZ est une agence digitale de référence — nous créons
            des expériences web et mobiles d'exception, alliant expertise locale
            et standards internationaux.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="hero__btn-primary">
              Démarrer un projet
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="hero__btn-ghost">Voir les services</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="featured-wrap">
      <div className="featured__card featured__card--stats">
        <span className="featured__label">L'AGENCE DIGITALE DE RÉFÉRENCE</span>
        <h2 className="featured__title">
          BÂTIR LE
          <br />
          <em>futur</em> DIGITAL
        </h2>
        <div className="featured__stats">
          {STATS.map((s, i) => (
            <div key={i} className="featured__stat">
              <span className="featured__stat-num">{s.num}</span>
              <span className="featured__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div className="marquee-strip" aria-label="Nos partenaires et technologies">
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div key={i} className="marquee-logo">
            {logo.el}
          </div>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="collection" id="services">
      <p className="section-label">Nos Services</p>
      <div className="services__grid">
        {SERVICES.map((s) => (
          <a key={s.id} href="#contact" className="service-card">
            <span className="service-card__num">{s.num}</span>
            <span className="service-card__tag">{s.tag}</span>
            <h3 className="service-card__name">{s.name}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="craft" id="process">
      <div className="craft__inner">
        <div>
          <p className="craft__section-label">La Méthode</p>
          <h2 className="craft__headline">
            Conçu avec
            <br />
            <em>clarté</em>,
            <br />
            code et soin
          </h2>
        </div>
        <div>
          <div className="craft__text">
            <p>
              Chaque projet commence par une compréhension profonde de votre
              activité — qui sont vos clients, ce dont ils ont besoin, et
              comment votre produit digital s'inscrit dans leur quotidien.
            </p>
            <p>
              Nous combinons une architecture propre avec un design pixel-perfect
              pour livrer des solutions rapides, fiables et conçues pour évoluer
              avec vous.
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

function Pricing() {
  return (
    <section className="materials" id="pricing">
      <div className="materials__inner">
        <div className="materials__header">
          <h2 className="materials__headline">Tarifs clairs<br />et honnêtes</h2>
          <p className="materials__sub">
            Des forfaits transparents en euros pour clients internationaux. Aucun frais caché —
            livraison premium à des tarifs compétitifs.
          </p>
        </div>
        <div className="materials__grid">
          {PRICING.map((p, i) => (
            <div key={i} className="material-card">
              <span className="material-card__tag">{p.tag}</span>
              <h3 className="material-card__name">{p.name}</h3>
              <p className="material-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    name: 'ElGhella',
    tag: 'AgriTech',
    desc: "Marketplace intégrée pour les agriculteurs algériens : produits, équipements et services agricoles.",
    award: true,
  },
  {
    name: 'AItraid',
    url: 'aitridi.com',
    href: 'https://aitridi.com',
    tag: 'Marketplace',
    desc: "Marketplace B2B, B2C et freelance reliant acheteurs et vendeurs à travers l'Algérie.",
    award: true,
  },
  {
    name: 'Ma5zani',
    url: 'ma5zani.com',
    href: 'https://ma5zani.com',
    tag: 'SaaS E-Commerce',
    desc: "L'alternative Shopify pour les vendeurs algériens — lancez votre boutique en quelques minutes.",
  },
  {
    name: 'Postaify',
    url: 'postaify.com',
    href: 'https://postaify.com',
    tag: 'SaaS IA',
    desc: "Générez 30 jours de contenu pour 5 plateformes en moins de 15 minutes grâce à l'IA.",
  },
  {
    name: 'Tabra',
    url: 'tabra.space',
    href: 'https://tabra.space',
    tag: 'HealthTech',
    desc: "Plateforme de santé algérienne facilitant l'accès aux services médicaux dans tout le pays.",
  },
  {
    name: 'Hasio',
    url: 'hasio.xyz',
    href: 'https://hasio.xyz',
    tag: 'Voyage',
    desc: "Guide de voyage et plateforme de réservation — votre voyage simplifié.",
  },
  {
    name: 'TRAVoices',
    url: 'travoices.xyz',
    href: 'https://travoices.xyz',
    tag: 'IA / Voix',
    desc: "Traduction vocale par IA en temps réel pour briser les barrières linguistiques.",
  },
  {
    name: 'BioGrenaGold',
    url: 'biogrenagold.com',
    href: 'https://www.biogrenagold.com',
    tag: 'Santé & Bien-être',
    desc: "Compléments naturels à base de grenade — la puissance de la grenade.",
  },
  {
    name: 'Cuisine Alger',
    url: 'cuisinealger.com',
    href: 'https://www.cuisinealger.com',
    tag: 'Design d\'intérieur',
    desc: "Design et fabrication de cuisines modernes pensées pour les foyers algériens.",
  },
  {
    name: 'ReachFood',
    url: 'reachfood.co',
    href: 'https://reachfood.co',
    tag: 'Food',
    desc: "Plateforme reliant producteurs et consommateurs pour une distribution plus intelligente.",
  },
  {
    name: 'MBSx',
    url: 'mbsx.org',
    href: 'http://mbsx.org',
    tag: 'Médias',
    desc: "Institution de journalisme de données portant le reportage data-driven en Algérie.",
  },
  {
    name: 'Zed Informatique',
    url: 'zed-informatique.com',
    href: 'https://zed-informatique.com',
    tag: 'E-Commerce / Tech',
    desc: "Partenaire de confiance pour vos besoins tech — composants premium, laptops et accessoires livrés dans les 58 wilayas.",
  },
  {
    name: 'Walid Fermeture',
    url: 'walidfermeture.com',
    href: 'https://walidfermeture.com',
    tag: 'Sécurité / Enseignes',
    desc: "Installation et maintenance 24/7 à Paris pour rideaux métalliques, portes blindées, vitrines et enseignes lumineuses en Île-de-France.",
  },
  {
    name: 'AcquisitionPro',
    url: 'acquisitionpro.net',
    href: 'https://acquisitionpro.net',
    tag: 'Génération de leads',
    desc: "Plateforme de génération de leads rendant l'acquisition client constante et prévisible.",
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__header">
          <p className="section-label">Nos Projets</p>
          <h2 className="projects__headline">
            Conçus pour<br /><em>évoluer</em>
          </h2>
        </div>

        {/* Award Banner */}
        <div className="projects__award-banner">
          <div className="projects__award-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="projects__award-title">Fiers développeurs de 2 Labels Projet Innovant</p>
            <p className="projects__award-sub">ElGhella &amp; AItraid — distingués par le programme d'innovation algérien</p>
          </div>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {PROJECTS.map((p) => {
            const Wrapper = p.href ? 'a' : 'div'
            const wrapperProps = p.href
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Wrapper key={p.name} {...wrapperProps} className="project-card">
                {p.award && (
                  <span className="project-card__award">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Projet Innovant
                  </span>
                )}
                <div className="project-card__top">
                  <h3 className="project-card__name">{p.name}</h3>
                  {p.href && (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="project-card__arrow" aria-hidden="true">
                      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="project-card__tag">{p.tag}</span>
                <p className="project-card__desc">{p.desc}</p>
                {p.url && <span className="project-card__url">{p.url}</span>}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="commission" id="contact">
      <div className="commission__inner">
        <h2 className="commission__title">
          Votre projet,
          <br />
          <em>notre expertise</em>
        </h2>
        <p className="commission__sub">
          Prêt à bâtir quelque chose de grand ? Parlez-nous de votre idée
          et nous reviendrons vers vous sous 24 heures.
        </p>
        <div className="commission__actions">
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer" className="btn-light">
            WhatsApp
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="tel:+213697339450" className="commission__phone">06 97 33 94 50</a>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomeFrPage() {
  return (
    <>
      <Hero />
      <Featured />
      <Marquee />
      <Services />
      <Process />
      <Pricing />
      <Projects />
      <Contact />
    </>
  )
}
