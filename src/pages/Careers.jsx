import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import usePageMeta from '../hooks/usePageMeta'
import { businesses } from '../data/businesses'
import { offices } from '../data/site'

const openings = [] // { title, business, location, type } — add approved openings here

const steps = [
  { title: 'Send your details', body: 'Use the enquiry form and choose "Careers". Tell us the kind of role you are interested in.' },
  { title: 'We review', body: 'Your details are passed to the relevant business.' },
  { title: 'We get in touch', body: 'If there is a suitable opening, the team will contact you.' },
]

export default function Careers() {
  usePageMeta(
    'Careers',
    'Careers at Phakir Sarada Private Limited across mining, construction, manufacturing, transportation and industrial training.',
  )
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Careers' }]}
        eyebrow="Careers"
        title="Work with us."
        intro="We work across five businesses and three offices. Here is how to apply."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Where you could work" title="Across the group." />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">Businesses</h3>
              <ul className="mt-4 space-y-2">
                {businesses.map((b) => (
                  <li key={b.slug} className="flex items-center gap-3">
                    <img src={b.icon} alt="" width="20" height="20" className="h-5 w-5" />
                    {b.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">Offices</h3>
              <ul className="mt-4 space-y-2">
                {offices.map((o) => <li key={o.city}>{o.city}, {o.state}</li>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Openings" title="Current openings." />
          {openings.length ? (
            <ul className="mt-10 divide-y divide-navy/10 rounded-xl border border-navy/10">
              {openings.map((o) => (
                <li key={o.title} className="flex flex-col justify-between gap-2 p-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-heading text-lg font-bold text-navy">{o.title}</p>
                    <p className="text-sm">{o.business} · {o.location} · {o.type}</p>
                  </div>
                  <Button to={`/contact?category=Careers`} variant="dark">Apply</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-2xl text-lg">
              Openings will be listed here as they come up. You are welcome to send a general application at any time.
            </p>
          )}
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="How to apply" title="Three simple steps." />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="rounded-xl bg-white p-8 shadow-card">
                <span className="font-heading text-sm font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <Button to="/contact?category=Careers" variant="dark" className="mt-10">Send a general application</Button>
        </Container>
      </section>
    </>
  )
}
