import { Link, useParams } from 'react-router-dom'
import Container from '../../components/common/Container'
import Contours from '../../components/common/Contours'
import Breadcrumb from '../../components/common/Breadcrumb'
import ContentPending from '../../components/common/ContentPending'
import Photo, { RepresentativeLabel } from '../../components/common/Photo'
import Reveal from '../../components/common/Reveal'
import EnquiryBand from '../../components/sections/EnquiryBand'
import NotFound from '../NotFound'
import usePageMeta from '../../hooks/usePageMeta'
import { businesses, getBusiness } from '../../data/businesses'

function Hero({ business }) {
  const { photo } = business
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {photo ? (
        <>
          <Photo photo={photo} eager sizes="100vw" className="absolute! inset-0 -z-10" label={false} />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
          <RepresentativeLabel photo={photo} />
        </>
      ) : (
        <>
          <Contours className="text-gold opacity-60" />
          <span
            aria-hidden="true"
            className="absolute -right-10 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 bg-gold opacity-[0.08]"
            style={{ mask: `url(${business.icon}) center / contain no-repeat`, WebkitMask: `url(${business.icon}) center / contain no-repeat` }}
          />
        </>
      )}
      <Container className={`relative flex flex-col justify-end pb-16 pt-24 sm:pb-24 ${photo ? 'min-h-[60vh] sm:min-h-[70vh]' : 'sm:pt-32'}`}>
        <Breadcrumb items={[{ label: 'Businesses', to: '/businesses' }, { label: business.name }]} />
        <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white">
          <img src={business.icon} alt="" width="32" height="32" className="h-8 w-8" />
        </span>
        <h1 className="max-w-3xl font-heading text-display-xl font-extrabold text-white">{business.name}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{business.summary}</p>
      </Container>
    </section>
  )
}

export default function BusinessPage() {
  const { slug } = useParams()
  const business = getBusiness(slug)
  usePageMeta(business?.name, business?.summary)
  if (!business) return <NotFound />

  const others = businesses.filter((b) => b.slug !== slug)

  return (
    <>
      <Hero business={business} />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Overview
            </p>
            <p className="font-heading text-2xl font-semibold leading-snug text-navy sm:text-3xl">{business.intro}</p>

            {business.locationsTitle && (
              <div className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">{business.locationsTitle}</h2>
                {business.locations.length > 0 ? (
                  <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {business.locations.map((l) => (
                      <li key={l} className="rounded-lg border border-navy/10 bg-white px-4 py-3 font-heading font-semibold text-navy shadow-card">
                        {l}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm">To be confirmed.</p>
                )}
              </div>
            )}
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <ContentPending bare title="Details to be published" items={business.pending} />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-16">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">Other businesses in the group</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/businesses/${b.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-navy/10 p-4 transition hover:border-gold hover:shadow-card"
                >
                  <img src={b.icon} alt="" width="28" height="28" className="h-7 w-7" />
                  <span className="font-heading font-bold text-navy group-hover:text-gold">{b.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <EnquiryBand
        title={`Enquire about ${business.name.toLowerCase()}.`}
        text="Your enquiry goes straight to the right team."
        category={business.enquiryCategory}
      />
    </>
  )
}
