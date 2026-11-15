import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../common/Container'
import Contours from '../common/Contours'
import Button from '../common/Button'
import { Picture } from '../common/Photo'
import { PhoneIcon, MailIcon } from '../common/ContactLinks'
import { getBusiness } from '../../data/businesses'
import { company } from '../../data/site'
import { fadeUp, lineReveal, stagger, viewport } from '../../lib/motion'

const topics = ['Mining', 'Construction', 'Manufacturing', 'Transportation and logistics', 'Industrial training', 'Business partnership']
const bg = getBusiness('construction')?.photo

export default function ClosingCTA() {
  return (
    <section aria-labelledby="closing-heading" className="relative isolate overflow-hidden bg-ink py-[clamp(6rem,12vw,11rem)] text-white">
      {bg && (
        <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-25">
          <Picture photo={bg} alt="" sizes="100vw" />
        </div>
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <Contours className="-z-10 text-gold opacity-50" />

      <Container className="relative">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="max-w-4xl">
          <motion.p variants={fadeUp} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Business enquiry
          </motion.p>
          <h2 id="closing-heading" className="font-heading text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.04em] text-white">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
              <motion.span className="block" variants={lineReveal}>Let&apos;s build</motion.span>
            </span>
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.18em]">
              <motion.span className="block text-gold" variants={lineReveal}>what comes next.</motion.span>
            </span>
          </h2>
          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-white/70">
            Tell us about your project, supply need, training requirement or partnership. We will route it to the right team.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {topics.map((t) => (
              <li key={t}>
                <Link
                  to={`/contact?category=${encodeURIComponent(t)}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-medium text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  {t}
                </Link>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:gap-10">
            <Button to="/contact">Make an enquiry</Button>
            <a href={company.phoneHref} className="inline-flex items-center gap-3 font-heading text-lg font-bold text-white transition-colors hover:text-gold">
              <PhoneIcon className="h-5 w-5 text-gold" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 font-heading text-lg font-bold text-white transition-colors hover:text-gold">
              <MailIcon className="h-5 w-5 text-gold" />
              {company.email}
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
