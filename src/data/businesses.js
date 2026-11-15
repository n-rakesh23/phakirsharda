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
    photo: { src: '/images/mining/mining-open-pit.webp', srcSmall: '/images/mining/mining-open-pit-800.webp', width: 1200, alt: 'Excavators and haul trucks working in an open-pit mine', representative: true },
  },
  {
    slug: 'construction',
    name: 'Construction',
    summary: 'Construction activity, including work at Paradip, Odisha.',
    intro: 'Our construction business is active in Paradip, Odisha, where the company also has an office.',
    locationsTitle: 'Construction locations',
    locations: constructionLocations,
    enquiryCategory: 'Construction',
    pending: ['Paradip project name, scope and status', 'Client permission to publish', 'Types of construction work undertaken', 'Project photographs'],
    icon: '/icons/construction.svg',
    image: '/images/construction/placeholder.svg',
    photo: { src: '/images/construction/construction-steel-frame.webp', srcSmall: '/images/construction/construction-steel-frame-800.webp', width: 1600, alt: 'Cranes lifting steel trusses on a large industrial construction site', representative: true },
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
    photo: { src: '/images/manufacturing/manufacturing-floor.webp', srcSmall: '/images/manufacturing/manufacturing-floor-800.webp', width: 1000, alt: 'Automated machinery on a modern factory floor', representative: true },
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
    photo: null,
  },
  {
    slug: 'industrial-training',
    name: 'Industrial Training',
    summary: 'Industrial skills training that helps prepare people for work in industry.',
    intro: 'Through industrial training, we help build the skilled workforce that industry depends on.',
    locationsTitle: 'Training centres',
    locations: [],
    enquiryCategory: 'Industrial training',
    pending: [
      'Programmes and trades or skills covered',
      'Who can apply, eligibility and duration',
      'Training centre location(s)',
      'Fees (if published)',
      'Accreditation or certificates (only if documented)',
    ],
    icon: '/icons/industrial-training.svg',
    image: '/images/training/placeholder.svg',
    photo: null,
  },
]

export const getBusiness = (slug) => businesses.find((b) => b.slug === slug)
