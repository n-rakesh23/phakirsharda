import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Collapse from '../common/Collapse'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { programmes, trainingTracks } from '../../data/training'

const trackIcon = {
  data: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  cloud: <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9a4.75 4.75 0 0 1-.25 9.5Z" />,
  infra: (
    <>
      <rect x="4" y="3.5" width="16" height="7" rx="1.5" />
      <rect x="4" y="13.5" width="16" height="7" rx="1.5" />
      <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" />
    </>
  ),
}

function TrackIcon({ track, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {trackIcon[track]}
    </svg>
  )
}

function ProgrammeCard({ p }) {
  const [open, setOpen] = useState(false)
  const panelId = `programme-${p.id}`
  const enquiry = `/contact?category=${encodeURIComponent('Industrial training')}&programme=${encodeURIComponent(p.title)}`

  return (
    <article className="flex flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-navy/5 transition-shadow duration-300 ease-smooth hover:shadow-card-hover">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
        <TrackIcon track={p.track} />
      </span>
      <h4 className="mt-5 text-xl font-extrabold">{p.title}</h4>
      <p className="mt-2 leading-relaxed">{p.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools covered">
        {p.tools.slice(0, 5).map((t) => (
          <li key={t} className="rounded-full bg-offwhite px-2.5 py-1 text-xs font-medium text-graphite">{t}</li>
        ))}
        {p.tools.length > 5 && (
          <li className="rounded-full px-2.5 py-1 text-xs font-medium text-slate">+{p.tools.length - 5} more</li>
        )}
      </ul>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy transition-colors duration-200 hover:text-gold"
      >
        {open ? 'Hide course details' : 'View course details'}
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={`transition-transform duration-300 ease-smooth ${open ? 'rotate-180' : ''}`}>
          <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Collapse open={open} id={panelId}>
        <div className="mt-6 space-y-6 border-t border-navy/10 pt-6 text-sm">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">What you will learn</h5>
            <ul className="mt-3 space-y-2">
              {p.modules.map((m) => (
                <li key={m} className="flex gap-2.5">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="mt-0.5 shrink-0 text-gold">
                    <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Tools and technologies</h5>
            <p className="mt-2">{p.tools.join(' · ')}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Career paths</h5>
            <p className="mt-2">{p.roles.join(' · ')}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Who it is for</h5>
            <p className="mt-2">{p.forWhom}</p>
          </div>
        </div>
      </Collapse>

      <Link
        to={enquiry}
        className="mt-6 inline-flex items-center justify-center rounded-md border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white"
      >
        Enquire about this programme
      </Link>
    </article>
  )
}

export default function TrainingProgrammes() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Skill development programmes"
          title={`${programmes.length} programmes in ${trainingTracks.length} tracks.`}
          intro="Practical, job-focused training in data, cloud and IT infrastructure."
        />
        <div className="mt-14 space-y-16">
          {trainingTracks.map((track) => {
            const items = programmes.filter((p) => p.track === track.id)
            return (
              <div key={track.id}>
                <div className="flex flex-col gap-1 border-b border-navy/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="flex items-center gap-3 text-2xl font-extrabold">
                    <TrackIcon track={track.id} className="h-6 w-6 text-gold" />
                    {track.name}
                  </h3>
                  <p className="text-sm">{track.blurb}</p>
                </div>
                <ul className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <Reveal as="li" key={p.id} delay={i * 80}>
                      <ProgrammeCard p={p} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
