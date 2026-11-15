# Phakir Sarada Private Limited --- Website

A corporate website for **Phakir Sarada Private Limited**, positioned as
a diversified industrial conglomerate with business interests in mining,
construction, manufacturing, transportation, and industrial training.
The website also presents the company's charitable work through the
**Maa Kalarai Charitable Trust**.

> This repository contains the website project and its supporting
> documentation. Company facts, project details, contact information,
> certifications, and operational claims must be verified and approved
> before publication.

## 1. Project objectives

The website will:

-   Present a unified corporate identity across the company's business
    verticals.
-   Explain each business clearly while maintaining one parent-company
    brand.
-   Communicate the company's office and operational footprint.
-   Showcase approved projects, facilities, capabilities, and company
    updates.
-   Promote the company's industrial training programmes.
-   Present the Maa Kalarai Charitable Trust and its community work.
-   Generate business, training, vendor, partnership, community, and
    career enquiries.
-   Provide a responsive, accessible, search-friendly experience.

## 2. Company overview

**Legal name:** Phakir Sarada Private Limited\
**Corporate positioning:** Diversified industrial conglomerate\
**Business verticals:**

1.  Mining
2.  Construction
3.  Manufacturing
4.  Transportation and logistics
5.  Industrial training

**Charitable arm:** Maa Kalarai Charitable Trust

The trust appears in a separate **Community** section, not as a
business vertical. Its exact legal relationship to the company,
registration details, and focus areas must be confirmed before
publication.

### Industrial training

The company provides industrial training. The programme names, skills
covered, duration, eligibility, training centre location(s), and any
accreditation or certification must be confirmed before publication. Do
not claim government accreditation or placement guarantees unless they
are documented.

### Known geographic presence

**Offices stated by the company** - Bengaluru, Karnataka - Bhubaneswar,
Odisha - Paradip, Odisha

**Mining districts stated by the company** - Keonjhar, Odisha -
Sundargarh, Odisha - Jajpur, Odisha - Mayurbhanj, Odisha

**Construction location stated by the company** - Paradip, Odisha

Exact addresses, mine/site names, commodities, project scopes, and
operating status must be confirmed before they are published.

## 3. Brand and design direction

The website should feel like the digital presence of a serious,
multi-sector industrial group.

### Brand characteristics

-   Confident and professional
-   Industrial and modern
-   Reliable and safety-conscious
-   Clear, factual, and understated
-   Rooted in Odisha with a wider business outlook

### Visual direction

Use a premium industrial-corporate style:

  Role           Colour            Hex
  -------------- ----------------- -----------
  Primary        Deep navy         `#10243A`
  Secondary      Graphite          `#29343D`
  Accent         Industrial gold   `#D6A64F`
  Background     Warm off-white    `#F5F6F4`
  Surface        White             `#FFFFFF`
  Body text      Slate             `#536170`
  Dark section   Near-black navy   `#0A1724`

Suggested typography: - Headings: Manrope or Plus Jakarta Sans - Body:
Inter

The approved company logo and official brand assets take precedence over
temporary design choices.

## 4. Technology

**Selected frontend:** React\
**Styling:** Tailwind CSS\
**Language:** JavaScript initially; TypeScript can be adopted if
preferred during implementation.

The final choices for build tooling, routing, form handling, hosting,
analytics, and backend services will be recorded in
`technical-architecture.md`.

Recommended implementation principles:

-   Component-based architecture
-   Reusable layouts and UI components
-   Mobile-first responsive design
-   Accessible semantic HTML
-   Optimised image delivery
-   Minimal dependencies
-   Secure server-side handling for enquiries
-   Environment variables for configuration and secrets

Do not put API keys, credentials, SMTP passwords, or other secrets in
frontend code or commit them to Git.

## 5. Website pages

Proposed primary navigation:

-   Home
-   About Us
-   Businesses
    -   Mining
    -   Construction
    -   Manufacturing
    -   Transportation
    -   Industrial Training
-   Projects & Operations
-   Community (Maa Kalarai Charitable Trust)
-   Locations
-   Careers
-   Contact

The header should include a prominent **Business Enquiry** call to
action.

See `website-structure.md` for the detailed sitemap and page hierarchy.

## 6. Repository structure

The project is scaffolded with Vite 8, React 19, React Router 7, and
Tailwind CSS 4 (via `@tailwindcss/vite`, with no `tailwind.config.js`).
Design tokens live in `src/styles/index.css` under `@theme`.
Animation uses Motion for React, configured centrally in
`src/lib/motion.js`. See `docs/experience.md`.

``` text
phakirsharda/
├── public/
│   ├── favicon.ico          # 16/32/48 px, cropped to the logo's globe for legibility
│   ├── site.webmanifest
│   ├── images/              # Photography, one folder per section
│   │   ├── og-image.jpg     # 1200×630 social share image
│   │   ├── hero/  mining/  construction/  manufacturing/
│   │   ├── transportation/  training/  community/
│   │   │                    # each holds placeholder.svg until approved photos arrive
│   │   └── placeholders/    # Temporary stock only, never shown as company assets
│   └── icons/
│       ├── favicon-16.png  favicon-32.png  apple-touch-icon.png
│       ├── icon-192.png  icon-512.png  icon-maskable-512.png
│       └── mining.svg  construction.svg  manufacturing.svg
│           transportation.svg  industrial-training.svg  community.svg
├── scripts/
│   └── generate-assets.py   # Regenerates icons/OG/placeholders from the logo (needs Pillow)
├── design-assets/
│   └── photos/              # Original, unprocessed photos (not served). Web versions are
│                            # cropped/resized WebP files in public/images/<section>/
├── src/
│   ├── assets/
│   │   └── brand/
│   │       ├── phakir-sarada-logo.jpeg       # Company logo (official)
│   │       └── maa-kalarai-trust-logo.webp   # Trust logo (official)
│   ├── components/
│   │   ├── common/          # Container, Button, PageHeader, ContentPending
│   │   ├── layout/          # Layout, Header, Footer, ScrollToTop
│   │   └── sections/        # Homepage / page sections (to be built)
│   ├── pages/
│   │   ├── businesses/      # Businesses index + BusinessPage (all 5 verticals by slug)
│   │   ├── Home.jsx  About.jsx  Projects.jsx  Community.jsx
│   │   ├── Locations.jsx  Careers.jsx  Contact.jsx  Privacy.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── site.js          # Company, trust, offices, districts, enquiry categories
│   │   ├── businesses.js    # The five verticals (copy, locations, photos, pending items)
│   │   ├── projects.js      # Projects & operations cards
│   │   └── navigation.js    # Main nav (built from businesses.js)
│   ├── hooks/usePageMeta.js # Per-page <title> and meta description
│   ├── styles/index.css     # Tailwind import, @theme tokens, base styles
│   ├── utils/
│   ├── App.jsx              # Routes
│   └── main.jsx             # Entry (BrowserRouter)
├── docs/
│   ├── design.md            # (exists)
│   ├── brand-guidelines.md
│   ├── website-structure.md
│   ├── homepage.md
│   ├── about-us.md
│   ├── business-verticals.md
│   ├── industrial-training.md
│   ├── charitable-trust.md
│   ├── locations.md
│   ├── projects.md
│   ├── components.md
│   ├── technical-architecture.md
│   ├── seo.md
│   ├── content-guidelines.md
│   ├── deployment.md
│   └── future-roadmap.md
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── vercel.json              # SPA fallback for Vercel (public/_redirects covers Netlify)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Project documentation lives in `docs/`. The other files listed under
`docs/` will be written as the project progresses.

**Routes:** `/`, `/about`, `/businesses`, `/businesses/:slug`
(`mining`, `construction`, `manufacturing`, `transportation`,
`industrial-training`), `/projects`, `/community`, `/locations`,
`/careers`, `/contact`, `/privacy`, and a 404 page for everything else.

**Content rule in code:** all company facts come from `src/data/`.
Unverified items are `null` or `[]` and marked `TBC`. Pages show a
visible `ContentPending` block where approved content is missing, and
every one of these must be gone before launch.

## 7. Getting started

These instructions assume Node.js and npm are installed.

### Install

``` bash
npm install
```

### Lint

``` bash
npm run lint
```

### Run locally

``` bash
npm run dev
```

Open the local URL printed by Vite in the terminal.

### Build for production

``` bash
npm run build
```

### Preview the production build locally

``` bash
npm run preview
```

## 8. Content and asset requirements

Before launch, collect and approve:

-   Official logos in SVG (vector) format. The company logo is
    currently a 1280×1280 JPEG on white and the trust logo a 350×100
    WebP, and both need vector versions for sharp display and favicons.
-   Official domain name and DNS access
-   Verified office addresses, phone numbers, and email addresses
-   Approved company profile, mission, vision, and values
-   Exact mining site names, commodities, and operating status
-   Paradip construction project name, scope, and approved project
    details
-   Manufacturing product categories and facility information
-   Transportation services and any approved fleet information
-   Industrial training programme details, centre location(s), and any
    accreditation or certification documents
-   Maa Kalarai Charitable Trust registration details, focus areas,
    initiatives, contact details, logo (if separate), and approved
    photographs with consent from the people shown
-   Approved project and facility photographs
-   Relevant licences, permits, clearances, and certifications, where
    applicable
-   Leadership profiles, client references, and testimonials, only where
    approved

Use temporary stock images only as clearly understood placeholders.
Never imply that stock photography depicts the company's actual assets
or projects.

## 9. Enquiry handling

The website should support clearly categorised enquiries:

-   Mining
-   Construction
-   Manufacturing
-   Transportation and logistics
-   Industrial training
-   Vendor or supplier registration
-   Business partnership
-   Charitable trust / community partnership
-   Careers
-   General enquiry

Do not accept online donations until the trust's legal status, bank
details, receipting process, and any tax-exemption status have been
confirmed and reviewed.

The form should validate inputs, include spam protection, show success
and error states, and send submissions to a company-controlled
destination. The final destination and privacy notice must be agreed
before launch.

**Current implementation:** `src/pages/Contact.jsx` validates on the
client, includes a honeypot field and a consent checkbox, and POSTs JSON
to `VITE_ENQUIRY_ENDPOINT` (set in `.env`). It works with Formspree,
Web3Forms or a serverless function. Until the variable is set, nothing
is sent and the form says so. The receiving service must validate on the
server and apply spam protection.

## 10. SEO and performance

Launch requirements include:

-   Unique page titles and meta descriptions
-   Descriptive page URLs
-   Sitemap and `robots.txt`
-   Canonical URLs
-   Open Graph metadata
-   Descriptive image alt text
-   Organisation structured data using verified details
-   Responsive and compressed images
-   Lazy loading for below-the-fold images
-   HTTPS
-   Performance and accessibility checks
-   Analytics configured only after privacy requirements are reviewed

## 11. Security and privacy

-   Never commit `.env` files or secrets.
-   Validate enquiry form data on the server.
-   Use HTTPS for all production traffic.
-   Apply spam and abuse protection to public forms.
-   Collect only information required to respond to an enquiry.
-   Publish an appropriate privacy notice.
-   Restrict access to hosting, DNS, analytics, and enquiry systems to
    authorised personnel.

## 12. Development workflow

Recommended delivery sequence:

1.  Confirm company facts, brand assets, domain, and content owners.
2.  Finalise the sitemap and page-level content.
3.  Establish the React and Tailwind project.
4.  Build shared header, navigation, footer, and design tokens.
5.  Develop the homepage.
6.  Develop the About and business vertical pages, including
    Industrial Training.
7.  Add projects, community (charitable trust), locations, careers, and
    contact pages.
8.  Implement and test enquiry handling.
9.  Complete SEO, accessibility, and performance work.
10. Test on mobile, tablet, and desktop.
11. Deploy to the approved domain.
12. Verify production forms, redirects, analytics, and SSL.

## 13. Documentation index

  -----------------------------------------------------------------------
  Document                            Responsibility
  ----------------------------------- -----------------------------------
  `design.md`                         Overall visual and experience
                                      specification

  `experience.md`                     Implemented homepage story, motion
                                      system, performance and remaining
                                      content needs

  `brand-guidelines.md`               Logo usage, colours, typography,
                                      and brand rules

  `website-structure.md`              Sitemap, navigation, and page
                                      hierarchy

  `homepage.md`                       Homepage sections, copy direction,
                                      and interactions

  `about-us.md`                       Company overview, mission, vision,
                                      and values

  `business-verticals.md`             Content requirements for all five
                                      business areas

  `industrial-training.md`            Training programmes, eligibility,
                                      centres, and claims rules

  `charitable-trust.md`               Maa Kalarai Charitable Trust
                                      content, consent, and donation
                                      rules

  `locations.md`                      Offices, mining districts, and
                                      operating locations

  `projects.md`                       Project portfolio structure and
                                      publishing rules

  `components.md`                     Reusable React components and UI
                                      behaviour

  `technical-architecture.md`         Frontend, backend, integrations,
                                      and data flow

  `seo.md`                            Search metadata and technical SEO

  `content-guidelines.md`             Content standards, factual checks,
                                      and image rules

  `deployment.md`                     Domain, hosting, environment, and
                                      release process

  `future-roadmap.md`                 Post-launch enhancements
  -----------------------------------------------------------------------

## 14. Definition of done

The website is ready for launch when:

-   All pages and navigation work.
-   All public company information has been verified and approved.
-   No placeholder copy or unapproved stock imagery is presented as
    company fact.
-   The site works across supported mobile and desktop sizes.
-   Enquiry forms have been tested end-to-end.
-   Accessibility, SEO, security, and performance checks are complete.
-   The production domain, HTTPS, redirects, and monitoring are
    verified.
-   The company has approved the final website.

------------------------------------------------------------------------

**Project principle:** One strong parent-company identity, five clearly
presented business verticals, a respectful presentation of the Maa
Kalarai Charitable Trust, and factual evidence behind every claim.
