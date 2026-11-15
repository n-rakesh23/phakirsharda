// Google Maps search link for an office from src/data/site.js.
export const mapLink = (o) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.address}, India`)}`
