import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import EnquiryBand from '../components/sections/EnquiryBand'
import usePageMeta from '../hooks/usePageMeta'
import TrustLink from '../components/common/TrustLink'
import OfficeAddress from '../components/common/OfficeAddress'
import { mapLink } from '../utils/maps'
import ContactLinks from '../components/common/ContactLinks'
import { company, constructionLocations, miningDistricts, offices, trainingCentres } from '../data/site'


function Group({ title, kind, items, empty }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
        <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-full ${kind === 'office' ? 'bg-gold' : 'border-2 border-brand-teal'}`} />
        {title}
      </h3>
      {items.length ? (
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((i, n) => (
            <Reveal as="li" key={i} delay={n * 70} className="rounded-lg border border-navy/10 bg-white px-4 py-3 font-heading font-semibold text-navy shadow-card">{i}</Reveal>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm">{empty}</p>
      )}
    </div>
  )
}

export default function Locations() {
  usePageMeta(
    'Locations',
    'Corporate office in Bengaluru, offices in Bhubaneswar and Jagatsinghpur, and the Suntech Infra Consultancy construction office in Paradip, with mining operations in Keonjhar, Sundargarh, Jajpur and Mayurbhanj, Odisha.',
  )
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Locations' }]}
        eyebrow="Locations"
        title="Where to find us."
        intro="Our offices are where to reach us. Our operating locations are where the work happens."
      />

      <section className="border-b border-navy/10 bg-white">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading font-bold text-navy">Get in touch</p>
          <ContactLinks className="flex flex-col gap-3 sm:flex-row sm:gap-8" linkClassName="font-semibold text-navy hover:text-gold" iconClassName="h-5 w-5 text-gold" />
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Offices" title="Our offices." />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offices.map((o, i) => (
              <Reveal as="li" key={o.id} delay={i * 80}>
                <article className="flex h-full flex-col rounded-xl bg-white p-8 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{o.label} · {o.state}</p>
                  <h3 className="mt-2 text-3xl font-extrabold">{o.city}</h3>
                  {o.entity && <p className="mt-1 text-sm font-semibold text-graphite">{o.entity}</p>}
                  <dl className="mt-6 flex-1 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-graphite">Address</dt>
                      <dd><OfficeAddress office={o} /></dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-graphite">Phone</dt>
                      <dd>{o.phone ? <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-navy underline">{o.phone}</a> : <a href={company.phoneHref} className="text-navy underline decoration-gold underline-offset-4 hover:text-gold">{company.phone}</a>}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-graphite">Email</dt>
                      <dd>{o.email ? <a href={`mailto:${o.email}`} className="text-navy underline">{o.email}</a> : <a href={`mailto:${company.email}`} className="break-all text-navy underline decoration-gold underline-offset-4 hover:text-gold">{company.email}</a>}</dd>
                    </div>
                  </dl>
                  {o.address && (
                    <a href={mapLink(o)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 14s5-4.5 5-8.5A5 5 0 0 0 3 5.5C3 9.5 8 14 8 14Z"/><circle cx="8" cy="5.5" r="1.8"/></svg>
                      Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Operating locations" title="Where we work." />
          <div className="mt-10 space-y-12">
            <Group title="Mining districts, Odisha" kind="ops" items={miningDistricts} />
            <Group title="Construction" kind="ops" items={constructionLocations} />
            <div>
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm bg-gold" />
                Industrial training centres
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {trainingCentres.map((c, n) => (
                  <Reveal as="li" key={c.id} delay={n * 80} className="rounded-lg border border-navy/10 bg-white p-5 shadow-card">
                    <p className="font-heading text-lg font-bold text-navy">{c.city}</p>
                    <OfficeAddress office={c} className="mt-1 text-sm" />
                    <a href={mapLink(c)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 14s5-4.5 5-8.5A5 5 0 0 0 3 5.5C3 9.5 8 14 8 14Z"/><circle cx="8" cy="5.5" r="1.8"/></svg>
                      Map<span className="sr-only"> of the {c.city} training centre (opens in a new tab)</span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-trust-red" />
                Maakalarai Charitable Trust
              </h3>
              <p className="mt-4 text-sm">
                Areas served are to be confirmed. <TrustLink showIcon className="inline-flex items-center gap-1 font-semibold text-navy underline">Visit the trust website</TrustLink>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <EnquiryBand title="Need to reach a specific office?" text="Send an enquiry and tell us which location it concerns." />
    </>
  )
}
