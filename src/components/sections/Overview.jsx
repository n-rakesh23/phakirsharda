import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Reveal from '../common/Reveal'
import { company } from '../../data/site'
import logo from '../../assets/brand/phakir-sarada-logo.jpeg'

export default function Overview() {
  return (
    <section className="bg-white py-[clamp(4rem,9vw,8rem)]">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
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
        <Reveal className="lg:col-span-7" delay={120}>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Who we are
          </p>
          <h2 className="text-display-md font-extrabold">An industrial group rooted in Odisha.</h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
            {company.legalName} works across mining, construction, manufacturing, transportation and
            industrial training. We have offices in Bhubaneswar and Paradip in Odisha and in
            Bengaluru, Karnataka, and mining operations in four districts of Odisha.
          </p>
          <p className="mt-4 max-w-[62ch] leading-relaxed">
            Through the Maakalarai Charitable Trust, we also support the communities around us.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
          >
            More about us
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
