// Single source of truth for company facts.
// Anything marked TBC must be verified and approved before launch (docs/design.md §14).

export const company = {
  legalName: 'Phakir Sarada Private Limited',
  shortName: 'Phakir Sarada',
  country: 'India',
  tagline: 'Empowering Lives. Igniting Futures.', // approved by the company (Nov 2026)
  email: 'info@phakirsarada.com',
  phone: '+91 88957 26640', // display format
  phoneHref: 'tel:+918895726640',
}

// Group companies. The construction business operates through this subsidiary.
export const subsidiaries = [
  {
    id: 'suntech',
    name: 'Suntech Infra Consultancy Private Limited',
    shortName: 'Suntech Infra Consultancy',
    business: 'construction',
    officeId: 'paradip',
  },
]

export const trust = {
  name: 'Maakalarai Charitable Trust', // spelling as shown on the trust logo
  tagline: 'Serving Humanity with Compassion', // from the trust logo
  website: 'https://maakalaraicharitabletrust.com/',
  focusAreas: [], // TBC
  email: null, // TBC
  acceptsOnlineDonations: false, // keep false until legal/receipting review
}

// Office addresses as supplied by the company (Nov 2026). Phone/email still TBC.
// `addressLines` is for display; `address` (single line) is used for map links and structured data.
const office = (o) => ({ ...o, address: o.addressLines.join(', ') })

export const offices = [
  office({
    id: 'bengaluru',
    label: 'Corporate Office',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560043',
    addressLines: ['#4, 3rd Floor, Kalkere, Hormavu', 'Bangalore 560043, Karnataka'],
    phone: null,
    email: null,
  }),
  office({
    id: 'bhubaneswar',
    label: 'Office',
    city: 'Bhubaneswar',
    state: 'Odisha',
    postalCode: '751006',
    addressLines: ['Plot No. 67/3984, Holy Street 7, Lane 5', 'Jharpada, Laxmi Sagar', 'Bhubaneswar 751006, Odisha'],
    phone: null,
    email: null,
  }),
  office({
    id: 'jagatsinghpur',
    label: 'Office',
    city: 'Jagatsinghpur',
    state: 'Odisha',
    postalCode: '754141',
    addressLines: ['At/PO: Nuagaon, PS: Abhayachandpur', 'District: Jagatsinghpur', 'Odisha 754141'],
    phone: null,
    email: null,
  }),
  office({
    id: 'paradip',
    label: 'Construction Office',
    entity: 'Suntech Infra Consultancy Private Limited', // construction subsidiary
    city: 'Paradip',
    state: 'Odisha',
    postalCode: '754120',
    addressLines: ['Plot No. 472, Khata No. 19, Tarenigada', 'PO: Atharbanki, Jagatsinghpur', 'Odisha 754120'],
    phone: null,
    email: null,
  }),
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
