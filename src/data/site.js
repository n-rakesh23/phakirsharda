// Single source of truth for company facts.
// Anything marked TBC must be verified and approved before launch (docs/design.md §14).

export const company = {
  legalName: 'Phakir Sarada Private Limited',
  shortName: 'Phakir Sarada',
  country: 'India',
  tagline: 'Building resources. Moving progress. Delivering with purpose.', // proposed, not approved
  email: null, // TBC
  phone: null, // TBC
}

export const trust = {
  name: 'Maakalarai Charitable Trust', // spelling as shown on the trust logo
  tagline: 'Serving Humanity with Compassion', // from the trust logo
  focusAreas: [], // TBC
  email: null, // TBC
  acceptsOnlineDonations: false, // keep false until legal/receipting review
}

export const offices = [
  { city: 'Bengaluru', state: 'Karnataka', address: null, phone: null, email: null },
  { city: 'Bhubaneswar', state: 'Odisha', address: null, phone: null, email: null },
  { city: 'Paradip', state: 'Odisha', address: null, phone: null, email: null },
]

export const miningDistricts = ['Keonjhar', 'Sundargarh', 'Jajpur', 'Mayurbhanj']

export const constructionLocations = ['Paradip']

export const trainingCentres = [] // TBC

export const enquiryCategories = [
  'Mining',
  'Construction',
  'Manufacturing',
  'Transportation and logistics',
  'Industrial training',
  'Vendor or supplier registration',
  'Business partnership',
  'Charitable trust / community partnership',
  'Careers',
  'General enquiry',
]
