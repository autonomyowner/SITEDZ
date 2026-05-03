import { useEffect } from 'react'

/* ─── Set document direction ────────────────────────────────── */

function useDirRtl() {
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'ar')
    document.documentElement.setAttribute('dir', 'rtl')
    return () => {
      document.documentElement.setAttribute('lang', 'en')
      document.documentElement.removeAttribute('dir')
    }
  }, [])
}

/* ─── Data ─────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: 1,
    num: '01',
    tag: 'خدمة أساسية',
    name: 'تطوير المواقع الإلكترونية',
    desc: 'مواقع مخصصة، منصات ديناميكية مع لوحات تحكم، صفحات هبوط، وأنظمة متكاملة باستخدام أحدث التقنيات.',
  },
  {
    id: 2,
    num: '02',
    tag: 'خدمة أساسية',
    name: 'تطوير تطبيقات الجوال',
    desc: 'تطبيقات أصلية ومتعددة المنصات لـ iOS وAndroid — أنظمة التوصيل، الحجز، والتجارة الإلكترونية.',
  },
  {
    id: 3,
    num: '03',
    tag: 'تصميم',
    name: 'تصميم UI/UX',
    desc: 'تصميم يركز على المستخدم يجمع بين الجماليات والوظائف لتجارب رقمية لا تُنسى.',
  },
  {
    id: 4,
    num: '04',
    tag: 'أتمتة',
    name: 'تكامل البوتات',
    desc: 'بوتات تيليغرام، أتمتة واتساب، وحلول الدردشة الذكية المصممة خصيصًا لعملك.',
  },
]

const STEPS = [
  { num: '01', title: 'الاستكشاف', desc: 'نتعرف على أهداف عملك، جمهورك المستهدف، والمشكلة التي تحتاج إلى حل.' },
  { num: '02', title: 'التصميم', desc: 'نصمم النماذج الأولية وواجهات المستخدم المتوافقة مع هويتك البصرية.' },
  { num: '03', title: 'التطوير', desc: 'مبني بتقنيات حديثة — كود نظيف، سريع، قابل للتوسع، وقابل للصيانة.' },
  { num: '04', title: 'الإطلاق والدعم', desc: 'نشر، اختبار دقيق، وصيانة مستمرة للحفاظ على استمرارية عملك.' },
]


const STATS = [
  { num: '+30', label: 'مشروع منجز' },
  { num: '24h', label: 'وقت الاستجابة' },
  { num: '2025', label: 'سنة التأسيس' },
]

const PROJECTS = [
  {
    name: 'الغلة',
    tag: 'تقنية زراعية',
    desc: 'منصة متكاملة للمزارعين الجزائريين لتداول المنتجات الزراعية والمعدات والخدمات الاستشارية.',
    award: true,
  },
  {
    name: 'AItraid',
    url: 'aitridi.com',
    href: 'https://aitridi.com',
    tag: 'منصة تجارية',
    desc: 'منصة B2B وB2C والمستقلين لربط المشترين والبائعين في جميع أنحاء الجزائر.',
    award: true,
  },
  {
    name: 'مخزني',
    url: 'ma5zani.com',
    href: 'https://ma5zani.com',
    tag: 'SaaS للتجارة الإلكترونية',
    desc: 'البديل الجزائري لـ Shopify — أطلق متجرك الإلكتروني في دقائق دون خبرة تقنية.',
  },
  {
    name: 'Postaify',
    url: 'postaify.com',
    href: 'https://postaify.com',
    tag: 'SaaS بالذكاء الاصطناعي',
    desc: 'أنشئ محتوى 30 يومًا لـ 5 منصات في أقل من 15 دقيقة بمساعدة الذكاء الاصطناعي.',
  },
  {
    name: 'تبرا',
    url: 'tabra.space',
    href: 'https://tabra.space',
    tag: 'تقنية صحية',
    desc: 'منصة صحية جزائرية تجعل الوصول إلى الخدمات الطبية أسهل في جميع أنحاء البلاد.',
  },
  {
    name: 'Hasio',
    url: 'hasio.xyz',
    href: 'https://hasio.xyz',
    tag: 'سفر',
    desc: 'دليل سفر وحجز ذكي — رحلتك أسهل.',
  },
  {
    name: 'TRAVoices',
    url: 'travoices.xyz',
    href: 'https://travoices.xyz',
    tag: 'ذكاء اصطناعي / صوت',
    desc: 'ترجمة صوتية فورية بالذكاء الاصطناعي تكسر حواجز اللغة حول العالم.',
  },
  {
    name: 'BioGrenaGold',
    url: 'biogrenagold.com',
    href: 'https://www.biogrenagold.com',
    tag: 'صحة وعافية',
    desc: 'مكملات صحية طبيعية مستخلصة من الرمان — قوة الرمان في كل قطرة.',
  },
  {
    name: 'Cuisine Alger',
    url: 'cuisinealger.com',
    href: 'https://www.cuisinealger.com',
    tag: 'تصميم داخلي',
    desc: 'تصميم وتصنيع مطابخ عصرية مصممة خصيصًا للمنازل الجزائرية.',
  },
  {
    name: 'ReachFood',
    url: 'reachfood.co',
    href: 'https://reachfood.co',
    tag: 'غذاء',
    desc: 'منصة تربط منتجي الغذاء بالمستهلكين لتوزيع أذكى وأكثر كفاءة.',
  },
  {
    name: 'MBSx',
    url: 'mbsx.org',
    href: 'http://mbsx.org',
    tag: 'إعلام',
    desc: 'مؤسسة الصحافة البيانية لتعزيز الصحافة القائمة على البيانات في الجزائر.',
  },
  {
    name: 'Zed Informatique',
    url: 'zed-informatique.com',
    href: 'https://zed-informatique.com',
    tag: 'تجارة إلكترونية / تقنية',
    desc: 'شريكك الموثوق لجميع احتياجاتك التقنية — مكونات وحواسيب محمولة وملحقات بجودة عالية مع توصيل لجميع 69 ولاية.',
  },
  {
    name: 'Walid Fermeture',
    url: 'walidfermeture.com',
    href: 'https://walidfermeture.com',
    tag: 'أمن / لافتات',
    desc: 'شركة باريسية متخصصة في تركيب وصيانة الستائر المعدنية والأبواب المصفحة والواجهات التجارية واللافتات المضيئة على مدار الساعة في منطقة إيل دو فرانس.',
  },
  {
    name: 'AcquisitionPro',
    url: 'acquisitionpro.net',
    href: 'https://acquisitionpro.net',
    tag: 'توليد العملاء',
    desc: 'منصة لتوليد العملاء المحتملين تساعد الشركات على جعل اكتساب العملاء عملية ثابتة وقابلة للتنبؤ.',
  },
]

/* ─── Logo icons (shared, no translation needed) ────────────── */

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
  { key: 'ma5zani',    el: <><span className="wm wm--bold">ma5zani</span></> },
  { key: 'djezzy',     el: <><span className="wm wm--bold">Djezzy</span></> },
  { key: 'mobilis',    el: <><span className="wm-dot" aria-hidden="true" /><span className="wm">mobilis</span></> },
  { key: 'at',         el: <><span className="wm-badge">AT</span><span className="wm wm--sm">Algérie Télécom</span></> },
  { key: 'ooredoo',    el: <><span className="wm wm--track">ooredoo</span></> },
  { key: 'convex',     el: <><IcoConvex /><span className="wm">Convex</span></> },
  { key: 'cloudflare', el: <><IcoCloudflare /><span className="wm">Cloudflare</span></> },
  { key: 'whatsapp',   el: <><IcoWhatsApp /><span className="wm">WhatsApp</span></> },
]

/* ─── Sections ──────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div>
          <h1 className="hero__headline">
            <span className="hero__line" style={{ '--d': '0ms' }}>
              رؤيتك،
            </span>
            <span className="hero__line" style={{ '--d': '120ms' }}>
              <span className="hero__underline">مهمتنا</span>.
            </span>
          </h1>
        </div>
        <div className="hero__tagline-col">
          <p className="hero__tagline">
            SiteDZ هي الوكالة الرقمية الرائدة في الجزائر — نبني تجارب ويب
            وتطبيقات موبايل استثنائية تجمع بين الخبرة المحلية والمعايير الدولية.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="hero__btn-primary">
              ابدأ مشروعك
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="hero__btn-ghost">اكتشف خدماتنا</a>
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
        <span className="featured__label">الوكالة الرقمية الرائدة في الجزائر</span>
        <h2 className="featured__title">
          نبني المستقبل
          <br />
          <em>الرقمي</em>
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
    <div className="marquee-strip" aria-label="شركاؤنا وتقنياتنا">
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
      <p className="section-label">خدماتنا</p>
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
          <p className="craft__section-label">منهجيتنا</p>
          <h2 className="craft__headline">
            مبني بوضوح،
            <br />
            <em>كود</em>،
            <br />
            وعناية
          </h2>
        </div>
        <div>
          <div className="craft__text">
            <p>
              كل مشروع يبدأ بفهم عميق لعملك — من هم عملاؤك، ما يحتاجون إليه،
              وكيف يندرج منتجك الرقمي في حياتهم اليومية.
            </p>
            <p>
              نجمع بين البنية التقنية النظيفة والتصميم المثالي لتقديم حلول
              سريعة وموثوقة ومبنية للنمو معك على المدى البعيد.
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


function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__header">
          <p className="section-label">مشاريعنا</p>
          <h2 className="projects__headline">
            مبني لأجل<br /><em>الجزائر</em>
          </h2>
        </div>

        <div className="projects__award-banner">
          <div className="projects__award-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="projects__award-title">نفخر بكوننا مطوري مشروعين حاملين لوسم Projet Innovant</p>
            <p className="projects__award-sub">الغلة و AItraid — حائزان على جائزة برنامج الابتكار الجزائري</p>
          </div>
        </div>

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
          مشروعك،
          <br />
          <em>خبرتنا</em>
        </h2>
        <p className="commission__sub">
          هل أنت مستعد لبناء شيء رائع؟ أخبرنا بفكرتك
          وسنعاود التواصل معك خلال 24 ساعة.
        </p>
        <div className="commission__actions">
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer" className="btn-light">
            واتساب
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="tel:+213697339450" className="commission__phone" dir="ltr">06 97 33 94 50</a>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomeArPage() {
  useDirRtl()

  return (
    <>
      <Hero />
      <Featured />
      <Marquee />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </>
  )
}
