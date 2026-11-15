import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../common/Container'
import Button from '../common/Button'
import { mainNav } from '../../data/navigation'
import { company } from '../../data/site'
import logo from '../../assets/brand/phakir-sarada-logo.jpeg'

const linkCls = ({ isActive }) =>
  `rounded px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-white/85'}`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" width="44" height="44" className="h-11 w-11 rounded-full bg-white" />
          <span className="font-heading text-base font-bold leading-tight text-white">
            {company.shortName}
            <span className="block text-[11px] font-medium uppercase tracking-widest text-white/60">
              Private Limited
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center xl:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.to} className="group relative">
                <NavLink to={item.to} className={linkCls} aria-haspopup="true">
                  {item.label} ▾
                </NavLink>
                <div className="invisible absolute left-0 top-full w-56 rounded-md bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-4 py-2 text-sm text-graphite hover:bg-offwhite hover:text-navy"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" className="hidden sm:inline-flex">
            Business Enquiry
          </Button>
          <button
            type="button"
            className="rounded p-2 text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy xl:hidden" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          <Container className="flex flex-col py-4">
            {mainNav.map((item) => (
              <div key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkCls}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 flex flex-col border-l border-white/15 pl-2">
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to} className={linkCls}>
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button to="/contact" className="mt-4 sm:hidden">
              Business Enquiry
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
