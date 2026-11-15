import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../../components/common/Container'
import Contours from '../../components/common/Contours'
import Breadcrumb from '../../components/common/Breadcrumb'
import ContentPending from '../../components/common/ContentPending'
import { Picture, RepresentativeLabel } from '../../components/common/Photo'
import Reveal from '../../components/common/Reveal'
import EnquiryBand from '../../components/sections/EnquiryBand'
import TrainingProgrammes from '../../components/sections/TrainingProgrammes'
import NotFound from '../NotFound'
import usePageMeta from '../../hooks/usePageMeta'
import useHeroParallax from '../../hooks/useHeroParallax'
import { ease, fadeIn, fadeUp, lineReveal, scaleReveal } from '../../lib/motion'
import { businesses, getBusiness } from '../../data/businesses'
import { offices, subsidiaries } from '../../data/site'
import OfficeAddress from '../../components/common/OfficeAddress'
import { mapLink } from '../../utils/maps'

function Hero({ business }) {
  const { photo } = business
  const ref = useRef(null)
  const { bgY, contentY, contentOpacity } = useHeroParallax(ref)
  const iconMask = { mask: `url(${business.icon}) center / contain no-repeat`, WebkitMask: `url(${business.icon}) center / contain no-repeat` }

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink text-white">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 2.4, ease: ease.out } }}
        >
          {photo ? (
            <Picture photo={photo} eager sizes="100vw" />
          ) : (
            <>
              <Contours className="text-gold opacity-60" />
              <span aria-hidden="true" className="absolute -right-10 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 bg-gold opacity-[0.08]" style={iconMask} />
            </>
          )}
        </motion.div>
      </motion.div>
      {photo && (
        <>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
          <RepresentativeLabel photo={photo} />
        </>
      )}

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className={`relative flex flex-col justify-end pb-16 pt-24 sm:pb-24 ${photo ? 'min-h-[60vh] sm:min-h-[70vh]' : 'sm:pt-32'}`}>
          <motion.div variants={fadeIn} initial="hidden" animate="show" custom={0.05}>
            <Breadcrumb items={[{ label: 'Businesses', to: '/businesses' }, { label: business.name }]} />
          </motion.div>
          <motion.span
            className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white"
            variants={scaleReveal}
            initial="hidden"
            animate="show"
            custom={0.15}
          >
            <img src={business.icon} alt="" width="32" height="32" className="h-8 w-8" />
          </motion.span>
          <h1 className="max-w-3xl font-heading text-display-xl font-extrabold text-white">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
              <motion.span className="block" variants={lineReveal} initial="hidden" animate="show" custom={0.3}>
                {business.name}
              </motion.span>
            </span>
          </h1>
          <motion.p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75" variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
            {business.summary}
          </motion.p>
        </Container>
      </motion.div>
    </section>
  )
}

export default function BusinessPage() {
  const { slug } = useParams()
  const business = getBusiness(slug)
  usePageMeta(business?.name, business?.summary)
  if (!business) return <NotFound />

  const others = businesses.filter((b) => b.slug !== slug)
  const sub = subsidiaries.find((s) => s.id === business.subsidiary)
  const subOffice = sub && offices.find((o) => o.id === sub.officeId)

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
          <Reveal className="space-y-6 lg:col-span-5" delay={120}>
            {sub && subOffice && (
              <div className="relative overflow-hidden rounded-xl bg-navy p-6 text-white shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Group company</p>
                <p className="mt-2 font-heading text-xl font-extrabold text-white">{sub.name}</p>
                <p className="mt-1 text-sm text-white/70">Construction subsidiary of Phakir Sarada Private Limited</p>
                <div className="mt-5 border-t border-white/10 pt-4 text-sm">
                  <p className="font-semibold text-white">{subOffice.city} office</p>
                  <OfficeAddress office={subOffice} className="mt-1 text-white/70" />
                  <a href={mapLink(subOffice)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-gold underline underline-offset-4 hover:text-white">
                    Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            )}
            <ContentPending bare title="Details to be published" items={business.pending} />
          </Reveal>
        </Container>
      </section>

      {slug === 'industrial-training' && <TrainingProgrammes />}

      <section className="border-t border-navy/10 bg-white py-16">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">Other businesses in the group</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((b, i) => (
              <Reveal as="li" key={b.slug} delay={i * 70}>
                <Link
                  to={`/businesses/${b.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-navy/10 p-4 transition duration-300 ease-smooth hover:-translate-y-1 hover:border-gold hover:shadow-card"
                >
                  <img src={b.icon} alt="" width="28" height="28" className="h-7 w-7" />
                  <span className="font-heading font-bold text-navy group-hover:text-gold">{b.name}</span>
                </Link>
              </Reveal>
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
