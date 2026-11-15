# Website Experience & Motion System

How the cinematic homepage and the site-wide motion system are built, and what content is still needed.

## Homepage scroll story

| # | Section | Component | What it does |
|---|---|---|---|
| A | Hero | `sections/HeroCinematic.jsx` | Headline "Empowering Lives. Igniting Futures." ("Futures." in gold). Full-screen mining photo (AVIF/WebP) that settles from a slow zoom, then parallaxes on scroll. Navy overlays, drifting contour lines, staged headline reveal, scroll cue. |
| B | At a glance | `sections/AtAGlance.jsx` | Count-up statistics. Every number is computed from `src/data/*` (divisions, offices, mining districts, training programmes), so it cannot drift from the facts. |
| C | Business divisions | `sections/Divisions.jsx` | Five alternating editorial layouts: curtain-wipe image reveal, hover zoom, outlined index numbers, gold accents. Industrial Training uses a designed programme panel instead of a photo. |
| E | Footprint | `sections/FootprintMap.jsx` + `data/geo.js` | Indicative SVG map of Odisha: offices (gold, pulsing), mining districts (teal), construction (gold diamond). Bengaluru corporate office shown as an inset card. |
| F | Projects & operations | `sections/ProjectsShowcase.jsx` | Large image panels for mining operations and construction at Paradip, marked "Details to be published". |
| G | Community | `sections/CommunityTeaser.jsx` | The Maakalarai Charitable Trust (the only confirmed initiative), linking to the trust's website. |
| H | Business enquiry | `sections/ClosingCTA.jsx` | Closing statement, topic shortcuts into the contact form, phone and email. |

Header (`layout/Header.jsx`): fixed; transparent over the homepage hero and solid navy once scrolled; gold active-link indicator that glides between items; animated, keyboard-operable Businesses dropdown (Enter/Space to open, Escape to close and return focus); responsive mobile menu with an expandable Businesses group.

Footer (`layout/Footer.jsx`): brand band with closing tagline and CTA, columns for businesses, company pages, all three office addresses with phone/email, and the trust.

## Site-wide animation and scroll effects

- **Scroll progress bar:** a thin gold bar at the top of every page tracks reading progress (`motion/ScrollProgress.jsx`).
- **Page heroes with parallax:** every inner-page header (`common/PageHeader.jsx`), every business page hero and the Community hero play a staged entrance (breadcrumb, gold rule, eyebrow, masked title, intro). As you scroll past, the background drifts slower than the page while the content rises and fades (`hooks/useHeroParallax.js`).
- **Section headings:** `common/SectionHeading.jsx` animates on scroll (gold rule draws, eyebrow, title and intro rise in turn).
- **Content reveals:** cards, lists, forms and text blocks on every page rise in as they enter the viewport, staggered where they form a group: About, Businesses, business pages, Projects, Locations, Careers, Contact, Privacy and 404.
- **Hover:** cards lift slightly with a gold border, images zoom gently, and buttons press in.
- **Page transitions:** a soft fade-up between routes, and new pages start at the top immediately.

## Motion system

All animation uses **Motion for React** (`motion` package). GSAP was evaluated and deliberately not added: Motion's `useScroll`/`useTransform` covers the parallax and scroll-linked effects needed, and a second animation library would add weight and competing systems.

- **Central config:** `src/lib/motion.js` holds the easing curves, duration tokens, shared viewport settings and variants: `fadeUp`, `fadeIn`, `slideReveal`, `scaleReveal`, `lineReveal` (masked headline lines), `imageReveal` + `imageSettle`, `stagger`, `drawLine`.
- **Reusable components:**
  - `common/Reveal.jsx`: scroll entrance for any element (`as`, `delay`, `variants`).
  - `motion/ImageReveal.jsx`: curtain-wipe image reveal with settle and hover zoom.
  - `motion/CountUp.jsx`: animated statistic with a screen-reader value.
  - `common/Collapse.jsx`: height animation for menus and accordions.
- **CSS:** one easing token (`ease-smooth`) for hovers and transitions, plus the `animate-page-in` page fade (`styles/index.css`).
- **Reduced motion:** `<MotionConfig reducedMotion="user">` in `main.jsx` stops transform animation, count-ups show final values immediately, and the global CSS rule collapses CSS transitions.
- **Rule:** in-view triggers must sit on unclipped elements. Browsers report a fully `clip-path`-hidden element as non-intersecting, so `ImageReveal` observes an outer wrapper.

## Performance

- Photos are served as **AVIF with WebP fallback** through `<picture>` (`common/Photo.jsx`), with responsive `srcset` and lazy loading below the fold. The hero image loads eagerly with `fetchpriority="high"`.
- All pages except Home are **code-split** (`React.lazy`), so each inner page is a 2–10 KB chunk.
- The header and footer logo is a 176 px WebP (11 KB) instead of the 137 KB original.
- Animations use only `transform`, `opacity` and `clip-path`.

## Verification (Nov 2026)

Production build checked in Microsoft Edge at 1440 px and 390 px across all 13 routes: no horizontal overflow, one `h1` per page, no content left hidden by animations, no heading covered by the fixed header, no console errors. Reduced-motion and keyboard navigation of the dropdown tested.

## Content still needed from the company

| Item | Why |
|---|---|
| High-resolution hero photo or muted video (≥ 2400 px wide) of real company operations | The current hero uses a 1200 px representative image. |
| Own photography for each business, especially transport (current source is only 395 px wide) and training | Replace the "Representative image" photos. |
| Licences for the current stock or AI images | Required before launch. |
| Approved project details: names, scope, status, client permission | Projects show "Details to be published". |
| Commodities and site names per mining district | Mining page. |
| Manufacturing products and facility details | Manufacturing page. |
| Transport services, coverage and fleet (if publishable) | Transportation page. |
| Training durations, fees, eligibility, centre location, certificates | Industrial Training page. |
| Mission, vision and values | About page. |
| Job titles for Sarbeshwar Baliyarsingh, Ullash Swain and Trilochan Swain, and approval of their quotes | About page. |
| Trust focus areas and initiatives | Community page. |
| Safety and responsibility policies that are actually implemented | Homepage section intentionally omitted until supplied. |
| SVG versions of both logos | Sharp rendering and favicons. |
| Enquiry form endpoint (`VITE_ENQUIRY_ENDPOINT`) | Online enquiries currently fall back to phone and email. |
