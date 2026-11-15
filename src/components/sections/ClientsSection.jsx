import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { clients, monogram } from '../../data/clients'

// "Our clients" grid for the Projects & Operations page.
export default function ClientsSection() {
  return (
    <section aria-label="Our clients" className="bg-white py-[clamp(4rem,8vw,7rem)]">
      <Container>
        <div>
          <SectionHeading
            eyebrow="Our clients"
            title="Our current clients."
            intro="Organisations across infrastructure, engineering and construction that we currently work with."
          />
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-offwhite/60 p-7 transition duration-300 ease-smooth hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-card-hover">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy font-heading text-lg font-extrabold tracking-wide text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink"
                  >
                    {monogram(c.name)}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold leading-tight">{c.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">{c.sector}</p>
                  </div>
                </div>
                {c.about && <p className="mt-5 flex-1 leading-relaxed">{c.about}</p>}
                {!c.about && <div className="flex-1" />}
                <dl className="mt-6 border-t border-navy/10 pt-4 text-sm">
                  <dt className="font-semibold text-graphite">Our work with them</dt>
                  <dd className="mt-1">{c.scope ?? 'Details to be published.'}</dd>
                </dl>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
