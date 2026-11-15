import { useRef } from 'react'
import { motion } from 'motion/react'
import Container from './Container'
import Contours from './Contours'
import Breadcrumb from './Breadcrumb'
import useHeroParallax from '../../hooks/useHeroParallax'
import { duration, ease, fadeIn, fadeUp, lineReveal } from '../../lib/motion'

// Inner-page hero: staged entrance (breadcrumb → gold rule → eyebrow → title → intro → extras)
// and a scroll parallax (contours drift, content rises and fades as you scroll past).
export default function PageHeader({ eyebrow, title, intro, breadcrumb, children }) {
  const ref = useRef(null)
  const { bgY, contentY, contentOpacity } = useHeroParallax(ref)

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink text-white">
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 -z-10">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: ease.out }}
        >
          <Contours className="text-gold opacity-50" />
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="relative pb-16 pt-20 sm:pb-24 sm:pt-28">
          {breadcrumb && (
            <motion.div variants={fadeIn} initial="hidden" animate="show" custom={0.05}>
              <Breadcrumb items={breadcrumb} />
            </motion.div>
          )}
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="h-px w-8 origin-left bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: duration.slow, ease: ease.out, delay: 0.15 }}
              />
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: duration.base, ease: ease.out, delay: 0.25 }}
              >
                {eyebrow}
              </motion.p>
            </div>
          )}
          <h1 className="max-w-4xl font-heading text-display-xl font-extrabold text-white">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
              <motion.span className="block" variants={lineReveal} initial="hidden" animate="show" custom={0.3}>
                {title}
              </motion.span>
            </span>
          </h1>
          {intro && (
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
            >
              {intro}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.7}>
              {children}
            </motion.div>
          )}
        </Container>
      </motion.div>
    </section>
  )
}
