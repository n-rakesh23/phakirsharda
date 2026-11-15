import { motion } from 'motion/react'
import Container from '../common/Container'
import CountUp from '../motion/CountUp'
import { businesses } from '../../data/businesses'
import { miningDistricts, offices } from '../../data/site'
import { programmes } from '../../data/training'
import { fadeUp, stagger, viewport } from '../../lib/motion'

// Every number is derived from the data files, so it can never drift from the facts.
const stats = [
  { value: businesses.length, label: 'Business divisions', note: 'Mining · Construction · Manufacturing · Transportation · Training' },
  { value: offices.length, label: 'Office locations', note: offices.map((o) => o.city).join(' · ') },
  { value: miningDistricts.length, label: 'Mining districts', note: `${miningDistricts.join(' · ')}, Odisha` },
  { value: programmes.length, label: 'Skill programmes', note: 'Data · Cloud & QA · Infrastructure' },
]

export default function AtAGlance() {
  return (
    <section id="at-a-glance" aria-label="Company at a glance" className="relative scroll-mt-18 border-y border-white/5 bg-ink text-white">
      <Container>
        <motion.dl
          className="grid grid-cols-2 lg:grid-cols-4"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`flex flex-col border-white/10 py-10 sm:py-14 ${i % 2 ? 'pl-6 sm:pl-10' : 'pr-6'} ${
                i > 0 ? 'lg:border-l lg:pl-10' : ''
              } ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''}`}
            >
              <dt className="order-2 mt-3 font-heading text-sm font-semibold text-white">{s.label}</dt>
              <dd className="order-1 font-heading text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-none tracking-tight text-white">
                <CountUp value={s.value} />
                <span className="text-gold">.</span>
              </dd>
              <dd className="order-3 mt-1.5 text-xs leading-relaxed text-white/50">{s.note}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  )
}
