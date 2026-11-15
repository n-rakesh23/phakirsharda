// Leadership profiles. Add people only with their consent and approved text (docs/design.md §14).
// `featured: true` renders the large founder layout; everyone else appears in the team grid.
// Quotes for the team were drafted for the company: each person must approve their quote before launch.

const photo = (slug) => ({
  src: `/images/leadership/${slug}.webp`,
  srcSmall: `/images/leadership/${slug}-360.webp`,
  width: 640,
  height: 800,
})

export const leadership = [
  {
    id: 'phakir-charan-swain',
    featured: true,
    name: 'Phakir Charan Swain',
    role: 'Director & Founder',
    photo: photo('phakir-charan-swain'),
    qualities: ['Visionary', 'Optimist', 'Philanthropist'],
    bio: [
      'Phakir Charan Swain is the Director and Founder of Phakir Sarada Private Limited.',
      'A visionary and an optimist, he believes in giving back to the community as a philanthropist.',
    ],
    // Bhagavad Gita 2.47 on duty and work; shown as guiding words, not as his own quote.
    guidingWords: {
      original: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: 'Karmaṇy-evādhikāras te mā phaleṣhu kadāchana',
      translation:
        'You have a right to perform your duty, but never to its fruits. Let not the results be your motive, nor let yourself be attached to inaction.',
      source: 'Bhagavad Gita, 2.47',
    },
  },
  {
    id: 'sarbeshwar-baliyarsingh',
    name: 'Sarbeshwar Baliyarsingh',
    role: 'Leadership Team', // TBC: exact title
    photo: photo('sarbeshwar-baliyarsingh'),
    quote: 'Good work is built on discipline: plan carefully, keep people safe, and deliver what we promise.',
  },
  {
    id: 'ullash-swain',
    name: 'Ullash Swain',
    role: 'Leadership Team', // TBC: exact title
    photo: photo('ullash-swain'),
    quote: 'Every project is a commitment. We honour it with hard work, honesty and respect for the people we work with.',
  },
  {
    id: 'trilochan-swain',
    name: 'Trilochan Swain',
    role: 'Leadership Team', // TBC: exact title
    photo: photo('trilochan-swain'),
    quote: 'Do the work right the first time, and do it right every time.',
  },
]
