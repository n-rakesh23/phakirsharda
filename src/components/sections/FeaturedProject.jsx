import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

// Only the location and sector are confirmed. Project name, client, scope and photos
// require company approval (docs/design.md §6, §14) before they appear here.
export default function FeaturedProject() {
  return (
    <section className="py-[clamp(4rem,9vw,8rem)]">
      <Container>
        <SectionHeading eyebrow="Projects & operations" title="Work on the ground." />
        <Reveal className="mt-14">
          <article className="grid overflow-hidden rounded-xl bg-white shadow-card lg:grid-cols-2">
            <img
              src="/images/construction/placeholder.svg"
              alt="Construction — placeholder image"
              width="1600"
              height="900"
              loading="lazy"
              className="aspect-video h-full w-full object-cover lg:aspect-auto"
            />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.15em]">
                <span className="rounded-full bg-navy px-3 py-1 text-white">Construction</span>
                <span className="rounded-full border border-slate/30 px-3 py-1 text-graphite">Paradip, Odisha</span>
              </div>
              <h3 className="mt-6 text-3xl font-extrabold">Construction at Paradip</h3>
              <p className="mt-4 leading-relaxed">
                Our construction work in Paradip, Odisha. Full project details will be published here once
                they are approved.
              </p>
              <Link
                to="/projects"
                className="mt-8 inline-block self-start font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
              >
                All projects & operations
              </Link>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  )
}
