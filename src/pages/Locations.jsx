import { Link } from 'react-router-dom'
import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import EnquiryBand from '../components/sections/EnquiryBand'
import usePageMeta from '../hooks/usePageMeta'
import { constructionLocations, miningDistricts, offices, trainingCentres } from '../data/site'

const mapLink = (o) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.address}, ${o.city}, ${o.state}`)}`

function Group({ title, kind, items, empty }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
        <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-full ${kind === 'office' ? 'bg-gold' : 'border-2 border-brand-teal'}`} />
        {title}
      </h3>
      {items.length ? (
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((i) => (
            <li key={i} className="rounded-lg border border-navy/10 bg-white px-4 py-3 font-heading font-semibold text-navy shadow-card">{i}</li>
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
    'Offices in Bengaluru, Bhubaneswar and Paradip, with mining operations in Keonjhar, Sundargarh, Jajpur and Mayurbhanj, Odisha.',
  )
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Locations' }]}
        eyebrow="Locations"
        title="Where to find us."
        intro="Our offices are where to reach us. Our operating locations are where the work happens."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Offices" title="Our offices." />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal as="li" key={o.city} delay={i * 80}>
                <article className="flex h-full flex-col rounded-xl bg-white p-8 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{o.state}</p>
                  <h3 className="mt-2 text-3xl font-extrabold">{o.city}</h3>
                  <dl className="mt-6 flex-1 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-graphite">Address</dt>
                      <dd>{o.address ?? 'To be confirmed'}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-graphite">Phone</dt>
                      <dd>{o.phone ? <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-navy underline">{o.phone}</a> : 'To be confirmed'}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-graphite">Email</dt>
                      <dd>{o.email ? <a href={`mailto:${o.email}`} className="text-navy underline">{o.email}</a> : 'To be confirmed'}</dd>
                    </div>
                  </dl>
                  {o.address && (
                    <a href={mapLink(o)} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
                      Open in Google Maps
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
            <Group title="Training centres" kind="ops" items={trainingCentres} empty="To be confirmed." />
            <div>
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-trust-red" />
                Maakalarai Charitable Trust
              </h3>
              <p className="mt-4 text-sm">
                Areas served are to be confirmed. <Link to="/community" className="font-semibold text-navy underline">About the trust</Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <EnquiryBand title="Need to reach a specific office?" text="Send an enquiry and tell us which location it concerns." />
    </>
  )
}
