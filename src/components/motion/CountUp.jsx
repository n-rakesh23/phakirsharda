import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { ease } from '../../lib/motion'

// Counts from 0 to `value` when scrolled into view. Shows the final value immediately for
// reduced-motion users, and the real number is always present for screen readers.
export default function CountUp({ value, pad = 2, duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, { duration, ease: ease.out, onUpdate: (v) => setShown(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{String(reduce ? value : shown).padStart(pad, '0')}</span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
