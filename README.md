# Fresh Ground Films

Marketing website for **Fresh Ground Films** — warm, human video production
based in Exeter, Devon, serving the whole of the UK.

Warm, bright and approachable — matched to Fresh Ground Films' real brand: a
cream/terracotta palette, a flowing script logotype, rounded human typography,
full-bleed natural-light video, and gentle, soft scroll motion. (Their live
brand accent is green; this build uses terracotta/amber per the brief and it's
a one-file swap in `tailwind.config.ts` if you ever want the green.)

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (mobile-first)
- **Framer Motion** for scroll reveals, crossfades and the filter transitions
- Fonts via `next/font` — **Poppins** (headings) + **Nunito Sans** (body) +
  **Dancing Script** (logotype)
- Static/SSG by default; only `/api/contact` is dynamic
- Deploys to **Vercel** with zero configuration

Dependency list is intentionally lean — `next`, `react`, `react-dom` and
`framer-motion` in production; TypeScript, Tailwind and PostCSS tooling in dev.

---

## Project structure

```
fresh-ground-films/
├── app/
│   ├── layout.tsx                     # Root layout: fonts, nav, footer, JSON-LD, meta
│   ├── globals.css                    # Tailwind layers, base styles, brand CSS vars
│   ├── page.tsx                       # HOME
│   ├── work/page.tsx                  # WORK / portfolio (filterable)
│   ├── about/page.tsx                 # ABOUT (Ross Gill + approach)
│   ├── contact/page.tsx               # CONTACT (form + details)
│   ├── blog/page.tsx                  # FIELD NOTES (blog) index
│   ├── blog/[slug]/page.tsx           # Individual Field Note (SSG)
│   ├── video-production-exeter/       # SEO landing page
│   ├── healthcare-video-production/   # SEO landing page
│   ├── charity-video-production/      # SEO landing page
│   ├── education-video-production/    # SEO landing page
│   ├── api/contact/route.ts           # Contact form handler (stub)
│   ├── sitemap.ts  ·  robots.ts       # SEO route files
│   ├── not-found.tsx  ·  icon.svg     # 404 + favicon
├── components/
│   ├── Nav.tsx  ·  Footer.tsx  ·  Logo.tsx   # Logo = script wordmark
│   ├── Hero.tsx                       # Full-bleed video + mobile poster fallback
│   ├── SmartImage.tsx                 # Graceful warm image fallback
│   ├── SectorStrip.tsx  ·  SectorIcon.tsx
│   ├── FeaturedWork.tsx  ·  ProjectCard.tsx  ·  VideoModal.tsx
│   ├── WorkGrid.tsx                   # Client-side sector filtering
│   ├── TestimonialCarousel.tsx
│   ├── ContactForm.tsx  ·  CTABand.tsx
│   ├── SectorLanding.tsx              # Shared template for SEO pages
│   ├── Reveal.tsx                     # Framer Motion scroll-reveal wrapper
│   └── JsonLd.tsx                     # LocalBusiness schema
├── content/                          # All copy + config (edit here, not in JSX)
│   ├── site.ts  ·  placeholders.ts   # placeholders.ts = single swap-in file
│   ├── sectors.ts  ·  projects.ts
│   ├── testimonials.ts  ·  landings.ts  ·  blog.ts
├── public/                           # Generated placeholder video + stills
└── config files (next / tailwind / tsconfig / postcss)
```

All site copy lives in `/content` so it can be edited without touching
components. **`content/placeholders.ts` is the one file to change** to swap in
real contact details, social links and asset paths.

---

## Local development

Requires Node 18.17+ (Node 20 recommended).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

---

## Deploying to Vercel

1. **Push to GitHub** — create a repo and push this project.
   ```bash
   git init
   git add .
   git commit -m "Fresh Ground Films website"
   git branch -M main
   git remote add origin https://github.com/<you>/fresh-ground-films.git
   git push -u origin main
   ```
2. **Import to Vercel** — go to [vercel.com/new](https://vercel.com/new), pick
   the repo. Vercel auto-detects Next.js; no build settings to change.
   - Build command: `next build` (auto)
   - Output: handled automatically
3. **(Optional) environment variables** — set `NEXT_PUBLIC_SITE_URL` to the
   real production domain so canonical URLs, Open Graph and JSON-LD use it.
   Add `RESEND_API_KEY` if/when you wire up email (see below).
4. **Deploy.** First deploy gives you a `*.vercel.app` URL.
5. **Add your domain** — Vercel → Project → Settings → Domains → add
   `freshgroundfilms.co.uk` and follow the DNS steps.

### Wiring up the contact form

`app/api/contact/route.ts` currently validates + `console.log`s the enquiry and
returns success, so the flow works immediately. To send real email, follow the
commented instructions at the top of that file — the quickest path is
[Resend](https://resend.com): `npm install resend`, add `RESEND_API_KEY`, and
uncomment the send block. (Formspree is documented there as a no-backend
alternative.)

---

## Pre-launch placeholder checklist

Search the codebase for `PLACEHOLDER_` to find every item. Most live in
`content/placeholders.ts` (a single-file swap). Tick these off before launch:

**Contact & social** — `content/placeholders.ts`
- [ ] `PLACEHOLDER_PHONE_NUMBER` — real phone + `PHONE_HREF` (`tel:` link)
- [ ] `PLACEHOLDER_EMAIL` — confirm the real inbox (currently
      `hello@freshgroundfilms.co.uk`)
- [ ] `PLACEHOLDER_LINKEDIN_URL` (Instagram / Vimeo / Facebook are already set
      to the real public Fresh Ground Films profiles)
- [ ] Address + geo (`ADDRESS_STREET`, `ADDRESS_POSTCODE`, `GEO_LAT`,
      `GEO_LNG`) for the JSON-LD LocalBusiness schema

**Brand**
- [ ] `PLACEHOLDER_LOGO_SVG` — replace the wordmark markup in
      `components/Logo.tsx` with the real logo SVG
- [ ] `public/img/PLACEHOLDER_LOGO.png` — logo used in JSON-LD
- [ ] **BRAND COLOUR SWAP MARKER** — confirm/replace the three brand hexes in
      `tailwind.config.ts` and `app/globals.css` once the logo is supplied

**Video** — `public/video`
- [ ] `PLACEHOLDER_HERO_VIDEO.mp4` — real hero/showreel
- [ ] `PLACEHOLDER_PORTFOLIO_VIDEO_1` … `_6.mp4` — per-project films

**Stills** — `public/img` & `public/og`
- [ ] `PLACEHOLDER_HERO_IMAGE.jpg` — bright, warm hero still / poster
- [ ] `PLACEHOLDER_PORTFOLIO_POSTER_1` … `_6.jpg`
- [ ] `PLACEHOLDER_FOUNDER_PORTRAIT.jpg`
- [ ] `PLACEHOLDER_TEAM_PHOTO.jpg`
- [ ] `PLACEHOLDER_BTS_PHOTO_1.jpg`, `PLACEHOLDER_BTS_PHOTO_2.jpg`
- [ ] `PLACEHOLDER_BLOG_COVER_1` … `_4.jpg` — Field Notes covers
- [ ] `PLACEHOLDER_OG_IMAGE.jpg` — 1200×630 social share image
- [ ] Delete the two orphan `PLACEHOLDER_SHOWREEL_*` files (no longer used)

**Copy / alt text**
- [ ] Replace every `PLACEHOLDER_ALT:` string with real descriptive alt text
- [ ] Review project descriptions & outcome narratives in
      `content/projects.ts` — items flagged `[A]` contain assumed specifics
      (metrics, deliverables) to confirm with the client before publishing
- [ ] Set `NEXT_PUBLIC_SITE_URL` / `SITE_URL` in `content/site.ts`

**Contact form**
- [ ] Wire `app/api/contact/route.ts` to a real email provider

---

## Notes on the build

- **Mobile-first & responsive** at 375 / 768 / 1024 / 1440. The hero autoplays
  video on desktop only; on mobile it shows a poster + play button to protect
  load speed and data.
- **Accessibility**: semantic landmarks, one `<h1>` per page, visible focus
  states, 44px+ tap targets, `prefers-reduced-motion` disables reveals and the
  soft-zoom / autoplay.
- **SEO**: per-page meta + Open Graph, JSON-LD LocalBusiness, `sitemap.xml`
  (incl. Field Notes), `robots.txt`, clean crawlable sector URLs.
- **Graceful media**: every still/video uses a warm fallback block (never a
  broken-image icon) if the asset is missing — see `components/SmartImage.tsx`.
- The placeholder video/stills in `public/` are bright, warm generated
  stand-ins that match the real brand tone — see `public/PLACEHOLDER-ASSETS.md`.
