import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { constructionLocations, miningDistricts, offices } from '../../data/site'

function Marker({ tone }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${tone === 'office' ? 'bg-gold' : 'border-2 border-brand-teal'}`}
    />
  )
}

export default function Footprint() {
  return (
    <section className="relative overflow-hidden bg-ink py-[clamp(4rem,9vw,8rem)] text-white">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Our footprint"
          title="Offices and operations."
          intro="Our offices are where to reach us. Our operating locations are where the work happens."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 lg:grid-cols-2">
          <Reveal className="bg-ink p-8 sm:p-10">
            <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              <Marker tone="office" /> Offices
            </h3>
            <ul className="mt-8 divide-y divide-white/10">
              {offices.map((o) => (
                <li key={o.city} className="flex items-baseline justify-between gap-4 py-5">
                  <span className="font-heading text-2xl font-bold text-white">{o.city}</span>
                  <span className="text-sm text-white/55">{o.state}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="bg-ink p-8 sm:p-10" delay={120}>
            <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              <Marker tone="ops" /> Operating locations · Odisha
            </h3>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Mining districts</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {miningDistricts.map((d) => (
                  <li key={d} className="rounded-lg border border-white/10 px-4 py-3 font-heading text-lg font-semibold text-white">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/50">Construction</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {constructionLocations.map((c) => (
                  <li key={c} className="rounded-lg border border-white/10 px-4 py-3 font-heading text-lg font-semibold text-white">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Link to="/locations" className="mt-10 inline-block font-semibold text-gold underline decoration-2 underline-offset-8 hover:text-white">
          See all locations
        </Link>
      </Container>
    </section>
  )
}
