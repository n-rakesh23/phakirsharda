import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../common/Container'
import { Picture, RepresentativeLabel } from '../common/Photo'
import ImageReveal from '../motion/ImageReveal'
import { getBusiness } from '../../data/businesses'
import { miningDistricts } from '../../data/site'
import { clients, monogram } from '../../data/clients'
import { fadeUp, stagger, viewport } from '../../lib/motion'

// Only confirmed facts: sector + location. Project names, scope and figures await approval.
const items = [
  {
    key: 'mining',
    business: 'mining',
    title: 'Mining operations',
    location: `${miningDistricts.join(' · ')}, Odisha`,
    text: 'Mining operations across four districts of Odisha.',
  },
  {
    key: 'construction',
    business: 'construction',
    title: 'Construction at Paradip',
    location: 'Paradip, Jagatsinghpur district, Odisha',
    text: 'Construction activity in Paradip. Full project details will be published once approved.',
  },
]

export default function ProjectsShowcase() {
  return (
    <section aria-labelledby="projects-heading" className="py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <motion.div
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Projects &amp; operations
            </motion.p>
            <motion.h2 id="projects-heading" variants={fadeUp} className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Work on the ground.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/projects" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
              All projects &amp; operations
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {items.map((it, i) => {
            const photo = getBusiness(it.business)?.photo
            return (
              <Link
                key={it.key}
                to={`/businesses/${it.business}`}
                className={`group relative block overflow-hidden rounded-2xl bg-navy ${i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              >
                <ImageReveal className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-[560px]" delay={i * 0.15}>
                  {photo && <Picture photo={photo} alt="" sizes={i === 0 ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'} />}
                </ImageReveal>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <RepresentativeLabel photo={photo} className="right-4 top-4" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{it.location}</p>
                  <h3 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">{it.title}</h3>
                  <p className="mt-3 max-w-md text-white/75">{it.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white/80">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Details to be published
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>

      {/* Current clients: slow marquee of names (pauses on hover; static for reduced motion) */}
      <div className="mt-20">
        <Container>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Current clients
          </p>
        </Container>
        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 ? 'true' : undefined} className="flex shrink-0 items-center">
                {clients.map((c) => (
                  <li key={c.id} className="flex items-center gap-4 px-8">
                    <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy font-heading text-sm font-extrabold text-gold">
                      {monogram(c.name)}
                    </span>
                    <span className="whitespace-nowrap font-heading text-2xl font-extrabold text-navy/80">{c.name}</span>
                    <span aria-hidden="true" className="ml-8 h-1.5 w-1.5 rotate-45 bg-gold" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Container>
          <Link to="/projects" className="mt-8 inline-block text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
            About our clients
          </Link>
        </Container>
      </div>
    </section>
  )
}
