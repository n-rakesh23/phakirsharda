import Container from '../common/Container'
import Button from '../common/Button'
import Contours from '../common/Contours'
import { businesses } from '../../data/businesses'
import { company, miningDistricts, offices } from '../../data/site'

const facts = [
  { value: businesses.length, label: 'Business verticals' },
  { value: offices.length, label: 'Offices across India' },
  { value: miningDistricts.length, label: 'Mining districts in Odisha' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Contours className="text-gold" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-teal/20 blur-3xl"
      />
      <Container className="relative pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pt-36">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          {company.legalName}
        </p>
        <h1 className="max-w-5xl font-heading text-display-xl font-extrabold text-white">
          Building resources.
          <br />
          Moving <span className="text-gold">progress.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Mining, construction, manufacturing, transportation and industrial training, rooted in
          Odisha and working across India.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/businesses">Explore our businesses</Button>
          <Button to="/contact" variant="secondary">
            Business Enquiry
          </Button>
        </div>

        <dl className="mt-20 grid grid-cols-3 border-t border-white/15 sm:mt-28">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col border-r border-white/15 py-6 pr-4 last:border-r-0 sm:py-8 [&:not(:first-child)]:pl-4 sm:[&:not(:first-child)]:pl-8">
              <dt className="order-2 mt-2 text-xs text-white/60 sm:text-sm">{f.label}</dt>
              <dd className="order-1 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                {String(f.value).padStart(2, '0')}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
