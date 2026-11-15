import { Link } from 'react-router-dom'
import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import EnquiryBand from '../components/sections/EnquiryBand'
import usePageMeta from '../hooks/usePageMeta'
import { businesses } from '../data/businesses'
import { company, miningDistricts, offices, trust } from '../data/site'
import logo from '../assets/brand/phakir-sarada-logo.jpeg'
import trustLogo from '../assets/brand/maa-kalarai-trust-logo.webp'

const facts = [
  { value: businesses.length, label: 'Business verticals' },
  { value: offices.length, label: 'Offices in Karnataka and Odisha' },
  { value: miningDistricts.length, label: 'Mining districts in Odisha' },
  { value: 1, label: 'Charitable trust' },
]

export default function About() {
  usePageMeta(
    'About Us',
    'Phakir Sarada Private Limited is a diversified industrial company rooted in Odisha, working across mining, construction, manufacturing, transportation and industrial training.',
  )
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'About Us' }]}
        eyebrow="About us"
        title="An industrial group rooted in Odisha."
        intro={`${company.legalName} brings together five businesses: mining, construction, manufacturing, transportation and industrial training.`}
      />

      {/* Who we are */}
      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow="Who we are" title="One parent company, five businesses." />
            <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed">
              <p>
                {company.legalName} is a diversified industrial company. Our offices are in Bhubaneswar and Paradip
                in Odisha, and in Bengaluru, Karnataka.
              </p>
              <p>
                We have mining operations in the Keonjhar, Sundargarh, Jajpur and Mayurbhanj districts of Odisha,
                and construction activity in Paradip. Alongside these, we run manufacturing, transportation and
                industrial training businesses.
              </p>
              <p>Our charitable work is carried out through the {trust.name}.</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full border border-gold/40" aria-hidden="true" />
              <div className="absolute inset-6 rounded-full border border-gold/20" aria-hidden="true" />
              <img
                src={logo}
                alt={`${company.legalName} logo`}
                width="1280"
                height="1280"
                loading="lazy"
                className="absolute inset-12 h-[calc(100%-6rem)] w-[calc(100%-6rem)] rounded-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* At a glance */}
      <section className="bg-ink py-16 text-white">
        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col bg-ink p-6 sm:p-8">
                <dt className="order-2 mt-2 text-sm text-white/60">{f.label}</dt>
                <dd className="order-1 font-heading text-5xl font-extrabold text-white">{String(f.value).padStart(2, '0')}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Mission / vision / values — awaiting approved wording */}
      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Purpose" title="Mission, vision and values." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {['Mission', 'Vision', 'Values'].map((t) => (
              <div key={t} className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm">Approved wording to be supplied by the company.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Businesses */}
      <section className="bg-white py-[clamp(4rem,8vw,7rem)]">
        <Container>
          <SectionHeading eyebrow="Our businesses" title="What we do." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {businesses.map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/businesses/${b.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-navy/10 p-6 transition hover:border-gold hover:shadow-card"
                >
                  <img src={b.icon} alt="" width="36" height="36" className="h-9 w-9" />
                  <span className="mt-4 font-heading text-lg font-bold text-navy group-hover:text-gold">{b.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Community */}
      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Community" title="Giving back." />
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed">
              The {trust.name} carries out our charitable work. Its guiding words are "{trust.tagline}".
            </p>
            <Link to="/community" className="mt-6 inline-block font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
              About the trust
            </Link>
          </div>
          <img src={trustLogo} alt={trust.name} width="350" height="100" loading="lazy" className="mx-auto h-auto w-full max-w-md" />
        </Container>
      </section>

      <ContentPending
        title="Leadership"
        items={['Leadership names, roles and photographs (only if approved for publication)']}
      />

      <EnquiryBand />
    </>
  )
}
