import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Reveal from '../common/Reveal'
import { trust } from '../../data/site'
import trustLogo from '../../assets/brand/maa-kalarai-trust-logo.webp'

// The trust uses its own navy and red (from its logo) for a warmer, distinct feel.
export default function CommunityTeaser() {
  return (
    <section className="py-[clamp(4rem,9vw,8rem)]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-trust-navy/10 bg-white p-8 shadow-card sm:p-14">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-trust-red/5" />
            <div aria-hidden="true" className="absolute -bottom-32 right-24 h-72 w-72 rounded-full bg-trust-navy/5" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trust-red">Community</p>
                <h2 className="mt-4 text-display-md font-extrabold text-trust-navy">{trust.tagline}.</h2>
                <p className="mt-5 max-w-[56ch] text-lg leading-relaxed">
                  Our charitable work is carried out through the {trust.name}.
                </p>
                <Link
                  to="/community"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-trust-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-trust-navy"
                >
                  About the trust <span aria-hidden="true">→</span>
                </Link>
              </div>
              <img
                src={trustLogo}
                alt={trust.name}
                width="350"
                height="100"
                loading="lazy"
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
