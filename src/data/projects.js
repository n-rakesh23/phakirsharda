import { miningDistricts } from './site'

// Projects & operations. Only location + sector are confirmed today. Names, clients, scope,
// values and photographs require company approval (and client permission) — docs/design.md §6, §14.
// status: 'details-pending' | 'ongoing' | 'completed'

export const projects = [
  {
    id: 'paradip-construction',
    title: 'Construction at Paradip',
    sector: 'construction',
    location: 'Paradip, Odisha',
    status: 'details-pending',
    description: 'Construction work in Paradip, Odisha. Full details will be published once approved.',
  },
  ...miningDistricts.map((d) => ({
    id: `mining-${d.toLowerCase()}`,
    title: `Mining operations, ${d}`,
    sector: 'mining',
    location: `${d}, Odisha`,
    status: 'details-pending',
    description: `Mining operations in ${d} district. Site details will be published once approved.`,
  })),
]

export const statusLabel = {
  'details-pending': 'Details to be published',
  ongoing: 'Ongoing',
  completed: 'Completed',
}
