// Current clients, as supplied by the company (Nov 2026).
// - `about` is a short, general description of the client company. Verify each before launch.
// - `scope` (the work we do for them) is null until the company confirms it. Never invent it.
// - No client logos: they are trademarks and need the client's permission (docs/design.md §14).

export const clients = [
  {
    id: 'lt-geo',
    name: 'L&T Geo',
    sector: 'Ground engineering & foundations',
    about: 'Part of Larsen & Toubro, one of India’s largest engineering and construction groups.',
    scope: null,
  },
  {
    id: 'spml',
    name: 'SPML Infra Limited',
    sector: 'Water, power & infrastructure',
    about: 'An Indian infrastructure development company working in water, power and urban infrastructure projects.',
    scope: null,
  },
  {
    id: 'megha',
    name: 'Megha Engineering',
    sector: 'Infrastructure, irrigation & energy',
    about: 'Megha Engineering & Infrastructures Limited (MEIL), an Indian infrastructure company active in irrigation, energy and transport projects.',
    scope: null,
  },
  {
    id: 'aquasub',
    name: 'Aquasub Engineering',
    sector: 'Engineering',
    about: null, // TBC: company description
    scope: null,
  },
  {
    id: 'aashirwad',
    name: 'Aashirwad Builders and Developers',
    sector: 'Real estate & construction',
    about: null, // TBC: company description
    scope: null,
  },
]

// Two-letter monogram for the name tile, e.g. "SPML Infra Limited" -> "SI", "L&T Geo" -> "LG".
export const monogram = (name) =>
  name
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !/^(and|limited|ltd|private|pvt)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
