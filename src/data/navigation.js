import { businesses } from './businesses'

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Businesses',
    to: '/businesses',
    children: businesses.map((b) => ({ label: b.name, to: `/businesses/${b.slug}` })),
  },
  { label: 'Projects & Operations', to: '/projects' },
  { label: 'Community', to: '/community' },
  { label: 'Locations', to: '/locations' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
