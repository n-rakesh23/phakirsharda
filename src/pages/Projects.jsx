import { useState } from 'react'
import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import EnquiryBand from '../components/sections/EnquiryBand'
import usePageMeta from '../hooks/usePageMeta'
import { businesses, getBusiness } from '../data/businesses'
import { projects, statusLabel } from '../data/projects'

const sectorsWithProjects = businesses.filter((b) => projects.some((p) => p.sector === b.slug))

export default function Projects() {
  usePageMeta(
    'Projects & Operations',
    'Projects and operations of Phakir Sarada Private Limited, including construction at Paradip and mining operations across four districts of Odisha.',
  )
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.sector === filter)

  const tabs = [{ slug: 'all', name: 'All' }, ...sectorsWithProjects]

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Projects & Operations' }]}
        eyebrow="Projects & operations"
        title="Work on the ground."
        intro="Where our businesses are active. Detailed project information is published once it is approved."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <div role="group" aria-label="Filter by business" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.slug}
                type="button"
                aria-pressed={filter === t.slug}
                onClick={() => setFilter(t.slug)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${
                  filter === t.slug ? 'bg-navy text-white' : 'border border-navy/15 bg-white text-navy hover:border-gold'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => {
              const b = getBusiness(p.sector)
              return (
                <Reveal as="li" key={p.id} delay={(i % 3) * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card">
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-navy">
                      <span
                        aria-hidden="true"
                        className="h-24 w-24 bg-gold opacity-30"
                        style={{ mask: `url(${b.icon}) center / contain no-repeat`, WebkitMask: `url(${b.icon}) center / contain no-repeat` }}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                        {b.name}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl font-bold">{p.title}</h2>
                      <p className="mt-1 text-sm font-medium text-graphite">{p.location}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed">{p.description}</p>
                      <p className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-gold/50 px-3 py-1 text-xs font-semibold text-graphite">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {statusLabel[p.status]}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </Container>
      </section>

      <EnquiryBand title="Planning a project?" text="Tell us about it and the right team will get back to you." />
    </>
  )
}
