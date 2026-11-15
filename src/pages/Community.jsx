import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import useHeroParallax from '../hooks/useHeroParallax'
import { duration, ease, fadeIn, fadeUp, lineReveal, scaleReveal } from '../lib/motion'
import { company, trust } from '../data/site'
import trustLogo from '../assets/brand/maa-kalarai-trust-logo.webp'
import TrustLink, { ExternalIcon } from '../components/common/TrustLink'

// The trust uses its own palette (navy + red from its logo) on light backgrounds,
// so it reads as distinct and warmer while staying inside the group site.
// No online donations until legal/receipting review (trust.acceptsOnlineDonations).

const supportWays = [
  {
    title: 'Partner with the trust',
    body: 'Organisations interested in working with the trust on community programmes can get in touch.',
  },
  {
    title: 'Volunteer',
    body: 'Individuals who would like to give their time can contact the trust.',
  },
  {
    title: 'Support',
    body: 'To find out how to support the trust, please contact it directly.',
  },
]

export default function Community() {
  usePageMeta(
    trust.name,
    `${trust.name}: ${trust.tagline}. The charitable trust associated with ${company.legalName}.`,
  )
  const heroRef = useRef(null)
  const { bgY, contentY, contentOpacity } = useHeroParallax(heroRef, { bg: '30%' })

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-trust-red/5" />
        <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full bg-trust-navy/5" />
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <Container className="relative grid items-center gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-2">
            <div>
              <motion.nav aria-label="Breadcrumb" className="mb-6 text-sm" variants={fadeIn} initial="hidden" animate="show" custom={0.05}>
                <Link to="/" className="text-slate hover:text-trust-navy">Home</Link>
                <span aria-hidden="true" className="mx-2 text-slate/50">/</span>
                <span aria-current="page" className="text-trust-navy">Community</span>
              </motion.nav>
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="h-px w-8 origin-left bg-trust-red"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: duration.slow, ease: ease.out, delay: 0.15 }}
                />
                <motion.p className="text-xs font-semibold uppercase tracking-[0.2em] text-trust-red" variants={fadeIn} initial="hidden" animate="show" custom={0.25}>
                  Community
                </motion.p>
              </div>
              <h1 className="mt-4 font-heading text-display-xl font-extrabold text-trust-navy">
                <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
                  <motion.span className="block" variants={lineReveal} initial="hidden" animate="show" custom={0.3}>
                    {trust.tagline}.
                  </motion.span>
                </span>
              </h1>
              <motion.p className="mt-6 max-w-[56ch] text-lg leading-relaxed" variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
                The {trust.name} carries out the charitable work associated with {company.legalName}.
              </motion.p>
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.7}>
                <TrustLink
                  showIcon
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-trust-red px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-trust-navy"
                >
                  Visit the trust website
                </TrustLink>
              </motion.div>
            </div>
            <motion.div variants={scaleReveal} initial="hidden" animate="show" custom={0.45}>
              <TrustLink className="mx-auto block w-full max-w-lg transition-transform duration-300 ease-smooth hover:scale-[1.02]">
                <img src={trustLogo} alt={trust.name} width="350" height="100" className="h-auto w-full" />
              </TrustLink>
            </motion.div>
          </Container>
        </motion.div>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trust-red">About the trust</p>
            <h2 className="mt-4 text-display-md font-extrabold text-trust-navy">Our focus.</h2>
          </div>
          <div className="lg:col-span-7">
            {trust.focusAreas.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {trust.focusAreas.map((f) => (
                  <li key={f} className="rounded-xl bg-white p-6 font-heading font-bold text-trust-navy shadow-card">{f}</li>
                ))}
              </ul>
            ) : (
              <div className="rounded-xl border border-dashed border-trust-red/40 bg-white p-6">
                <p className="font-heading font-bold text-trust-navy">To be confirmed by the trust</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  <li>Focus areas (for example education, health or community welfare)</li>
                  <li>Key initiatives and the areas served</li>
                  <li>Registration details and relationship to the company</li>
                  <li>Photographs, with consent from the people shown</li>
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trust-red">Get involved</p>
          <h2 className="mt-4 text-display-md font-extrabold text-trust-navy">How you can help.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportWays.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <TrustLink className="group flex h-full flex-col rounded-xl border border-trust-navy/10 p-8 transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-trust-red hover:shadow-card">
                  <span className="font-heading text-sm font-bold text-trust-red">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-xl font-bold text-trust-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-trust-red">Visit the trust website <ExternalIcon /></span>
                </TrustLink>
              </Reveal>
            ))}
          </div>
          {!trust.acceptsOnlineDonations && (
            <p className="mt-8 text-sm">The trust does not take online donations through this website.</p>
          )}
        </Container>
      </section>
    </>
  )
}
