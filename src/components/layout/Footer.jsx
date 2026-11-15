import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { mainNav } from '../../data/navigation'
import { company, offices, trust } from '../../data/site'
import trustLogo from '../../assets/brand/maa-kalarai-trust-logo.webp'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-white">{company.legalName}</p>
          <p className="mt-3 text-sm">
            Mining · Construction · Manufacturing · Transportation · Industrial Training
          </p>
        </div>
        <div>
          <p className="font-heading font-semibold text-white">Offices</p>
          <ul className="mt-3 space-y-1 text-sm">
            {offices.map((o) => (
              <li key={o.city}>
                {o.city}, {o.state}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-heading font-semibold text-white">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-1 text-sm">
            {mainNav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold text-white">Our charitable trust</p>
          <Link to="/community" className="mt-3 inline-block rounded-md bg-white p-3">
            <img src={trustLogo} alt={trust.name} width="350" height="100" className="h-auto w-56" loading="lazy" />
          </Link>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <Link to="/privacy" className="hover:text-gold">
            Privacy notice
          </Link>
        </Container>
      </div>
    </footer>
  )
}
