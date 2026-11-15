import { Link } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import { businesses } from '../data/businesses'
import { company, miningDistricts, offices, trust } from '../data/site'
import trustLogo from '../assets/brand/maa-kalarai-trust-logo.webp'

// Skeleton of the homepage sequence in docs/design.md §8. Sections will be split into
// src/components/sections/* as they are built out.
export default function Home() {
  return (
    <>
      <section className="bg-ink py-24 text-white sm:py-32">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">{company.legalName}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-6xl">{company.tagline}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Mining, construction, manufacturing, transportation and industrial training — rooted in Odisha.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/businesses">Explore our businesses</Button>
            <Button to="/contact" variant="secondary">Business Enquiry</Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold">Our businesses</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {businesses.map((b) => (
              <Link
                key={b.slug}
                to={`/businesses/${b.slug}`}
                className="group rounded-lg border-t-2 border-gold bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold group-hover:text-gold">{b.name}</h3>
                <p className="mt-2 text-sm">{b.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Offices</h2>
            <ul className="mt-4 space-y-1">
              {offices.map((o) => <li key={o.city}>{o.city}, {o.state}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Mining districts, Odisha</h2>
            <ul className="mt-4 space-y-1">
              {miningDistricts.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <img src={trustLogo} alt={trust.name} width="350" height="100" className="h-auto w-72" loading="lazy" />
          <div>
            <h2 className="text-2xl font-bold">Community</h2>
            <p className="mt-2 max-w-xl">
              Our charitable work is carried out through the {trust.name} — {trust.tagline.toLowerCase()}.
            </p>
            <Link to="/community" className="mt-3 inline-block font-semibold text-navy underline decoration-gold underline-offset-4">
              Learn about the trust
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold text-white">Project, procurement, training or partnership enquiry?</h2>
          <Button to="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  )
}
