import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Container from '../common/Container'
import Button from '../common/Button'
import Contours from '../common/Contours'
import { Picture, RepresentativeLabel } from '../common/Photo'
import { businesses } from '../../data/businesses'
import { company } from '../../data/site'
import { duration, ease, fadeUp, lineReveal } from '../../lib/motion'

const heroPhoto = businesses.find((b) => b.slug === 'mining')?.photo

// Headline: "Empowering Lives. Igniting Futures." (approved by the company, Nov 2026).
// Timeline (seconds from load). Nothing blocks interaction; elements are clickable immediately.
const T = { bg: 0.05, rule: 0.45, line1: 0.6, line2: 0.75, gold: 0.95, sub: 1.2, cta: 1.35, cue: 1.9 }

function Line({ children, delay }) {
  return (
    <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
      <motion.span className="block" variants={lineReveal} initial="hidden" animate="show" custom={delay}>
        {children}
      </motion.span>
    </span>
  )
}

export default function HeroCinematic() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-white">
      {/* Background photo: reveals from a soft zoom, then parallaxes on scroll */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-30">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: 1.14 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 1.2, delay: T.bg }, scale: { duration: 2.8, ease: ease.out, delay: T.bg } }}
        >
          {heroPhoto && <Picture photo={heroPhoto} eager sizes="100vw" />}
        </motion.div>
      </motion.div>

      {/* Navy overlays for legibility */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-r from-ink from-10% via-ink/80 to-ink/25" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* Slowly drifting topographic lines */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        animate={{ x: [0, -24, 0], y: [0, 12, 0] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        <Contours className="text-gold opacity-60" />
      </motion.div>

      <RepresentativeLabel photo={heroPhoto} className="bottom-4 right-4" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex flex-1 items-center">
        <Container className="pb-28 pt-32 sm:pt-36">
          <div className="mb-7 flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              className="h-px w-12 origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration.slow, ease: ease.out, delay: T.rule }}
            />
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-gold"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.base, ease: ease.out, delay: T.rule + 0.15 }}
            >
              {company.legalName}
            </motion.p>
          </div>

          <h1 className="max-w-5xl font-heading text-[clamp(3rem,7.2vw+0.5rem,7.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">
            <Line delay={T.line1}>Empowering Lives.</Line>
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
              <motion.span className="inline-block" variants={lineReveal} initial="hidden" animate="show" custom={T.line2}>
                Igniting&nbsp;
              </motion.span>
              <motion.span
                className="inline-block bg-gradient-to-r from-[#e8c27a] via-gold to-[#b98a36] bg-clip-text text-transparent"
                variants={lineReveal}
                initial="hidden"
                animate="show"
                custom={T.gold}
              >
                Futures.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={T.sub}
          >
            Mining, construction, manufacturing, transportation and industrial skill development, rooted in
            Odisha and working across India.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-3">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={T.cta}>
              <Button to="/businesses">Explore our businesses</Button>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={T.cta + 0.1}>
              <Button to="/contact" variant="secondary" className="backdrop-blur-sm">
                Business Enquiry
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#at-a-glance"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-gold sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.base, delay: T.cue }}
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, ease: ease.inOut, repeat: Infinity, repeatDelay: 0.4 }}
          />
        </span>
      </motion.a>
    </section>
  )
}
