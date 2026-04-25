# SITEDZ — Cream Redesign (Arabic-first, conversion-focused)

**Date:** 2026-04-25
**Goal:** Convert more Algerian business owners. Cleaner, simpler, brighter site on cream background.

## Outcome

Visitors land on an Arabic-first page with a clear value prop, see proof and pricing fast, and reach SITEDZ in one tap via WhatsApp or phone.

## Visual system

| Token | Old | New |
|---|---|---|
| `--bg` | `#0B0B0D` (near-black) | `#F3F1EC` (cream) |
| `--bg-elev` | `#111115` | `#FFFFFF` (white cards) |
| `--bg-card` | `#16161B` | `#FFFFFF` |
| `--text` | `#F3F1EC` | `#0B0B0D` |
| `--text-dim` | `#A7A5A0` | `#5A5852` |
| `--text-mute` | `#6F6D68` | `#8A8780` |
| `--border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` |
| `--border-2` | `rgba(255,255,255,0.14)` | `rgba(0,0,0,0.14)` |
| `--orange` | `#FF6A1A` | `#FF6A1A` (kept) |
| `--blue` | `#1E3FB8` | dropped from main palette |

**Removed visual noise:**
- `.glow-streak` (radial blur blobs in hero)
- `.grain::after` overlay
- `.streaks` SVG light streaks
- Heavy gradients on `.proj-bg-1..11` (replaced with flat tints + small accent bar)
- `.ruled` 12-column ghost grid

**Kept:**
- Fonts: Archivo (display), Space Grotesk (body), JetBrains Mono (labels), Cairo (Arabic)
- Orange `#FF6A1A` as the single accent for CTAs and one highlighted word in hero
- Marquee animation utility (component itself is removed, see below)

**New global element — sticky mobile action bar:**
A bottom-fixed bar on screens ≤ 768px containing two buttons: WhatsApp (filled orange) and Call (outlined). Always visible while scrolling. Hidden on desktop (CTAs in nav suffice).

## Section structure

Goes from 7 sections to 5. Order matches buyer journey: hook → offer → trust → proof → ask.

### 1. Hero
- Arabic headline: **"رؤيتك، نُبرمجها"** with one word styled in orange italic
- One-line subheadline (≈12 words) — what we do, for whom
- Two buttons: **"تواصل عبر واتساب"** (primary, orange) and **"اتصل الآن"** (ghost)
- Trust strip directly under buttons: "+X مشروع · ردّ خلال 24 ساعة · مقرّنا الجزائر"
- No dashboard mock illustration — replace with a calm typographic hero (giant headline + whitespace)

### 2. Services + inline pricing
Replaces both old `Services` and `Pricing` sections. 3 cards, each with:
- Service name (e.g. "موقع شركة احترافي")
- 1-line description
- 3 bullet points (what's included)
- "ابتداءً من **80,000 د.ج**" line
- WhatsApp button per card

Three offerings (final names TBD during implementation, but slots are):
1. Business website (starter)
2. E-commerce / booking site (mid)
3. Custom web app (premium)

### 3. Process
Slimmed from current step list to **3 steps**:
1. نتحدث (WhatsApp / call — free consult)
2. نصمم ونبرمج (with progress updates)
3. ننشر وندعم (launch + 30-day support)

### 4. Projects
- 4 cases only (not 11), each with: cover, name, 1-line outcome (e.g. "+40% طلبات في شهرين")
- Flat backgrounds, no gradients
- Single "عرض كل المشاريع" link at bottom (can route to a future `/projects` page or anchor — out of scope for this redesign)

### 5. CTA / Contact
- Full-width cream-on-white card
- Heading: "جاهز نبدأ؟"
- Phone number (tap-to-call) — large, monospace
- WhatsApp button (large, orange)
- Email line (smaller, secondary)

**Cut:** `LogoMarquee` section, separate `Pricing` section.

## Routing

- `/` → Arabic (default, `<html dir="rtl" lang="ar">`)
- `/en` → English (kept, LTR)
- `/ar` → redirect to `/` (or alias)
- `/fr` → not implemented (out of scope)

`App.jsx` swaps default route from `Home` (English) to `HomeAr` (Arabic). English moves to `/en`.

## Component impact

| File | Change |
|---|---|
| `src/index.css` | Rewrite token block, remove `.glow-streak`, `.grain`, `.streaks`, `.ruled`. Update `.btn-*`, `.card`, `.nav-link`, `.hero-title`, mobile media queries to match light theme. Add `.sticky-actions` for mobile bar. |
| `src/App.jsx` | Swap routes: `/` → HomeAr, `/en` → Home. |
| `src/pages/HomeAr.jsx` | Reduce to 5 sections: Hero, ServicesWithPricing, Process, Projects, CTA. |
| `src/pages/Home.jsx` | Same 5-section reduction, English copy. |
| `src/components/sections_ar.jsx` | Remove `LogoMarquee` and `Pricing` exports. Merge pricing into `Services`. Rewrite Hero (no mock illustration, no glow). Trim `Process` to 3. Trim `Projects` to 4 with flat backgrounds + outcome lines. Rewrite `CTA` for tap-to-call + WhatsApp. Add `<StickyActions />` mounted at page bottom. |
| `src/components/sections.jsx` | Same edits as `sections_ar.jsx` for English version. |

## Out of scope

- Standalone `/projects` page (linked but not built)
- Blog or case-study detail pages
- Form submission backend (CTAs are WhatsApp/phone deep links — `https://wa.me/<number>` and `tel:<number>`)
- French version
- Analytics events on CTA clicks (can be added later)

## Open inputs needed before implementation

These are content/data, not design decisions. Implementation can proceed with placeholders and the user fills them in:
- WhatsApp number (full international format)
- Display phone number (formatted)
- Final 3 service names + DZD starting prices
- Final 4 projects + outcome lines
- Project count for trust strip ("+X مشروع")

## Success criteria

- Cream background `#F3F1EC` site-wide
- Arabic loads at `/`, RTL correctly applied
- WhatsApp + Call CTAs present in: hero, every service card, CTA section, sticky mobile bar
- Mobile (≤640px) renders 5 sections without horizontal scroll, sticky bar always visible
- Desktop renders the same 5 sections, no sticky bar
- All removed sections (Marquee, Pricing) and visual effects (glow, grain, streaks) gone from DOM
