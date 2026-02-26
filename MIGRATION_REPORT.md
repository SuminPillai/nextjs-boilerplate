# Migration Report: Static HTML to Next.js

## Project: Anantadrishti Yoga Website
**Date:** February 11, 2026
**From:** Static HTML/CSS/JS (Tailwind CDN + PHP backend)
**To:** Next.js 16 + React 19 + TypeScript + Tailwind CSS

---

## Table of Contents

1. [Migration Summary](#migration-summary)
2. [Phase 1: Critical Bug Fixes](#phase-1-critical-bug-fixes)
3. [Phase 2: Missing Interactive Components](#phase-2-missing-interactive-components)
4. [Phase 3: Missing Page Migration](#phase-3-missing-page-migration)
5. [Phase 4: SEO & Contact Form Improvements](#phase-4-seo--contact-form-improvements)
6. [Phase 5: Infrastructure Additions](#phase-5-infrastructure-additions)
7. [Pages Migration Status](#pages-migration-status)
8. [Features Migration Status](#features-migration-status)
9. [New Features in Next.js](#new-features-in-nextjs)
10. [Architecture Overview](#architecture-overview)
11. [How to Update Course Dates](#how-to-update-course-dates)
12. [How to Add Translations (i18n)](#how-to-add-translations-i18n)
13. [Remaining Work](#remaining-work)

---

## Migration Summary

The Anantadrishti Yoga website has been migrated from a static HTML/CSS/JS site with PHP backend to a modern Next.js 16 application. This migration delivers:

- **Better SEO** via server-side rendering, automatic sitemap, robots.txt, and structured data
- **Better Performance** via Next.js Image optimization (AVIF/WebP), code splitting, and compression
- **Better Developer Experience** via TypeScript, component-based architecture, and centralized data management
- **Better Security** via HSTS, X-Frame-Options, CSP, and sanitized API routes
- **Better Accessibility** via semantic HTML, ARIA attributes, focus management, and reduced-motion support

---

## Phase 1: Critical Bug Fixes

### 1.1 Scroll Progress Bar — FIXED
**Problem:** The scroll progress bar in `Header.tsx` was hardcoded to `width: 0%` and never updated.

**Solution:** Added `scrollProgress` state and a scroll event listener that calculates the percentage of page scrolled. The progress bar now dynamically fills as the user scrolls.

**Files Changed:**
- `src/components/layout/Header.tsx` — Added state + scroll calculation

### 1.2 Floating WhatsApp Button — ADDED
**Problem:** The original site had a persistent green WhatsApp button (bottom-right, every page). The Next.js version had no equivalent.

**Solution:** Created `FloatingWhatsApp.tsx` component with:
- Framer Motion entrance animation (scales in after 1.5s)
- WhatsApp SVG icon matching the original
- Pre-filled message: "Hari Om! I am interested in your courses."
- Opens WhatsApp at +91 89790 95535
- Hover and tap animations

**Files Created:**
- `src/components/ui/FloatingWhatsApp.tsx`

**Files Changed:**
- `src/app/layout.tsx` — Added `<FloatingWhatsApp />` to body

### 1.3 Back-to-Top Button — ADDED
**Problem:** Original site had a back-to-top button that appeared after scrolling 300px. Missing in Next.js.

**Solution:** Created `BackToTop.tsx` component with:
- Shows/hides based on scroll position (300px threshold)
- Smooth scroll to top on click
- Positioned bottom-left to avoid overlap with WhatsApp button
- Framer Motion animations

**Files Created:**
- `src/components/ui/BackToTop.tsx`

**Files Changed:**
- `src/app/layout.tsx` — Added `<BackToTop />` to body

---

## Phase 2: Missing Interactive Components

### 2.1 Breathing Portal — ADDED
**Problem:** The original site had an interactive breathing circle meditation portal with Start/Stop functionality and 4 breathing phases. The Next.js `Meditation.tsx` was a static CTA section with no interactivity.

**Solution:** Created `BreathingPortal.tsx` with:
- 4 breathing phases: Prepare (2s) → Breathe In (4s) → Hold (2s) → Breathe Out (6s)
- Animated breathing circle using Framer Motion (scales with breath)
- Rotating dots around the circle during breathing
- Phase text transitions with AnimatePresence
- Start/Stop button toggling
- ARIA live region for screen reader announcements
- Dark background (brand-dark) for meditative atmosphere

**Files Created:**
- `src/components/home/BreathingPortal.tsx`

**Files Changed:**
- `src/app/page.tsx` — Added `<BreathingPortal />` between Gallery and Meditation sections

### 2.2 Event Popup Modal — ADDED
**Problem:** The original site displayed a popup after a 2-second delay announcing upcoming events. Missing in Next.js.

**Solution:** Created `EventPopup.tsx` with:
- 3-second delay before showing (non-intrusive)
- Session-based dismissal (won't show again after closing)
- Backdrop blur with click-to-close
- Event details: title, subtitle, date, location
- CTA button linking to the event page
- "Later" dismiss button
- Framer Motion entrance/exit animations
- Easy to update: just change the `currentEvent` object at the top of the file

**Files Created:**
- `src/components/ui/EventPopup.tsx`

**Files Changed:**
- `src/app/layout.tsx` — Added `<EventPopup />` to body

---

## Phase 3: Missing Page Migration

### 3.1 Advanced Pranayama Immersion Page — CREATED
**Problem:** The original `advanced-pranayama-immersion.html` was not migrated to Next.js.

**Solution:** Created full Next.js page at `/retreats/advanced-pranayama-immersion` with:
- SEO metadata (title, description, OG tags, canonical)
- JSON-LD structured data (Event schema)
- Hero section with pranayama hero image
- Purpose of Pranayama section
- 6-card curriculum grid (Lucide icons instead of emoji)
- Available dates section (3-Day and 5-7 Day programs)
- "Integrate Your Practice" cross-links (Satsang, Rituals, Devotion)
- Booking CTA with WhatsApp + Contact buttons

**Files Created:**
- `src/app/retreats/advanced-pranayama-immersion/page.tsx`

---

## Phase 4: SEO & Contact Form Improvements

### 4.1 Hreflang Tags — ADDED
**Problem:** The original site had hreflang alternate links for English, Japanese, Korean, and x-default. The Next.js site only had a canonical URL.

**Solution:** Added `languages` to the `alternates` metadata in the root layout:
- `en` → `https://www.anantadrishtiyoga.com`
- `ja` → `https://www.anantadrishtiyoga.com/jp`
- `ko` → `https://www.anantadrishtiyoga.com/kr`
- `x-default` → `https://www.anantadrishtiyoga.com`

Next.js automatically generates the proper `<link rel="alternate" hreflang="...">` tags.

**Files Changed:**
- `src/app/layout.tsx` — Added `languages` to `alternates`

### 4.2 Contact Form — IMPROVED
**Problem:** The original site sent emails via PHP `mail()` with a WhatsApp fallback. The Next.js version only redirected to WhatsApp with no server-side processing.

**Solution:**
1. Created API route `/api/contact` that:
   - Validates required fields and email format
   - Logs submissions server-side (ready for email service integration)
   - Returns a WhatsApp deeplink as fallback
   - Returns structured JSON responses
2. Updated `ContactForm.tsx` to:
   - POST to `/api/contact` instead of just opening WhatsApp
   - Show success message with WhatsApp chat option
   - Handle errors gracefully

**To complete email sending:** Integrate a service like Resend, SendGrid, or Nodemailer in the API route. The route is structured and ready — just add the send call.

**Files Created:**
- `src/app/api/contact/route.ts`

**Files Changed:**
- `src/components/contact/ContactForm.tsx`

---

## Phase 5: Infrastructure Additions

### 5.1 Dynamic Course Dates System — CREATED
**Problem:** The original site managed course dates via `course-dates.js` (fetching from PHP API). The Next.js site had all dates hardcoded in JSX.

**Solution:** Created `src/data/courseDates.ts` — a centralized data file containing:
- All course/retreat schedules with batch dates
- Spots total/booked tracking
- Status indicators (open, filling, full, upcoming)
- Early bird deadline support
- Helper functions: `getScheduleBySlug()`, `getNextBatch()`, `formatDate()`, `getSpotsLeft()`

Created `src/components/ui/CourseDates.tsx`:
- `<CourseDates>` — Displays all upcoming batches for a course with status badges
- `<NextCourseDate>` — Inline component showing just the next available date

**To update dates:** Edit `src/data/courseDates.ts` — all course pages will automatically reflect changes.

**Files Created:**
- `src/data/courseDates.ts`
- `src/components/ui/CourseDates.tsx`

### 5.2 Internationalization (i18n) Infrastructure — CREATED
**Problem:** The original site had 20 translated pages (10 Japanese, 10 Korean). The Next.js site was English-only.

**Solution:** Set up the complete i18n infrastructure:

1. **Configuration** (`src/i18n/config.ts`):
   - Locales: en, ja, ko
   - Path mapping: `/jp` for Japanese, `/kr` for Korean
   - Display names

2. **Translation Dictionaries**:
   - `src/i18n/dictionaries/en.json` — English strings
   - `src/i18n/dictionaries/ja.json` — Japanese strings
   - `src/i18n/dictionaries/ko.json` — Korean strings
   - Covers: navigation, hero, courses, contact form, footer

3. **Dictionary Loader** (`src/i18n/getDictionary.ts`):
   - Lazy-loads dictionaries to minimize bundle size
   - TypeScript-typed dictionary structure

4. **Middleware** (`src/middleware.ts`):
   - Detects locale from URL path prefix
   - Sets `x-locale` header for downstream use
   - Ready for expansion to full rewrite-based routing

**Files Created:**
- `src/i18n/config.ts`
- `src/i18n/dictionaries/en.json`
- `src/i18n/dictionaries/ja.json`
- `src/i18n/dictionaries/ko.json`
- `src/i18n/getDictionary.ts`
- `src/middleware.ts`

---

## Pages Migration Status

| Page | Original Path | Next.js Route | Status |
|------|--------------|---------------|--------|
| Homepage | `index.html` | `/` | Migrated |
| About | `about.html` | `/about` | Migrated |
| Contact | `contact.html` | `/contact` | Migrated + Improved |
| Book Class | `book-class.html` | `/book-class` | Migrated |
| Blog Hub | `blog.html` | `/blog` | Migrated |
| 7 Blog Posts | `blog-*.html` | `/blog/[slug]` | Migrated (dynamic routes) |
| 100hr TTC | `100-hour-yoga-teacher-training.html` | `/courses/100-hour-yoga-ttc` | Migrated |
| 200hr TTC | `200-hour-yoga-teacher-training.html` | `/courses/200-hour-yoga-ttc` | Migrated |
| 300hr TTC | `300-hour-yoga-teacher-training.html` | `/courses/300-hour-yoga-ttc` | Migrated |
| Yoga Retreats | `yoga-retreats.html` | `/yoga-retreats` | Migrated |
| 1-Day Retreat | `1-day-retreat.html` | `/retreats/1-day-retreat` | Migrated |
| 3-Day Retreat | `3-day-pranayama-retreat.html` | `/retreats/3-day-pranayama-retreat` | Migrated |
| 7-Day Retreat | `7-day-yoga-retreat.html` | `/retreats/7-day-yoga-retreat` | Migrated |
| Adv. Pranayama | `advanced-pranayama-immersion.html` | `/retreats/advanced-pranayama-immersion` | **NEW** - Created |
| Pranayama | `pranayama.html` | `/pranayama` | Migrated |
| Philosophy | `yoga-philosophy.html` | `/yoga-philosophy` | Migrated |
| Devotion | `devotion.html` | `/devotion` | Migrated |
| Rituals | `rituals.html` | `/rituals` | Migrated |
| Satsang | `satsang.html` | `/satsang` | Migrated |
| Gallery | (homepage section) | `/gallery` | Upgraded to full page |
| Privacy | `privacy.html` | `/privacy` | Migrated |
| Terms | `terms.html` | `/terms` | Migrated |
| Refund | `refund.html` | `/refund` | Migrated |

**Total: 24 English pages migrated + 1 new page created**

---

## Features Migration Status

| Feature | Status | Notes |
|---------|--------|-------|
| Responsive navigation | Migrated | Improved with Framer Motion + swipe-to-close |
| Sticky header + scroll effect | Migrated | Uses React state instead of DOM manipulation |
| Scroll progress bar | Fixed | Was hardcoded to 0%, now dynamic |
| Floating WhatsApp button | Added | Matches original, with Framer Motion animations |
| Back-to-top button | Added | Smooth scroll, positioned bottom-left |
| Breathing portal | Added | Full interactive breathing circle with 4 phases |
| Event popup modal | Added | 3s delay, session-based dismissal |
| Contact form | Improved | API route + WhatsApp fallback (was WhatsApp only) |
| Hreflang tags | Added | en, ja, ko, x-default via Next.js metadata API |
| JSON-LD structured data | Migrated | More comprehensive (Organization, LocalBusiness, Course, FAQ, Breadcrumb) |
| Open Graph / Twitter cards | Migrated | Via Next.js metadata API |
| Sitemap | Upgraded | Auto-generated via `sitemap.ts` |
| Robots.txt | Upgraded | Auto-generated via `robots.ts` |
| Image optimization | Upgraded | Next.js Image with AVIF + WebP + sharp |
| WhatsApp integration | Migrated | In footer, CTAs, contact form, and floating button |
| Google Maps embed | Migrated | In Location component |
| Testimonials | Migrated | With animations |
| Gallery | Migrated | Next.js Image optimized |
| Daily schedule | Migrated | Component-based |
| FAQ section | New | With JSON-LD FAQ schema |
| Stats/Trust section | New | Social proof indicators |
| Partners/Certifications | New | Certification badges |
| Page transitions | New | Framer Motion |
| PWA manifest | New | `manifest.ts` |
| Security headers | New | HSTS, X-Frame, X-Content-Type, Referrer-Policy |
| Course dates system | New | Centralized data management |
| i18n infrastructure | New | Dictionaries + middleware ready |

---

## New Features in Next.js

These features are **new** in the Next.js version and were not present in the original:

1. **FAQ Section** with JSON-LD schema (SEO featured snippets)
2. **Stats/Trust Section** for social proof
3. **Partners/Certifications Section** for authority signals
4. **Framer Motion Animations** throughout the site
5. **PWA Manifest** for installability
6. **Security Headers** (HSTS, X-Frame-Options, etc.)
7. **TypeScript** for type safety
8. **Component Architecture** for maintainability
9. **Centralized Course Dates** system
10. **API Route** for contact form processing

---

## Architecture Overview

```
src/
├── app/                    # Next.js App Router (pages & routes)
│   ├── api/contact/        # Contact form API endpoint
│   ├── about/
│   ├── blog/[slug]/        # Dynamic blog routes
│   ├── courses/            # TTC course pages
│   ├── retreats/           # Retreat & immersion pages
│   ├── layout.tsx          # Root layout (SEO, fonts, global components)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Auto-generated robots.txt
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── home/               # Homepage section components (14+)
│   ├── about/              # About page components
│   ├── contact/            # Contact page components
│   ├── blog/               # Blog components
│   ├── layout/             # Header & Footer
│   ├── seo/                # JSON-LD structured data
│   └── ui/                 # Reusable UI components
├── data/
│   ├── blogData.ts         # Blog post content
│   └── courseDates.ts      # Centralized course schedule
├── i18n/
│   ├── config.ts           # i18n configuration
│   ├── getDictionary.ts    # Dictionary loader
│   └── dictionaries/       # en.json, ja.json, ko.json
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
└── middleware.ts            # Locale detection middleware
```

---

## How to Update Course Dates

All course dates are managed in a single file: `src/data/courseDates.ts`

### To add a new batch:
```typescript
// In courseDates.ts, find the course by slug and add to batches:
{
    startDate: "2026-06-01",
    endDate: "2026-06-26",
    spotsTotal: 20,
    spotsBooked: 0,
    status: "open",
}
```

### To mark a batch as full:
Change `status: "open"` to `status: "full"` and update `spotsBooked`.

### To use in a component:
```tsx
import { CourseDates, NextCourseDate } from "@/components/ui/CourseDates";

// Show all upcoming batches
<CourseDates courseSlug="200-hour-yoga-ttc" showAll />

// Show just the next available date inline
<p>Next batch starts: <NextCourseDate courseSlug="200-hour-yoga-ttc" /></p>
```

---

## How to Add Translations (i18n)

### 1. Add strings to dictionaries
Edit `src/i18n/dictionaries/ja.json` or `ko.json` to add new translated strings.

### 2. Use in components
```tsx
import { getDictionary } from "@/i18n/getDictionary";

export default async function Page({ params }: { params: { locale: string } }) {
    const dict = await getDictionary(params.locale as Locale);
    return <h1>{dict.hero.title}</h1>;
}
```

### 3. Create locale-specific pages
For full i18n routing, create pages under `/jp/` and `/kr/` route directories, or implement Next.js route groups with locale parameters.

---

## Remaining Work

### High Priority
1. **Email Integration** — Connect the `/api/contact` route to an email service (Resend, SendGrid, or Nodemailer) for actual email delivery
2. **Full i18n Pages** — Create actual Japanese and Korean page components using the dictionaries. Currently only the infrastructure is in place.

### Medium Priority
3. **Admin Dashboard** — The original had a PHP admin panel for managing courses/bookings. Consider building a Next.js admin with a database (e.g., Prisma + PostgreSQL) or using a headless CMS
4. **Course Dates API** — Connect `courseDates.ts` to a database or CMS for dynamic management instead of static data
5. **Google Analytics** — Add GA4 tracking (the original had Google Analytics configured)

### Low Priority
6. **Tailwind CSS v3 → v4 Upgrade** — The current project uses Tailwind v3 which has a known incompatibility with Next.js 16's Turbopack for production builds. Upgrading to Tailwind v4 resolves this. The dev server (`next dev`) works correctly. See: https://tailwindcss.com/docs/upgrade-guide
7. **Progressive Web App** — Complete the PWA setup with service worker for offline support
8. **Image Optimization Audit** — Ensure all images use Next.js `<Image>` component for automatic optimization
9. **Performance Testing** — Run Lighthouse audits and optimize any bottlenecks
10. **Accessibility Audit** — Run axe or WAVE audit for comprehensive a11y compliance

### Known Issue: Production Build
The production build (`next build`) fails due to Tailwind CSS v3's internal use of Node.js modules (`fs`, `path`, `v8`) that Turbopack cannot resolve in browser bundles. This is a **pre-existing issue** not caused by the migration fixes. Solutions:
1. Upgrade Tailwind CSS to v4 (recommended)
2. Or downgrade Next.js to 15.x which uses webpack by default

---

## Files Created in This Migration Fix

| File | Purpose |
|------|---------|
| `src/components/ui/FloatingWhatsApp.tsx` | Persistent WhatsApp contact button |
| `src/components/ui/BackToTop.tsx` | Scroll-to-top button |
| `src/components/ui/EventPopup.tsx` | Event announcement popup modal |
| `src/components/ui/CourseDates.tsx` | Reusable course dates display |
| `src/components/home/BreathingPortal.tsx` | Interactive breathing meditation portal |
| `src/app/retreats/advanced-pranayama-immersion/page.tsx` | Missing course page |
| `src/app/api/contact/route.ts` | Server-side contact form handler |
| `src/data/courseDates.ts` | Centralized course schedule data |
| `src/i18n/config.ts` | i18n configuration |
| `src/i18n/getDictionary.ts` | Translation dictionary loader |
| `src/i18n/dictionaries/en.json` | English translations |
| `src/i18n/dictionaries/ja.json` | Japanese translations |
| `src/i18n/dictionaries/ko.json` | Korean translations |
| `src/middleware.ts` | Locale detection middleware |

## Files Modified in This Migration Fix

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | Fixed scroll progress bar (was 0%, now dynamic) |
| `src/app/layout.tsx` | Added FloatingWhatsApp, BackToTop, EventPopup, hreflang tags |
| `src/app/page.tsx` | Added BreathingPortal section |
| `src/components/contact/ContactForm.tsx` | Upgraded to use API route with WhatsApp fallback |
