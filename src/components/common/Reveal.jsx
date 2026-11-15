import { motion } from 'motion/react'
import { fadeUp, viewport } from '../../lib/motion'

// Scroll-triggered entrance. Same API as before (as, delay in ms, className), now powered by
// Motion. Pass `variants` to use another preset from lib/motion (fadeIn, scaleReveal, slideReveal…).
const tags = { div: motion.div, li: motion.li, section: motion.section, article: motion.article, ul: motion.ul, figure: motion.figure, span: motion.span, p: motion.p }

export default function Reveal({ as = 'div', delay = 0, variants = fadeUp, className = '', children, ...props }) {
  const Tag = tags[as] ?? motion.div
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      custom={delay / 1000}
      {...props}
    >
      {children}
    </Tag>
  )
}
