import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../common/Container'
import Contours from '../common/Contours'
import { Picture, RepresentativeLabel } from '../common/Photo'
import ImageReveal from '../motion/ImageReveal'
import { businesses } from '../../data/businesses'
import { programmes } from '../../data/training'
import { drawLine, fadeUp, stagger, viewport } from '../../lib/motion'

// Short, factual highlights per division (from the data files only).
function highlights(b) {
  if (b.slug === 'industrial-training') return [`${programmes.length} programmes`, 'Data · Cloud & QA · Infrastructure']
  if (b.locations?.length) return [b.locationsTitle, b.locations.join(' · ')]
  return null
}

// List items inherit the parent ImageReveal's hidden/show state (no own in-view trigger:
// they sit inside the clipped layer, which browsers report as non-intersecting).
function TrainingVisual() {
  return (
    <div className="relative isolate flex h-full min-h-80 flex-col justify-center overflow-hidden bg-navy p-8 sm:p-12">
      <Contours className="text-gold opacity-50" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Skill development programmes</p>
      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {programmes.map((p, i) => (
          <motion.li
            key={p.id}
            variants={fadeUp}
            custom={0.35 + i * 0.06}
            className="flex items-baseline gap-3 border-b border-white/10 pb-3 font-heading text-lg font-semibold text-white"
          >
            <span className="text-xs font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
            {p.title}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

function Division({ b, index }) {
  const flip = index % 2 === 1
  const hl = highlights(b)
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Visual */}
      <Link
        to={`/businesses/${b.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
      >
        {b.photo ? (
          <ImageReveal className="aspect-[4/3] rounded-2xl sm:aspect-[16/11]">
            <Picture photo={b.photo} alt="" sizes="(min-width: 1024px) 58vw, 100vw" />
          </ImageReveal>
        ) : b.logo ? (
          <ImageReveal className="aspect-[3/2] rounded-2xl bg-black ring-1 ring-gold/20">
            <Picture photo={b.logo} alt="" sizes="(min-width: 1024px) 58vw, 100vw" />
          </ImageReveal>
        ) : (
          <ImageReveal className="rounded-2xl">
            <TrainingVisual />
          </ImageReveal>
        )}
        <RepresentativeLabel photo={b.photo} className="bottom-4 right-4" />
        {/* Gold corner accent */}
        <span aria-hidden="true" className={`absolute -bottom-3 h-16 w-16 border-b-2 border-gold ${flip ? '-left-3 border-l-2' : '-right-3 border-r-2'}`} />
      </Link>

      {/* Copy */}
      <motion.div
        className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}
        variants={stagger(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="font-heading text-6xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-gold)] sm:text-7xl">
            {num}
          </span>
          <motion.span variants={drawLine} className="h-px flex-1 origin-left bg-gold/50" aria-hidden="true" />
        </motion.div>
        <motion.h3 variants={fadeUp} className="mt-6 font-heading text-[clamp(2.25rem,3.6vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          {b.name}
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-5 max-w-[46ch] text-lg leading-relaxed">
          {b.intro}
        </motion.p>
        {hl && (
          <motion.div variants={fadeUp} className="mt-7 border-l-2 border-gold pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">{hl[0]}</p>
            <p className="mt-1 text-sm">{hl[1]}</p>
          </motion.div>
        )}
        <motion.div variants={fadeUp}>
          <Link
            to={`/businesses/${b.slug}`}
            className="group/link mt-9 inline-flex items-center gap-3 font-heading text-base font-bold text-navy"
          >
            <span className="relative">
              Explore {b.name.toLowerCase()}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-smooth group-hover/link:scale-x-100" />
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 transition-all duration-300 ease-smooth group-hover/link:border-gold group-hover/link:bg-gold group-hover/link:text-ink"
            >
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </article>
  )
}

export default function Divisions() {
  return (
    <section aria-labelledby="divisions-heading" className="py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <motion.div
          className="max-w-3xl"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Business divisions
          </motion.p>
          <motion.h2 id="divisions-heading" variants={fadeUp} className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Five businesses.{' '}<span className="whitespace-nowrap text-slate/70">One group.</span>
          </motion.h2>
        </motion.div>

        <div className="mt-20 space-y-28 lg:space-y-36">
          {businesses.map((b, i) => (
            <Division key={b.slug} b={b} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
