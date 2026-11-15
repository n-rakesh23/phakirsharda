import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { businesses } from '../../data/businesses'

// Bento layout: first item (Mining) is the large feature tile on desktop.
const spans = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
]

export default function BusinessesBento() {
  return (
    <section className="py-[clamp(4rem,9vw,8rem)]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our businesses"
            title="Five businesses. One group."
            intro="Each business runs on its own expertise, under one parent company and one standard of delivery."
          />
          <Link to="/businesses" className="shrink-0 font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
            View all businesses
          </Link>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(15rem,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80} className={spans[i]}>
              <Link
                to={`/businesses/${b.slug}`}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-xl bg-navy p-7 text-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                {b.photo ? (
                  <img
                    src={b.photo}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 -top-6 h-48 w-48 bg-gold opacity-[0.14] transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110"
                    style={{ mask: `url(${b.icon}) center / contain no-repeat`, WebkitMask: `url(${b.icon}) center / contain no-repeat` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" aria-hidden="true" />
                <div className="relative">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <img src={b.icon} alt="" width="28" height="28" className="h-7 w-7" />
                  </span>
                  <h3 className={`font-extrabold text-white ${i === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{b.name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{b.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Learn more
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={businesses.length * 80} className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/contact"
              className="group flex h-full flex-col justify-end rounded-xl border border-navy/15 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Not sure who to talk to?</p>
              <h3 className="mt-3 text-2xl font-extrabold">Tell us what you need.</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed">
                Send one enquiry and we will pass it to the right business.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Make an enquiry
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
