import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Contours from '../common/Contours'
import Button from '../common/Button'
import OfficeAddress from '../common/OfficeAddress'
import ContactLinks from '../common/ContactLinks'
import TrustLink, { ExternalIcon } from '../common/TrustLink'
import { mainNav } from '../../data/navigation'
import { businesses } from '../../data/businesses'
import { company, offices, trust } from '../../data/site'
import logo from '../../assets/brand/phakir-sarada-logo-176.webp'
import trustLogo from '../../assets/brand/maa-kalarai-trust-logo.webp'

const year = new Date().getFullYear()
const companyLinks = mainNav.filter((n) => !n.children)

function ColTitle({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{children}</p>
}

const linkCls = 'text-white/70 transition-colors duration-200 hover:text-gold'

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white/70">
      <Contours className="-z-10 text-gold opacity-25" />

      {/* Brand band */}
      <Container className="flex flex-col gap-8 border-b border-white/10 py-14 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="" width="64" height="64" className="h-16 w-16 rounded-full bg-white" loading="lazy" />
          <span className="font-heading text-xl font-extrabold leading-tight text-white">
            {company.shortName}
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Private Limited</span>
          </span>
        </Link>
        <p className="max-w-md font-heading text-2xl font-bold leading-snug text-white">
          Empowering Lives. <span className="text-gold">Igniting Futures.</span>
        </p>
        <Button to="/contact" className="self-start md:self-auto">Business Enquiry</Button>
      </Container>

      {/* Columns */}
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <nav aria-label="Businesses" className="lg:col-span-2">
          <ColTitle>Businesses</ColTitle>
          <ul className="mt-5 space-y-2.5 text-sm">
            {businesses.map((b) => (
              <li key={b.slug}><Link to={`/businesses/${b.slug}`} className={linkCls}>{b.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <ColTitle>Company</ColTitle>
          <ul className="mt-5 space-y-2.5 text-sm">
            {companyLinks.map((n) => (
              <li key={n.to}><Link to={n.to} className={linkCls}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-5">
          <ColTitle>Offices</ColTitle>
          <ul className="mt-5 grid gap-6 text-sm sm:grid-cols-2">
            {offices.map((o) => (
              <li key={o.id}>
                <p className="font-semibold text-white">{o.city}</p>
                {o.label !== 'Office' && <p className="text-xs text-gold">{o.label}</p>}
                {o.entity && <p className="text-xs text-white/70">{o.entity}</p>}
                <OfficeAddress office={o} className="mt-1.5 text-xs text-white/55" />
              </li>
            ))}
          </ul>
          <ContactLinks
            className="mt-8 flex flex-col gap-2 text-sm sm:flex-row sm:gap-8"
            linkClassName="font-semibold text-white/90 transition-colors duration-200 hover:text-gold"
            iconClassName="h-4 w-4 text-gold"
          />
        </div>

        <div className="lg:col-span-3">
          <ColTitle>Our charitable trust</ColTitle>
          <TrustLink className="mt-5 inline-block rounded-lg bg-white p-3 transition-transform duration-300 ease-smooth hover:scale-[1.02]">
            <img src={trustLogo} alt={trust.name} width="350" height="100" className="h-auto w-56" loading="lazy" />
          </TrustLink>
          <TrustLink className="mt-3 flex items-center gap-1.5 text-sm text-white/70 hover:text-gold">
            maakalaraicharitabletrust.com <ExternalIcon />
          </TrustLink>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <Link to="/privacy" className="transition-colors hover:text-gold">Privacy notice</Link>
        </Container>
      </div>
    </footer>
  )
}
