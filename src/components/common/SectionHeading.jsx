import { motion } from 'motion/react'
import { drawLine, fadeUp, stagger, viewport } from '../../lib/motion'

// Section heading that animates in on scroll: gold rule draws, eyebrow, title and intro rise in turn.
export default function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <motion.div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {eyebrow && (
        <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold ${align === 'center' ? 'justify-center' : ''}`}>
          <motion.span variants={drawLine} className="h-px w-8 origin-left bg-gold" aria-hidden="true" />
          <motion.span variants={fadeUp}>{eyebrow}</motion.span>
        </p>
      )}
      <motion.h2 variants={fadeUp} className={`text-display-md font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : ''}`}>
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
