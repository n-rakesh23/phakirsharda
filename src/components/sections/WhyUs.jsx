import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

// Only differentiators backed by facts the company has stated (docs/design.md §8.7).
const points = [
  {
    n: '01',
    title: 'Multi-sector capability',
    body: 'Mining, construction, manufacturing, transportation and training under one group, so one partner can cover more of the job.',
  },
  {
    n: '02',
    title: 'Rooted in Odisha',
    body: 'Offices in Bhubaneswar and Paradip and operations across Keonjhar, Sundargarh, Jajpur and Mayurbhanj.',
  },
  {
    n: '03',
    title: 'Reach beyond the region',
    body: 'Our Bengaluru office connects partners across India to our work in Odisha.',
  },
  {
    n: '04',
    title: 'Investing in skills',
    body: 'Through our industrial training programmes, we help build the skilled workforce that industry depends on.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-white py-[clamp(4rem,9vw,8rem)]">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Why work with us" title="A partner on the ground." />
          </div>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-xl bg-slate/15 sm:grid-cols-2 lg:col-span-8">
          {points.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 80} className="bg-white p-8">
              <span className="font-heading text-sm font-bold text-gold">{p.n}</span>
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
