// Indicative map data for the footprint section.
// Coordinates are the PUBLIC, approximate positions of office towns and district headquarters
// (rounded to ~0.01°). They do NOT represent mine, lease or project sites (docs/design.md §6).

export const mapBounds = { west: 83.5, east: 87.6, north: 22.6, south: 19.0 } // Odisha window

export const mapPoints = [
  { id: 'bhubaneswar', name: 'Bhubaneswar', kind: 'office', lat: 20.3, lon: 85.82, label: 'left' },
  { id: 'jagatsinghpur', name: 'Jagatsinghpur', kind: 'office', lat: 20.26, lon: 86.17, label: 'below' },
  { id: 'paradip', name: 'Paradip', kind: 'construction', office: true, lat: 20.32, lon: 86.61, label: 'right' },
  { id: 'keonjhar', name: 'Keonjhar', kind: 'mining', lat: 21.63, lon: 85.58, label: 'right' },
  { id: 'sundargarh', name: 'Sundargarh', kind: 'mining', lat: 22.12, lon: 84.03, label: 'right' },
  { id: 'jajpur', name: 'Jajpur', kind: 'mining', lat: 20.85, lon: 86.33, label: 'right' },
  { id: 'mayurbhanj', name: 'Mayurbhanj', kind: 'mining', lat: 21.94, lon: 86.72, label: 'left' },
]

// Simplified Odisha coastline, north to south (approximate public reference points:
// Bhograi, Chandipur, Dhamra, Paradip, Konark, Puri, Chilika mouth, Gopalpur, Sonepur).
export const coastline = [
  [87.5, 21.6], [87.05, 21.45], [86.98, 20.8], [86.68, 20.27], [86.1, 19.88],
  [85.83, 19.8], [85.4, 19.7], [84.91, 19.26], [84.75, 19.05],
]
