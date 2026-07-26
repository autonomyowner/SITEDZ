/* ─── Tech Seller Offer ─────────────────────────────────────── */
/* Shared across /en, /ar, /fr — pass lang. */

const WA = '213697339450'

function Ico({ d, children }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d ? <path d={d} /> : children}
    </svg>
  )
}

const ICONS = {
  store: (
    <Ico>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </Ico>
  ),
  seo: (
    <Ico>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.6-3.6M8.5 12l2 2 4-4.5" />
    </Ico>
  ),
  brand: <Ico d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />,
  landing: <Ico d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  delivery: (
    <Ico>
      <rect x="1.5" y="6" width="12.5" height="9.5" rx="1.5" />
      <path d="M14 9.5h3.8L21 12.5v3H14z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </Ico>
  ),
  builder: (
    <Ico>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 2.5v3.5M14 2.5v3.5M10 18v3.5M14 18v3.5M2.5 10H6M2.5 14H6M18 10h3.5M18 14h3.5" />
    </Ico>
  ),
}

/* ─── Copy ──────────────────────────────────────────────────── */

const COPY = {
  en: {
    label: 'Special Offer',
    badge: 'For tech sellers',
    headline: <>Sell more <em>hardware</em>,<br />online.</>,
    sub: 'A complete package for computer shops, PC builders, and phone & accessory sellers — everything you need to turn a storefront into a machine that sells across all 69 wilayas.',
    items: [
      { icon: 'store', name: 'Custom Store', desc: 'A fast, mobile-first store built around a tech catalogue — specs, variants, live stock, and side-by-side comparison.' },
      { icon: 'seo', name: 'SEO Boost', desc: 'Rank for what buyers actually type. Technical SEO plus product pages tuned to bring in search traffic that converts.' },
      { icon: 'brand', name: 'Branding', desc: 'Logo, colours, and a social kit so your shop reads as the reference in your city — not just another reseller.' },
      { icon: 'landing', name: 'Landing Page Generator', desc: 'Launch a dedicated page for every promo, brand, or new drop in minutes. No developer, no waiting.' },
      { icon: 'delivery', name: 'Delivery Integration', desc: 'Yalidine, ZR Express, Noest and more, wired in. Orders go straight to the courier and tracking comes back automatically.' },
      { icon: 'builder', name: 'PC Builder', desc: 'Customers assemble their own build with live compatibility checks and instant pricing. Bigger baskets, fewer questions.' },
    ],
    ctaTitle: 'Want this for your shop?',
    ctaSub: 'Tell us what you sell and we\'ll send a scoped quote within 24 hours.',
    ctaBtn: 'Get a quote',
    wa: 'Hi SiteDZ — I sell tech and I\'m interested in your offer for tech sellers.',
  },
  fr: {
    label: 'Offre Spéciale',
    badge: 'Pour les vendeurs tech',
    headline: <>Vendez plus de <em>matériel</em>,<br />en ligne.</>,
    sub: 'Un pack complet pour les magasins informatiques, monteurs PC et vendeurs de téléphones & accessoires — tout ce qu\'il faut pour transformer votre boutique en machine à vendre dans les 69 wilayas.',
    items: [
      { icon: 'store', name: 'Site sur mesure', desc: 'Une boutique rapide, pensée mobile, construite autour d\'un catalogue tech — fiches techniques, variantes, stock en direct et comparateur.' },
      { icon: 'seo', name: 'Boost SEO', desc: 'Se positionner sur ce que les acheteurs tapent vraiment. SEO technique et fiches produits optimisées pour convertir.' },
      { icon: 'brand', name: 'Branding', desc: 'Logo, couleurs et kit réseaux sociaux pour que votre magasin devienne la référence de votre ville.' },
      { icon: 'landing', name: 'Générateur de landing pages', desc: 'Créez une page dédiée pour chaque promo, marque ou nouveauté en quelques minutes. Sans développeur.' },
      { icon: 'delivery', name: 'Intégration livraison', desc: 'Yalidine, ZR Express, Noest et plus, intégrés. Les commandes partent directement au livreur et le suivi revient automatiquement.' },
      { icon: 'builder', name: 'PC Builder', desc: 'Vos clients montent leur configuration avec vérification de compatibilité et prix en temps réel. Panier plus élevé, moins de questions.' },
    ],
    ctaTitle: 'Vous voulez ça pour votre magasin ?',
    ctaSub: 'Dites-nous ce que vous vendez — devis détaillé sous 24 heures.',
    ctaBtn: 'Demander un devis',
    wa: 'Bonjour SiteDZ — je vends du matériel informatique et je suis intéressé par votre offre pour les vendeurs tech.',
  },
  ar: {
    label: 'عرض خاص',
    badge: 'لتجار المعلوماتية',
    headline: <>بيع أكثر من <em>العتاد</em>،<br />عبر الإنترنت.</>,
    sub: 'باقة متكاملة لمحلات الإعلام الآلي، مركّبي الحواسيب، وبائعي الهواتف والملحقات — كل ما تحتاجه لتحويل محلك إلى منصة بيع تغطي 69 ولاية.',
    items: [
      { icon: 'store', name: 'متجر مخصص', desc: 'متجر سريع مصمم للهاتف أولاً ومبني حول كتالوج تقني — المواصفات، الخيارات، المخزون المباشر، والمقارنة بين المنتجات.' },
      { icon: 'seo', name: 'تحسين محركات البحث', desc: 'الظهور في ما يبحث عنه الزبون فعلاً. تحسين تقني وصفحات منتجات مهيأة لتحويل الزيارات إلى طلبات.' },
      { icon: 'brand', name: 'الهوية البصرية', desc: 'شعار، ألوان، ومجموعة تصاميم لمواقع التواصل تجعل محلك المرجع في ولايتك.' },
      { icon: 'landing', name: 'مولّد صفحات الهبوط', desc: 'أنشئ صفحة خاصة لكل عرض أو علامة تجارية أو منتج جديد في دقائق — دون الحاجة إلى مطوّر.' },
      { icon: 'delivery', name: 'ربط شركات التوصيل', desc: 'ياليدين، ZR Express، Noest وغيرها مدمجة. الطلبات تُرسل مباشرة إلى شركة التوصيل والتتبع يعود تلقائياً.' },
      { icon: 'builder', name: 'مُركّب الحواسيب', desc: 'الزبون يركّب جهازه بنفسه مع فحص التوافق وحساب السعر مباشرة. سلة أكبر وأسئلة أقل.' },
    ],
    ctaTitle: 'تحب هذا العرض لمحلك؟',
    ctaSub: 'أخبرنا بما تبيعه وسنرسل لك عرض سعر مفصل خلال 24 ساعة.',
    ctaBtn: 'اطلب عرض سعر',
    wa: 'السلام عليكم SiteDZ — عندي محل معلوماتية ونحب نعرف على عرضكم لتجار التكنولوجيا.',
  },
}

/* ─── Section ───────────────────────────────────────────────── */

export default function TechOffer({ lang = 'en' }) {
  const t = COPY[lang] || COPY.en
  const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(t.wa)}`

  return (
    <section className="techoffer" id="tech-offer">
      <div className="techoffer__inner">
        <span className="techoffer__badge">
          <span className="techoffer__badge-dot" aria-hidden="true" />
          {t.badge}
        </span>

        <div className="techoffer__header">
          <div>
            <p className="section-label">{t.label}</p>
            <h2 className="techoffer__headline">{t.headline}</h2>
          </div>
          <p className="techoffer__sub">{t.sub}</p>
        </div>

        <div className="techoffer__grid">
          {t.items.map((item) => (
            <div key={item.name} className="offer-card">
              <span className="offer-card__icon">{ICONS[item.icon]}</span>
              <h3 className="offer-card__name">{item.name}</h3>
              <p className="offer-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="techoffer__cta">
          <p className="techoffer__cta-text">
            {t.ctaTitle}
            <span>{t.ctaSub}</span>
          </p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-accent">
            {t.ctaBtn}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
