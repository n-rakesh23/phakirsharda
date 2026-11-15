import Hero from '../components/sections/Hero'
import BusinessesBento from '../components/sections/BusinessesBento'
import Overview from '../components/sections/Overview'
import Footprint from '../components/sections/Footprint'
import FeaturedProject from '../components/sections/FeaturedProject'
import WhyUs from '../components/sections/WhyUs'
import CommunityTeaser from '../components/sections/CommunityTeaser'
import EnquiryCTA from '../components/sections/EnquiryCTA'
import usePageMeta from '../hooks/usePageMeta'

// Homepage sequence per docs/design.md §8. The "Safety and responsibility" section is
// intentionally omitted until the company supplies policies that are actually implemented.
export default function Home() {
  usePageMeta(
    null,
    'Phakir Sarada Private Limited: mining, construction, manufacturing, transportation and industrial training, rooted in Odisha.',
  )
  return (
    <>
      <Hero />
      <BusinessesBento />
      <Overview />
      <Footprint />
      <FeaturedProject />
      <WhyUs />
      <CommunityTeaser />
      <EnquiryCTA />
    </>
  )
}
