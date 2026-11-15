import { constructionLocations, miningDistricts } from './site'

// The five business verticals.
// - `image`   branded placeholder (public/images/<folder>/placeholder.svg)
// - `photo`   real imagery; `representative: true` = illustrative (stock/AI), not the company's own
//             site, and is labelled on the page (docs/design.md §7, §14)
// - `pending` facts the company must supply before launch; rendered as "to be confirmed" blocks
// Copy is deliberately factual: only what the company has stated.

export const businesses = [
  {
    slug: 'mining',
    name: 'Mining',
    summary: 'Mining operations across Keonjhar, Sundargarh, Jajpur and Mayurbhanj districts of Odisha.',
    intro:
      'Mining is one of the core businesses of Phakir Sarada Private Limited, with operations in four districts of Odisha.',
    locationsTitle: 'Mining districts, Odisha',
    locations: miningDistricts,
    enquiryCategory: 'Mining',
    pending: ['Commodities mined', 'Mine or site names in each district', 'Capabilities and equipment', 'Safety and compliance statements'],
    icon: '/icons/mining.svg',
    image: '/images/mining/placeholder.svg',
    photo: { src: '/images/mining/mining-open-pit.webp', srcSmall: '/images/mining/mining-open-pit-800.webp', width: 1200, alt: 'Excavators and haul trucks working in an open-pit mine', representative: true, avif: true },
  },
  {
    slug: 'construction',
    name: 'Construction',
    summary: 'Construction activity, including work at Paradip, Odisha.',
    intro:
      'Our construction business operates through our subsidiary, Suntech Infra Consultancy Private Limited, from its office in Paradip, Jagatsinghpur district, Odisha.',
    subsidiary: 'suntech',
    locationsTitle: 'Construction locations',
    locations: constructionLocations,
    enquiryCategory: 'Construction',
    pending: ['Paradip project name, scope and status', 'Client permission to publish', 'Types of construction work undertaken', 'Project photographs'],
    icon: '/icons/construction.svg',
    image: '/images/construction/placeholder.svg',
    photo: { src: '/images/construction/construction-steel-frame.webp', srcSmall: '/images/construction/construction-steel-frame-800.webp', width: 1600, alt: 'Cranes lifting steel trusses on a large industrial construction site', representative: true, avif: true },
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Manufacturing operations serving industrial customers.',
    intro: 'Our manufacturing business is part of the group alongside mining, construction, transportation and training.',
    locationsTitle: null,
    locations: [],
    enquiryCategory: 'Manufacturing',
    pending: ['Product categories', 'Facility location and details', 'Processes and quality approach'],
    icon: '/icons/manufacturing.svg',
    image: '/images/manufacturing/placeholder.svg',
    photo: { src: '/images/manufacturing/manufacturing-floor.webp', srcSmall: '/images/manufacturing/manufacturing-floor-800.webp', width: 1000, alt: 'Automated machinery on a modern factory floor', representative: true, avif: true },
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    summary: 'Transportation and logistics services for the movement of materials and goods.',
    intro: 'Our transportation and logistics business moves materials and goods.',
    locationsTitle: null,
    locations: [],
    enquiryCategory: 'Transportation and logistics',
    pending: ['Services offered', 'Coverage area', 'Fleet details (only if approved for publication)'],
    icon: '/icons/transportation.svg',
    image: '/images/transportation/placeholder.svg',
    // Source is only 395px wide (2x upscaled to 790px). Replace with a larger original when available.
    photo: { src: '/images/transportation/truck-fleet.webp', width: 790, alt: 'A row of trucks parked at a loading yard', representative: true, avif: true },
  },
  {
    slug: 'industrial-training',
    name: 'Industrial Training',
    summary: 'Industrial skill development in data, cloud computing and IT infrastructure.',
    tagline: 'Empowering the next generation of AI innovators.',
    hideHeroTitle: true, // visible headline is the tagline; the name stays as an sr-only <h1>
    intro:
      'We run job-focused skill development programmes in data engineering, data science, data analysis, cloud computing and QA testing, and VMware, Windows and Red Hat Linux administration.',
    locationsTitle: 'Training centres',
    locations: [],
    enquiryCategory: 'Industrial training',
    pending: [
      'Duration and batch schedule for each programme',
      'Eligibility and how to apply',
      'Training centre location(s)',
      'Fees (if published)',
      'Certificates issued, and any accreditation (only if documented)',
    ],
    icon: '/icons/industrial-training.svg',
    image: '/images/training/placeholder.svg',
    photo: null,
    // Programme badge supplied by the company (black background, 3:2).
    logo: {
      src: '/images/training/industrial-knowledge-transfer.webp',
      srcSmall: '/images/training/industrial-knowledge-transfer-768.webp',
      width: 1200,
      smallWidth: 768,
      avif: true,
      alt: 'Industrial Knowledge Transfer badge: Data Engineering, Data Science, Data Analyst, Cloud Computing & Testing, VMware Administration, Windows Administration and Red Hat Linux Administration',
    },
  },
]

export const getBusiness = (slug) => businesses.find((b) => b.slug === slug)
