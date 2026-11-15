import HeroCinematic from '../components/sections/HeroCinematic'
import AtAGlance from '../components/sections/AtAGlance'
import Divisions from '../components/sections/Divisions'
import AboutIntro from '../components/sections/AboutIntro'
import FootprintMap from '../components/sections/FootprintMap'
import ProjectsShowcase from '../components/sections/ProjectsShowcase'
import CommunityTeaser from '../components/sections/CommunityTeaser'
import ClosingCTA from '../components/sections/ClosingCTA'
import usePageMeta from '../hooks/usePageMeta'

// Homepage scroll story (docs/experience.md):
// A hero → B at a glance → C divisions → D about → E footprint → F projects → G community → H enquiry.
// No "safety" or impact claims until the company supplies implemented, approved initiatives.
export default function Home() {
  usePageMeta(
    null,
    'Phakir Sarada Private Limited: mining, construction, manufacturing, transportation and industrial skill development, rooted in Odisha.',
  )
  return (
    <>
      <HeroCinematic />
      <AtAGlance />
      <Divisions />
      <AboutIntro />
      <FootprintMap />
      <ProjectsShowcase />
      <CommunityTeaser />
      <ClosingCTA />
    </>
  )
}
