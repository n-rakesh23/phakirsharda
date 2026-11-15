import { motion } from 'motion/react'
import { imageReveal, imageSettle, viewport } from '../../lib/motion'

// Curtain-wipe reveal with a slow settle from zoom. Children are the <picture>/<img>.
// The in-view trigger lives on an UNCLIPPED outer wrapper: browsers treat a fully clip-path'd
// element as non-intersecting, so observing the clipped layer itself would never fire.
// Hover zoom is applied to the innermost wrapper via the `group` class on a parent.
export default function ImageReveal({ className = '', delay = 0, children }) {
  return (
    <motion.div className={`relative ${className}`} initial="hidden" whileInView="show" viewport={viewport}>
      <motion.div className="h-full w-full overflow-hidden rounded-[inherit]" variants={imageReveal} custom={delay}>
        <motion.div className="h-full w-full" variants={imageSettle} custom={delay}>
          <div className="h-full w-full transition-transform duration-[1.2s] ease-smooth group-hover:scale-[1.04]">{children}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
