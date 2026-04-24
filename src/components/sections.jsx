import React, { useState, useEffect, useRef } from 'react'

// ============================================================
// SHARED — logo, icons
// ============================================================
const SiteDZMark = ({ size = 28, color = "#F3F1EC" }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 28 C 14 28, 22 8, 34 12 C 44 15, 50 22, 58 18"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="56" cy="10" r="3" fill="#FF6A1A" />
  </svg>
);

const SiteDZLogo = ({ light = true }) => {
  const color = light ? "#F3F1EC" : "#0B0B0D";
  return (
    <div className="mark">
      <SiteDZMark size={32} color={color} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          className="font-display"
          style={{
            fontSize: 20,
            letterSpacing: "-0.02em",
            color,
            fontWeight: 900,
          }}
        >
          SiteDZ
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: 8,
            letterSpacing: "0.2em",
            color: light ? "#A7A5A0" : "#6F6D68",
            marginTop: 3,
            textTransform: "uppercase",
          }}
        >
          Your vision · Our code
        </span>
      </div>
    </div>
  );
};

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// decorative streak lines (nova-inspired light trails)
const HeroStreaks = () => (
  <div className="streaks" aria-hidden>
    <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
      <defs>
        <linearGradient id="s1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6A1A" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF6A1A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6A1A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2D55E0" stopOpacity="0" />
          <stop offset="50%" stopColor="#2D55E0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2D55E0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M-100 600 Q 400 400 800 500 T 1400 350" stroke="url(#s2)" strokeWidth="2" fill="none" />
      <path d="M-100 680 Q 500 500 900 620 T 1400 500" stroke="url(#s1)" strokeWidth="3" fill="none" />
      <path d="M-100 720 Q 300 650 700 700 T 1400 650" stroke="url(#s3)" strokeWidth="1" fill="none" />
      <path d="M-100 480 Q 600 300 1000 420 T 1400 280" stroke="url(#s2)" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  </div>
);

// ============================================================
// NAV
// ============================================================
export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
        background: scrolled ? "rgba(11,11,13,0.75)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a href="#" aria-label="SiteDZ home">
          <SiteDZLogo />
        </a>
        <nav style={{ display: "flex", gap: 32 }} className="hide-mobile">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#work" className="nav-link">Work</a>
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="#contact" className="nav-link hide-mobile">Contact</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
            Start a Project <ArrowRight size={14} />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 780px) { .hide-mobile { display: none !important; } }
      `}</style>
    </header>
  );
};

// ============================================================
// HERO
// ============================================================
export const Hero = ({ headline = "Your vision, our code.", brush = true, grain = true } = {}) => {
  // split headline at comma for two-line effect
  const parts = headline.split(/,\s*/);
  const line1 = parts[0] + (parts.length > 1 ? "," : "");
  const line2 = parts.slice(1).join(", ");
  return (
    <section
      className={grain ? "grain" : ""}
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: 80,
        overflow: "hidden",
      }}
    >
      <div className="glow-streak" />
      <HeroStreaks />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* eyebrow bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <span className="section-label">Algeria's Premier Digital Agency</span>
          <span className="eyebrow" style={{ color: "#6F6D68" }}>
            EST · 2025 · ALGIERS
          </span>
        </div>

        {/* giant headline */}
        <h1 className="hero-title" style={{ margin: 0 }}>
          {line1}
          <br />
          {brush ? <span className="brush-ital">{line2}</span> : <span>{line2}</span>}
        </h1>

        {/* subcopy + ctas row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            marginTop: 48,
            alignItems: "end",
          }}
          className="hero-grid"
        >
          <div>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.5,
                color: "var(--text-dim)",
                maxWidth: 560,
                margin: 0,
              }}
            >
              We build exceptional web and mobile experiences that combine local
              expertise with international standards. Built in Algeria. Built to last.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15 }}>
                Start a Project <ArrowRight />
              </a>
              <a href="#services" className="btn btn-ghost" style={{ padding: "16px 24px", fontSize: 15 }}>
                See Services
              </a>
            </div>
          </div>

          {/* stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              paddingTop: 20,
              borderTop: "1px solid var(--border-2)",
            }}
          >
            {[
              { n: "30+", l: "Projects Delivered" },
              { n: "24h", l: "Response Time" },
              { n: "2025", l: "Founded" },
            ].map((s, i) => (
              <div key={i}>
                <div className="stat-num">{s.n}</div>
                <div className="eyebrow" style={{ marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* hero visual band — product showcase placeholder (abstract dashboard) */}
        <HeroVisual />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

// Abstract hero visual — floating dashboard mock + phone
const HeroVisual = () => (
  <div
    style={{
      marginTop: 80,
      position: "relative",
      height: 460,
    }}
    className="hero-visual"
  >
    {/* glow behind */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse at 50% 60%, rgba(255,106,26,0.2) 0%, transparent 55%), radial-gradient(ellipse at 30% 40%, rgba(45,85,224,0.25) 0%, transparent 55%)",
        filter: "blur(40px)",
      }}
    />

    {/* laptop-ish browser mock */}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: 10,
        transform: "translateX(-50%) perspective(1400px) rotateX(8deg)",
        width: "min(900px, 90%)",
        height: 420,
        background: "#0F0F12",
        borderRadius: 16,
        border: "1px solid var(--border-2)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      {/* browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          borderBottom: "1px solid var(--border)",
          background: "#0B0B0D",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 16,
            background: "#16161B",
            borderRadius: 6,
            padding: "4px 10px",
            fontSize: 11,
            color: "var(--text-mute)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          sitedz.com/dashboard
        </div>
      </div>

      {/* dashboard fake body */}
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", height: "calc(100% - 41px)" }}>
        <aside
          style={{
            borderRight: "1px solid var(--border)",
            padding: 16,
            background: "#0B0B0D",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <SiteDZMark size={20} color="#F3F1EC" />
            <span className="font-display" style={{ fontSize: 13 }}>SiteDZ</span>
          </div>
          {["Overview", "Projects", "Clients", "Messages", "Billing"].map((i, k) => (
            <div
              key={i}
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                fontSize: 12,
                color: k === 1 ? "var(--text)" : "var(--text-mute)",
                background: k === 1 ? "rgba(255,106,26,0.1)" : "transparent",
                borderLeft: k === 1 ? "2px solid var(--orange)" : "2px solid transparent",
                marginBottom: 2,
              }}
            >
              {i}
            </div>
          ))}
        </aside>

        <main style={{ padding: 24, overflow: "hidden" }}>
          {/* row of stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
            {[
              { l: "Active Projects", v: "12", d: "+3 this month", c: "#FF6A1A" },
              { l: "Clients Served", v: "30+", d: "Across Algeria", c: "#2D55E0" },
              { l: "Avg Response", v: "24h", d: "Guaranteed", c: "#F3F1EC" },
            ].map((s, i) => (
              <div key={i} style={{ padding: 14, background: "#16161B", borderRadius: 8, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 10, color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.l}</div>
                <div className="font-display" style={{ fontSize: 24, color: s.c, marginTop: 4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: "var(--text-dim)" }}>{s.d}</div>
              </div>
            ))}
          </div>

          {/* fake chart */}
          <div style={{ padding: 14, background: "#16161B", borderRadius: 8, border: "1px solid var(--border)", height: 180 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>Project Velocity</div>
              <div style={{ fontSize: 10, color: "var(--text-mute)", fontFamily: "JetBrains Mono" }}>LAST 30 DAYS</div>
            </div>
            <svg width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6A1A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF6A1A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 100 L40 85 L80 90 L120 60 L160 70 L200 40 L240 50 L280 20 L320 30 L360 10 L400 25 L400 120 L0 120 Z" fill="url(#chartGrad)" />
              <path d="M0 100 L40 85 L80 90 L120 60 L160 70 L200 40 L240 50 L280 20 L320 30 L360 10 L400 25" stroke="#FF6A1A" strokeWidth="2" fill="none" />
              <path d="M0 110 L40 95 L80 105 L120 85 L160 90 L200 75 L240 80 L280 60 L320 70 L360 55 L400 65" stroke="#2D55E0" strokeWidth="2" fill="none" opacity="0.7" />
            </svg>
          </div>
        </main>
      </div>
    </div>

    {/* phone mock */}
    <div
      style={{
        position: "absolute",
        right: "6%",
        top: 120,
        width: 160,
        height: 320,
        background: "#0F0F12",
        borderRadius: 24,
        border: "2px solid #24242B",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.6)",
        overflow: "hidden",
        transform: "rotate(6deg)",
      }}
      className="hero-phone"
    >
      <div style={{ padding: "12px 12px 8px", fontSize: 9, color: "var(--text-dim)", display: "flex", justifyContent: "space-between" }}>
        <span>9:41</span><span>●●●●●</span>
      </div>
      <div style={{ padding: "0 12px" }}>
        <div className="font-display" style={{ fontSize: 18, lineHeight: 1 }}>Your<br/>projects</div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { n: "ElGhella", c: "#8aa74a" },
            { n: "Ma5zani", c: "#FF6A1A" },
            { n: "Tabra",   c: "#06d6a0" },
            { n: "Hasio",   c: "#2D55E0" },
          ].map((p) => (
            <div key={p.n} style={{ display: "flex", alignItems: "center", gap: 8, padding: 8, background: "#16161B", borderRadius: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: p.c }} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 600 }}>{p.n}</div>
                <div style={{ fontSize: 8, color: "var(--text-mute)" }}>Active</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 780px) {
        .hero-phone { display: none; }
        .hero-visual { height: 320px !important; }
      }
    `}</style>
  </div>
);

// ============================================================
// MARQUEE of clients
// ============================================================
export const LogoMarquee = () => {
  const clients = [
    "ma5zani", "Djezzy", "mobilis", "Algérie Télécom", "ooredoo",
    "Convex", "Cloudflare", "WhatsApp", "ElGhella", "AItraid",
  ];
  return (
    <section
      style={{
        padding: "48px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "#0A0A0C",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: 24 }}>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Trusted by businesses across Algeria & beyond
        </div>
      </div>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="font-display"
              style={{
                fontSize: 36,
                color: "var(--text-mute)",
                letterSpacing: "-0.02em",
                padding: "0 24px",
                opacity: 0.7,
              }}
            >
              {c}
              <span style={{ color: "var(--orange)", marginLeft: 48 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SERVICES
// ============================================================
export const Services = () => {
  const services = [
    {
      num: "01",
      tag: "Core Service",
      title: "Web Development",
      desc: "Custom websites, dynamic platforms with control panels, landing pages, and complex systems built with modern technology.",
      accent: "var(--orange)",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 14 H36" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="11" r="0.8" fill="currentColor" />
          <circle cx="11" cy="11" r="0.8" fill="currentColor" />
          <path d="M12 22 L8 25 L12 28 M20 22 L24 25 L20 28 M16 28 L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: "02",
      tag: "Core Service",
      title: "Mobile Applications",
      desc: "Native and cross-platform apps for iOS and Android — delivery systems, booking platforms, and e-commerce.",
      accent: "var(--blue-2)",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="11" y="4" width="18" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="32" r="1" fill="currentColor" />
          <path d="M16 8 H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="14" y="13" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
          <rect x="14" y="21" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1" />
          <rect x="21" y="21" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      num: "03",
      tag: "Design",
      title: "UI/UX Design",
      desc: "User-focused design combining aesthetics with functionality for memorable digital experiences.",
      accent: "var(--orange)",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 20 L18 24 L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      num: "04",
      tag: "Automation",
      title: "Bot Integration",
      desc: "Telegram bots, WhatsApp automation, and intelligent chatbot solutions tailored to your business.",
      accent: "var(--blue-2)",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="12" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="21" r="1.5" fill="currentColor" />
          <circle cx="25" cy="21" r="1.5" fill="currentColor" />
          <path d="M20 12 V6 M17 4 H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 20 H4 M32 20 H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" style={{ padding: "140px 0", position: "relative" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-label">Our Services</span>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1, marginTop: 20, marginBottom: 0, textTransform: "uppercase" }}>
              Building the<br />
              <span style={{ color: "var(--orange)", fontStyle: "italic", fontFamily: "Archivo Black", display: "inline-block", transform: "skewX(-6deg)" }}>digital future.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--text-dim)", fontSize: 16, lineHeight: 1.5, margin: 0 }}>
            Four capabilities, one studio. Each one delivered end-to-end — from discovery and design through to deployment and support.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }} className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card" style={{ background: "var(--bg)", padding: 40, position: "relative", minHeight: 320 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
                <span className="font-mono" style={{ fontSize: 12, color: "var(--text-mute)" }}>{s.num}</span>
                <span className="eyebrow">{s.tag}</span>
              </div>
              <div style={{ color: s.accent, marginBottom: 24 }}>{s.icon}</div>
              <h3 className="font-display" style={{ fontSize: 32, letterSpacing: "-0.02em", marginBottom: 16, marginTop: 0 }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: 420 }}>{s.desc}</p>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.accent, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} className="service-accent" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover .service-accent { transform: scaleX(1) !important; }
        @media (max-width: 780px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// PROCESS
// ============================================================
export const Process = () => {
  const steps = [
    { n: "01", t: "Discovery", d: "We learn your business goals, target audience, and the problem you need solved." },
    { n: "02", t: "Design",    d: "We craft wireframes and UI prototypes aligned with your brand and user expectations." },
    { n: "03", t: "Development", d: "Built with modern technology — clean, fast, scalable, and maintainable code." },
    { n: "04", t: "Launch & Support", d: "Deployment, rigorous testing, and ongoing maintenance to keep you running smoothly." },
  ];

  return (
    <section id="process" style={{ padding: "140px 0", background: "#0A0A0C", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 72 }} className="process-header">
          <div>
            <span className="section-label">The Process</span>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 0.95, marginTop: 20, marginBottom: 0, textTransform: "uppercase" }}>
              Built with<br />
              <span style={{ color: "var(--orange)", fontStyle: "italic", fontFamily: "Archivo Black", transform: "skewX(-6deg)", display: "inline-block", marginRight: "0.3em" }}>clarity,</span>
              code, and care
            </h2>
          </div>
          <div style={{ paddingTop: 40 }}>
            <p style={{ color: "var(--text-dim)", fontSize: 18, lineHeight: 1.6, margin: 0, marginBottom: 20 }}>
              Every project starts with a deep understanding of your business — who your customers are, what they need, and how your digital product fits into their lives.
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: 18, lineHeight: 1.6, margin: 0 }}>
              We combine clean architecture with pixel-perfect design to deliver solutions that are fast, reliable, and built to grow with you.
            </p>
          </div>
        </div>

        {/* timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }} className="timeline">
          {/* connecting line */}
          <div style={{ position: "absolute", top: 30, left: "6%", right: "6%", height: 1, background: "linear-gradient(to right, var(--orange) 0%, var(--blue-2) 100%)", opacity: 0.4 }} className="timeline-line" />

          {steps.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--bg)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, position: "relative", zIndex: 2 }}>
                <span className="font-display" style={{ fontSize: 20, color: i < 2 ? "var(--orange)" : "var(--blue-2)" }}>{s.n}</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 24, marginBottom: 8, marginTop: 0, letterSpacing: "-0.02em" }}>{s.t}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .timeline { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .timeline-line { display: none; }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// PRICING
// ============================================================
export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "50,000 – 80,000",
      unit: "DA",
      desc: "Static 1–3 page sites. Perfect for small businesses, professionals, and landing pages.",
      features: ["1–3 pages", "Responsive design", "Contact form", "Domain & hosting setup", "30 days support"],
      featured: false,
      cta: "Start Basic",
    },
    {
      name: "Professional",
      price: "120,000 – 180,000",
      unit: "DA",
      desc: "Dynamic sites with dashboard, up to 10 pages. Ideal for growing Algerian businesses.",
      features: ["Up to 10 pages", "Admin dashboard", "CMS / content panel", "SEO optimization", "Analytics setup", "90 days support"],
      featured: true,
      cta: "Start Professional",
    },
    {
      name: "Enterprise",
      price: "Custom",
      unit: "Pricing",
      desc: "E-commerce platforms, bot integration, mobile apps, API development, and complex systems.",
      features: ["E-commerce platforms", "Mobile apps (iOS/Android)", "Bot & API integration", "Custom systems", "Dedicated team", "Ongoing maintenance"],
      featured: false,
      cta: "Get a Quote",
    },
  ];

  return (
    <section id="pricing" style={{ padding: "140px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Pricing</span>
          <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1, marginTop: 20, marginBottom: 20, textTransform: "uppercase" }}>
            Clear,<br />
            <span style={{ color: "var(--orange)", fontStyle: "italic", fontFamily: "Archivo Black", transform: "skewX(-6deg)", display: "inline-block" }}>honest pricing</span>
          </h2>
          <p style={{ color: "var(--text-dim)", fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.5 }}>
            Transparent plans in Algerian Dinars. No hidden fees — just quality work at fair prices for Algerian businesses.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="pricing-grid">
          {plans.map((p) => (
            <div key={p.name} className={"card pricing-card " + (p.featured ? "featured" : "")} style={{ padding: 36, display: "flex", flexDirection: "column", position: "relative" }}>
              {p.featured && (
                <span style={{ position: "absolute", top: -12, left: 24, background: "var(--orange)", color: "#0B0B0D", padding: "5px 12px", borderRadius: 999, fontFamily: "JetBrains Mono", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>
                  Most popular
                </span>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h3 className="font-display" style={{ fontSize: 26, margin: 0, letterSpacing: "-0.02em" }}>{p.name}</h3>
                {p.featured && <span style={{ color: "var(--orange)", fontSize: 11, fontFamily: "JetBrains Mono", letterSpacing: "0.1em" }}>★</span>}
              </div>
              <div style={{ marginBottom: 16 }}>
                <div className="font-display" style={{ fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {p.price}
                  <span style={{ fontSize: 16, color: "var(--text-mute)", marginLeft: 8, fontWeight: 500 }}>{p.unit}</span>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6, margin: 0, marginBottom: 24, minHeight: 60 }}>{p.desc}</p>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, marginBottom: 28, flex: 1 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontSize: 13.5 }}>
                    <span style={{ color: p.featured ? "var(--orange)" : "var(--text)", display: "inline-flex" }}><Check /></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className={"btn " + (p.featured ? "btn-primary" : "btn-ghost")} style={{ width: "100%", justifyContent: "center" }}>
                {p.cta} <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

// ============================================================
// PROJECTS
// ============================================================
export const Projects = () => {
  // shaped data — each project picks its own display type for visual rhythm
  const projects = [
    { tag: "Projet Innovant", name: "ElGhella",      cat: "AgriTech",          d: "Integrated marketplace for Algerian farmers to trade agricultural products, equipment, and advisory services.", url: "elghella.com",    bg: "proj-bg-1",  accent: "#8aa74a", year: "2024", role: "Full build · Marketplace · Mobile" },
    { tag: "Projet Innovant", name: "AItraid",       cat: "Marketplace",       d: "B2B, B2C, and freelancer marketplace connecting buyers and sellers across Algeria.",                                url: "aitridi.com",     bg: "proj-bg-2",  accent: "#2D55E0", year: "2024", role: "Platform · Web · Dashboard"  },
    { tag: "Client Work",     name: "Ma5zani",       cat: "E-Commerce SaaS",   d: "The Shopify alternative for Algerian sellers — launch your online store in minutes.",                              url: "ma5zani.com",     bg: "proj-bg-3",  accent: "#FF6A1A", year: "2025", role: "SaaS · Web"                  },
    { tag: "Client Work",     name: "Postaify",      cat: "AI SaaS",           d: "Generate 30 days of content for 5 platforms in under 15 minutes with AI automation.",                              url: "postaify.com",    bg: "proj-bg-4",  accent: "#f72585", year: "2025", role: "AI · SaaS"                   },
    { tag: "Client Work",     name: "Tabra",         cat: "HealthTech",        d: "Algerian healthcare platform making medical services easier to access nationwide.",                                url: "tabra.space",     bg: "proj-bg-5",  accent: "#06d6a0", year: "2025", role: "Platform · Mobile"           },
    { tag: "Client Work",     name: "Hasio",         cat: "Travel",            d: "Travel guide and booking platform — your journey made easier.",                                                   url: "hasio.xyz",       bg: "proj-bg-6",  accent: "#f4a261", year: "2024", role: "Booking · Web"               },
    { tag: "Client Work",     name: "TRAVoices",     cat: "AI / Voice",        d: "Real-time AI voice translation breaking language barriers across the globe.",                                     url: "travoices.xyz",   bg: "proj-bg-7",  accent: "#4361ee", year: "2025", role: "AI · Voice"                  },
    { tag: "Client Work",     name: "BioGrenaGold",  cat: "Health & Wellness", d: "Natural pomegranate-based health supplements — la puissance de la grenade.",                                       url: "biogrenagold.com",bg: "proj-bg-8",  accent: "#ff6b35", year: "2024", role: "E-commerce"                  },
    { tag: "Client Work",     name: "Cuisine Alger", cat: "Interior Design",   d: "Modern kitchen design and manufacturing crafted for Algerian homes.",                                               url: "cuisinealger.com",bg: "proj-bg-9",  accent: "#8d99ae", year: "2024", role: "Brand · Web"                 },
    { tag: "Client Work",     name: "ReachFood",     cat: "Food",              d: "Platform connecting food producers and consumers for smarter distribution.",                                        url: "reachfood.co",    bg: "proj-bg-10", accent: "#fca311", year: "2025", role: "Platform"                   },
    { tag: "Client Work",     name: "MBSx",          cat: "Media",             d: "Data journalism institution advancing data-driven reporting in Algeria.",                                           url: "mbsx.org",        bg: "proj-bg-11", accent: "#415a77", year: "2024", role: "Media · Web"                 },
  ];

  const [filter, setFilter] = useState("All");
  const cats = ["All", "Projet Innovant", "SaaS", "AI", "E-commerce"];
  const matches = (p) => {
    if (filter === "All") return true;
    if (filter === "Projet Innovant") return p.tag === "Projet Innovant";
    if (filter === "SaaS") return p.cat.includes("SaaS");
    if (filter === "AI") return p.cat.includes("AI");
    if (filter === "E-commerce") return p.cat.includes("E-Commerce");
    return true;
  };

  const elghella = projects[0];
  const aitraid  = projects[1];
  const showcaseMid = projects.slice(2, 5);      // Ma5zani, Postaify, Tabra — mid 3
  const listRow     = projects.slice(5, 8);      // Hasio, TRAVoices, BioGrenaGold — as list row
  const bottomRow   = projects.slice(8);         // last 3

  return (
    <section id="work" style={{ padding: "140px 0", background: "#0A0A0C", borderTop: "1px solid var(--border)", overflow: "hidden" }}>
      <div className="container">
        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-label">Our Projects · 30+ Delivered</span>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1, marginTop: 20, marginBottom: 0, textTransform: "uppercase" }}>
              Built for<br />
              <span style={{ color: "var(--orange)", fontStyle: "italic", fontFamily: "Archivo Black", transform: "skewX(-6deg)", display: "inline-block" }}>Algeria.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 380 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1px solid rgba(255,106,26,0.4)", borderRadius: 999, background: "rgba(255,106,26,0.08)", marginBottom: 12 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)" }} />
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)" }}>2× Label Projet Innovant</span>
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.5, margin: 0 }}>
              ElGhella &amp; AItraid — awarded by Algeria's innovation programme.
            </p>
          </div>
        </div>

        {/* filter chips */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "8px 14px",
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 999,
                border: "1px solid " + (filter === c ? "var(--orange)" : "var(--border-2)"),
                background: filter === c ? "rgba(255,106,26,0.12)" : "transparent",
                color: filter === c ? "var(--orange)" : "var(--text-dim)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
          <span style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--text-mute)", alignSelf: "center", letterSpacing: "0.1em" }}>
            {projects.filter(matches).length.toString().padStart(2,"0")} / {projects.length.toString().padStart(2,"0")}
          </span>
        </div>

        {/* ━━━ HERO FEATURED — full-bleed stage ━━━ */}
        {matches(elghella) && <FeaturedHero p={elghella} />}

        {/* ━━━ SPLIT PAIR — elghella sidekick + aitraid portrait ━━━ */}
        {matches(aitraid) && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 20, marginTop: 20 }} className="split-grid">
            <AitraidCard p={aitraid} />
            <QuoteCard />
          </div>
        )}

        {/* ━━━ TRIPTYCH — 3 equal portrait cards ━━━ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 20 }} className="tri-grid">
          {showcaseMid.filter(matches).map((p, i) => (
            <PortraitCard key={p.name} p={p} index={i} />
          ))}
        </div>

        {/* ━━━ LIST ROW — wide horizontal rows ━━━ */}
        {listRow.filter(matches).length > 0 && (
          <div style={{ marginTop: 40, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px" }}>
              <span className="eyebrow">More Work · Index</span>
              <span className="font-mono" style={{ fontSize: 10, color: "var(--text-mute)", letterSpacing: "0.15em" }}>ROLE · YEAR · LINK</span>
            </div>
            {listRow.filter(matches).map((p, i) => (
              <ListRowCard key={p.name} p={p} last={i === listRow.length - 1} />
            ))}
          </div>
        )}

        {/* ━━━ BOTTOM ROW — compact tiles ━━━ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }} className="tri-grid">
          {bottomRow.filter(matches).map((p) => (
            <CompactTile key={p.name} p={p} />
          ))}
        </div>

        {/* bottom closer */}
        <div style={{ marginTop: 60, padding: 32, background: "linear-gradient(135deg, rgba(255,106,26,0.08) 0%, rgba(45,85,224,0.06) 100%)", border: "1px solid var(--border-2)", borderRadius: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div className="font-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 4 }}>+ 19 more projects in the archive</div>
            <div style={{ color: "var(--text-dim)", fontSize: 14 }}>Ask us for case studies, credentials, or NDA'd work.</div>
          </div>
          <a href="#contact" className="btn btn-ghost" style={{ padding: "14px 22px" }}>Request portfolio <ArrowRight /></a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; }
          .tri-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .tri-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ─── Feature variants ────────────────────────────────────────

// 1. Full-bleed hero stage with award ribbon + big meta strip
const FeaturedHero = ({ p }) => (
  <a href={`https://${p.url}`} target="_blank" rel="noopener" className="proj-card" style={{ display: "block", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-2)", background: "var(--bg-card)", transition: "transform 0.3s ease" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", minHeight: 380 }} className="feat-hero-grid">
      {/* image */}
      <div className={p.bg} style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 60%)" }} />
        {/* award ribbon */}
        <div style={{ position: "absolute", top: 20, left: 20, display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "var(--orange)", color: "#0B0B0D", borderRadius: 999, fontFamily: "Archivo Black", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ★ Projet Innovant 2024
        </div>
        {/* giant initial */}
        <div style={{ position: "absolute", bottom: -30, right: -20, fontFamily: "Archivo Black", fontSize: 320, lineHeight: 0.8, color: "rgba(255,255,255,0.12)", letterSpacing: "-0.08em" }}>
          {p.name[0]}
        </div>
      </div>
      {/* content */}
      <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.15em" }}>CASE · 01 / FEATURED</span>
            <span className="eyebrow">{p.cat}</span>
          </div>
          <h3 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 0.95, margin: 0, marginBottom: 16, textTransform: "uppercase" }}>
            {p.name}
          </h3>
          <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.6, margin: 0, marginBottom: 24 }}>{p.d}</p>
        </div>

        {/* meta grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Role</div>
            <div style={{ fontSize: 13, color: "var(--text)" }}>{p.role}</div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Year</div>
            <div style={{ fontSize: 13, color: "var(--text)" }}>{p.year}</div>
          </div>
          <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <span style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: "var(--orange)" }}>↗ {p.url}</span>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--orange)", color: "#0B0B0D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .feat-hero-grid { grid-template-columns: 1fr !important; }
      }
      .proj-card:hover { transform: translateY(-4px); }
    `}</style>
  </a>
);

// 2. Aitraid — vertical stack card with big pattern
const AitraidCard = ({ p }) => (
  <a href={`https://${p.url}`} target="_blank" rel="noopener" className="proj-card" style={{ display: "block", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-card)", minHeight: 380, position: "relative", transition: "transform 0.3s" }}>
    <div className={p.bg} style={{ height: "100%", minHeight: 380, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.75) 100%)" }} />
      {/* award badge */}
      <div style={{ position: "absolute", top: 20, left: 20, padding: "6px 12px", background: "rgba(255,106,26,0.95)", color: "#0B0B0D", borderRadius: 6, fontFamily: "Archivo Black", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        ★ Projet Innovant
      </div>
      {/* type indicator top-right */}
      <div style={{ position: "absolute", top: 20, right: 20, display: "flex", gap: 6 }}>
        {["B2B", "B2C", "Freelance"].map(x => (
          <span key={x} style={{ padding: "4px 8px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: "#fff", borderRadius: 4, fontSize: 9, fontFamily: "JetBrains Mono", letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.2)" }}>{x}</span>
        ))}
      </div>
      {/* content overlay */}
      <div style={{ position: "absolute", left: 28, right: 28, bottom: 24 }}>
        <div className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: 8 }}>CASE · 02 / MARKETPLACE</div>
        <h3 className="font-display" style={{ fontSize: 40, letterSpacing: "-0.02em", margin: 0, marginBottom: 10, color: "#fff", textTransform: "uppercase" }}>{p.name}</h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.5, margin: 0, marginBottom: 16 }}>{p.d}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "var(--orange)" }}>↗ {p.url}</span>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.year}</span>
        </div>
      </div>
    </div>
  </a>
);

// quote card — testimonial / stat panel to break the rhythm
const QuoteCard = () => (
  <div style={{ borderRadius: 16, border: "1px solid var(--border)", background: "linear-gradient(180deg, #111115 0%, #0B0B0D 100%)", padding: 36, minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: -40, right: -40, fontFamily: "Archivo Black", fontSize: 260, color: "rgba(255,106,26,0.08)", lineHeight: 0.7 }}>"</div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>From a founder we worked with</div>
      <p className="font-display" style={{ fontSize: 26, lineHeight: 1.25, letterSpacing: "-0.02em", margin: 0, color: "var(--text)" }}>
        "SiteDZ shipped in weeks what other agencies quoted in months. Clean code, real support — they get how Algerian businesses actually work."
      </p>
    </div>
    <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 12, marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, var(--orange), var(--blue-2))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Archivo Black", color: "#fff" }}>M</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Founder, Ma5zani</div>
        <div style={{ fontSize: 12, color: "var(--text-dim)" }}>E-Commerce SaaS</div>
      </div>
    </div>
  </div>
);

// 3. Portrait card — tall format with huge label
const PortraitCard = ({ p, index }) => {
  const accents = ["#FF6A1A", "#2D55E0", "#F3F1EC"];
  const labelColor = accents[index % 3];
  return (
    <a href={`https://${p.url}`} target="_blank" rel="noopener" className="proj-card" style={{ display: "block", borderRadius: 14, overflow: "hidden", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "transform 0.3s ease" }}>
      <div className={p.bg} style={{ height: 260, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)" }} />
        {/* rotating vertical index label */}
        <div style={{ position: "absolute", top: 20, left: 20, fontFamily: "JetBrains Mono", fontSize: 10, letterSpacing: "0.2em", color: "#fff", opacity: 0.9 }}>
          0{index + 3} / CASE
        </div>
        <div style={{ position: "absolute", top: 20, right: 20, padding: "4px 10px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", borderRadius: 999, fontSize: 10, color: "#fff", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.2)" }}>
          {p.cat}
        </div>
        {/* big name overlay */}
        <div style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
          <div className="font-display" style={{ fontSize: 44, color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.9, textTransform: "uppercase" }}>{p.name}</div>
        </div>
      </div>
      <div style={{ padding: 22 }}>
        <p style={{ color: "var(--text-dim)", fontSize: 13.5, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>{p.d}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: labelColor }}>↗ {p.url}</span>
          <span className="eyebrow" style={{ fontSize: 10 }}>{p.year}</span>
        </div>
      </div>
    </a>
  );
};

// 4. List row — wide table-style presentation
const ListRowCard = ({ p, last }) => (
  <a href={`https://${p.url}`} target="_blank" rel="noopener" className="list-row" style={{ display: "grid", gridTemplateColumns: "auto 1.5fr 1.2fr 1fr auto", gap: 24, alignItems: "center", padding: "22px 4px", borderTop: "1px solid var(--border)", transition: "background 0.2s", color: "var(--text)" }}>
    {/* color dot + initial */}
    <div style={{ width: 44, height: 44, borderRadius: 10, background: p.accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Archivo Black", fontSize: 18, color: "#0B0B0D", flexShrink: 0 }}>
      {p.name[0]}
    </div>
    {/* name + cat */}
    <div>
      <div className="font-display" style={{ fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1 }}>{p.name}</div>
      <div className="eyebrow" style={{ marginTop: 6, fontSize: 10 }}>{p.cat}</div>
    </div>
    {/* description */}
    <div style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.5 }} className="hide-md">{p.d}</div>
    {/* role / year */}
    <div className="font-mono" style={{ fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.1em", textAlign: "right" }}>
      {p.role} · {p.year}
    </div>
    {/* arrow */}
    <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <ArrowRight size={14} />
    </div>
    <style>{`
      .list-row:hover { background: rgba(255,106,26,0.04); }
      @media (max-width: 780px) {
        .list-row { grid-template-columns: auto 1fr auto !important; }
        .list-row .hide-md { display: none; }
      }
    `}</style>
  </a>
);

// 5. Compact tile — minimal mosaic
const CompactTile = ({ p }) => (
  <a href={`https://${p.url}`} target="_blank" rel="noopener" className="proj-card" style={{ display: "flex", flexDirection: "column", borderRadius: 12, overflow: "hidden", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "all 0.3s", minHeight: 180 }}>
    <div style={{ padding: 20, display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid var(--border)" }}>
      <div style={{ width: 42, height: 42, borderRadius: 10, background: p.accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Archivo Black", fontSize: 18, color: "#0B0B0D" }}>
        {p.name[0]}
      </div>
      <div style={{ flex: 1 }}>
        <div className="font-display" style={{ fontSize: 18, letterSpacing: "-0.02em", lineHeight: 1 }}>{p.name}</div>
        <div className="eyebrow" style={{ marginTop: 4, fontSize: 9 }}>{p.cat}</div>
      </div>
      <ArrowRight size={14} />
    </div>
    <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <p style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{p.d}</p>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "JetBrains Mono", fontSize: 10, color: p.accent, letterSpacing: "0.05em" }}>↗ {p.url}</span>
        <span className="font-mono" style={{ fontSize: 10, color: "var(--text-mute)", letterSpacing: "0.15em" }}>{p.year}</span>
      </div>
    </div>
  </a>
);

// ============================================================
// CTA
// ============================================================
export const CTA = () => (
  <section id="contact" style={{ padding: "140px 0", position: "relative", overflow: "hidden" }}>
    {/* glow */}
    <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,106,26,0.2) 0%, transparent 60%)", filter: "blur(80px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,85,224,0.18) 0%, transparent 60%)", filter: "blur(80px)", top: "40%", left: "30%", pointerEvents: "none" }} />

    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }} className="cta-grid">
        <div>
          <span className="section-label">Let's Build</span>
          <h2 className="font-display" style={{ fontSize: "clamp(44px, 7vw, 96px)", letterSpacing: "-0.03em", lineHeight: 0.95, marginTop: 20, marginBottom: 24, textTransform: "uppercase" }}>
            Your project,<br />
            <span style={{ color: "var(--orange)", fontStyle: "italic", fontFamily: "Archivo Black", transform: "skewX(-6deg)", display: "inline-block" }}>our expertise.</span>
          </h2>
          <p style={{ color: "var(--text-dim)", fontSize: 18, lineHeight: 1.6, margin: 0, marginBottom: 32, maxWidth: 520 }}>
            Ready to build something great? Tell us about your idea and we'll get back to you within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://wa.me/213697339450" target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: "18px 28px", fontSize: 16 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A7.9 7.9 0 0012 4a8 8 0 00-6.8 12.2L4 20l3.9-1.1A8 8 0 0020 12a7.9 7.9 0 00-2.4-5.7zM12 18.5a6.5 6.5 0 01-3.3-.9l-.2-.1-2.3.6.6-2.2-.2-.2A6.5 6.5 0 1112 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.8-.2.1-.4 0a5.2 5.2 0 01-1.5-.9 5.7 5.7 0 01-1.1-1.3c-.1-.2 0-.3.1-.4l.3-.4.2-.3v-.3c0-.1-.4-1-.5-1.3s-.3-.3-.4-.3h-.4a.7.7 0 00-.5.2 2 2 0 00-.7 1.5 3.6 3.6 0 00.7 1.9 7.9 7.9 0 003 2.7c1.3.5 1.8.5 2.4.4a2 2 0 001.3-.9 1.6 1.6 0 00.1-.9c0-.1-.2-.1-.4-.2z"/></svg>
              WhatsApp Us
            </a>
            <a href="mailto:hello@sitedz.com" className="btn btn-ghost" style={{ padding: "18px 28px", fontSize: 16 }}>
              hello@sitedz.com
            </a>
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow">WhatsApp</div>
              <div className="font-display" style={{ fontSize: 22, marginTop: 6 }}>06 97 33 94 50</div>
            </div>
            <div>
              <div className="eyebrow">Response Time</div>
              <div className="font-display" style={{ fontSize: 22, marginTop: 6 }}>&lt; 24 hours</div>
            </div>
          </div>
        </div>

        {/* form card */}
        <div className="card" style={{ padding: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 4 }}>Step 01 / Discovery</div>
          <h3 className="font-display" style={{ fontSize: 22, margin: 0, marginBottom: 20, letterSpacing: "-0.02em" }}>Start your project</h3>

          <FormFields />
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

const FormFields = () => {
  const [data, setData] = useState({ name: "", email: "", project: "Web Development", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>✦</div>
        <div className="font-display" style={{ fontSize: 22, marginBottom: 8 }}>Message received.</div>
        <p style={{ color: "var(--text-dim)", fontSize: 14, margin: 0 }}>We'll get back to you within 24 hours. Typically much sooner.</p>
      </div>
    );
  }

  const input = {
    width: "100%", padding: "12px 14px", background: "#0B0B0D", border: "1px solid var(--border-2)",
    color: "var(--text)", borderRadius: 8, fontSize: 14, fontFamily: "inherit", outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <form onSubmit={onSubmit}>
      <label style={{ fontSize: 11, color: "var(--text-mute)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Name</label>
      <input required value={data.name} onChange={e => setData({...data, name: e.target.value})} placeholder="Your name" style={{ ...input, marginBottom: 14 }} />

      <label style={{ fontSize: 11, color: "var(--text-mute)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Email</label>
      <input required type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} placeholder="you@company.com" style={{ ...input, marginBottom: 14 }} />

      <label style={{ fontSize: 11, color: "var(--text-mute)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Service needed</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        {["Web Development", "Mobile App", "UI/UX", "Bot / Automation"].map(s => (
          <button
            type="button"
            key={s}
            onClick={() => setData({...data, project: s})}
            style={{
              padding: "8px 14px",
              fontSize: 12,
              borderRadius: 999,
              border: "1px solid " + (data.project === s ? "var(--orange)" : "var(--border-2)"),
              background: data.project === s ? "rgba(255,106,26,0.12)" : "transparent",
              color: data.project === s ? "var(--orange)" : "var(--text-dim)",
              transition: "all 0.2s",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <label style={{ fontSize: 11, color: "var(--text-mute)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Tell us about your project</label>
      <textarea value={data.msg} onChange={e => setData({...data, msg: e.target.value})} placeholder="A few sentences about what you want to build..." rows={4} style={{ ...input, marginBottom: 20, resize: "vertical" }} />

      <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px 20px", fontSize: 14 }}>
        Send it over <ArrowRight />
      </button>
    </form>
  );
};

// ============================================================
// FOOTER
// ============================================================
export const Footer = () => (
  <footer style={{ padding: "60px 0 32px", borderTop: "1px solid var(--border)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
        <div>
          <SiteDZLogo />
          <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6, marginTop: 20, maxWidth: 320 }}>
            Algeria's premier digital agency — building exceptional web and mobile experiences.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Company</div>
          <FooterLink>Services</FooterLink>
          <FooterLink>Process</FooterLink>
          <FooterLink>Pricing</FooterLink>
          <FooterLink>Our Work</FooterLink>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Contact</div>
          <FooterLink>hello@sitedz.com</FooterLink>
          <FooterLink>WhatsApp 06 97 33 94 50</FooterLink>
          <FooterLink>Algiers, Algeria</FooterLink>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Social</div>
          <FooterLink>Instagram</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
          <FooterLink>X / Twitter</FooterLink>
        </div>
      </div>

      {/* big brand word */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginTop: 12, textAlign: "center", overflow: "hidden" }}>
        <div className="font-display" style={{ fontSize: "clamp(80px, 18vw, 280px)", letterSpacing: "-0.05em", lineHeight: 0.85, background: "linear-gradient(180deg, #1a1a20 0%, #0B0B0D 100%)", WebkitBackgroundClip: "text", color: "transparent", backgroundClip: "text", userSelect: "none" }}>
          SiteDZ
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: 12, color: "var(--text-mute)" }}>© 2025 SiteDZ. All rights reserved.</div>
        <div style={{ fontSize: 12, color: "var(--text-mute)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em" }}>
          MADE IN ALGIERS · BUILT FOR THE WORLD
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 780px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
    `}</style>
  </footer>
);

const FooterLink = ({ children }) => (
  <a href="#" style={{ display: "block", fontSize: 13.5, color: "var(--text-dim)", marginBottom: 10, transition: "color 0.2s" }}
     onMouseEnter={e => e.target.style.color = "var(--text)"}
     onMouseLeave={e => e.target.style.color = "var(--text-dim)"}>
    {children}
  </a>
);

// expose
Object.assign(window, {
  Nav, Hero, LogoMarquee, Services, Process, Pricing, Projects, CTA, Footer,
  SiteDZLogo, SiteDZMark,
});
