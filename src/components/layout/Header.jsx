import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import Container from '../common/Container'
import Button from '../common/Button'
import Collapse from '../common/Collapse'
import { mainNav } from '../../data/navigation'
import { company } from '../../data/site'
import { duration, ease } from '../../lib/motion'
import logo from '../../assets/brand/phakir-sarada-logo-176.webp'

// Desktop link with a gold indicator that glides between active items (shared layoutId).
function DesktopLink({ to, end, children, className = '' }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative rounded px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-gold ${isActive ? 'text-white' : 'text-white/80'} ${className}`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <motion.span
              layoutId="nav-active"
              aria-hidden="true"
              className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
              transition={{ duration: 0.45, ease: ease.out }}
            />
          )}
        </>
      )}
    </NavLink>
  )
}

function Chevron({ open, className = '' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-smooth ${open ? 'rotate-180' : ''} ${className}`}
    >
      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Hover/focus dropdown with keyboard support (Enter/Space on the chevron, Escape to close).
function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)
  const btn = useRef(null)
  const timer = useRef(null)
  const show = () => { clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div
      ref={wrap}
      className="relative flex items-center"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => !wrap.current?.contains(e.relatedTarget) && setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) { setOpen(false); btn.current?.focus() }
      }}
    >
      <DesktopLink to={item.to} className="pr-1">{item.label}</DesktopLink>
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="desktop-businesses-menu"
        onClick={() => setOpen((o) => !o)}
        className="rounded p-1 text-white/80 transition-colors duration-200 hover:text-gold"
      >
        <span className="sr-only">{open ? `Hide ${item.label} menu` : `Show ${item.label} menu`}</span>
        <Chevron open={open} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="desktop-businesses-menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.15 } }}
            transition={{ duration: duration.fast, ease: ease.out }}
            className="absolute left-0 top-full origin-top-left pt-3"
            onClick={(e) => e.target.closest('a') && setOpen(false)}
          >
            <div className="w-64 overflow-hidden rounded-xl bg-white p-2 shadow-card-hover ring-1 ring-navy/5">
              {item.children.map((c, i) => (
                <motion.div
                  key={c.to}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: duration.fast, ease: ease.out, delay: 0.03 * i }}
                >
                  <NavLink
                    to={c.to}
                    className={({ isActive }) =>
                      `group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 hover:bg-offwhite ${
                        isActive ? 'font-semibold text-navy' : 'text-graphite hover:text-navy'
                      }`
                    }
                  >
                    {c.label}
                    <span aria-hidden="true" className="text-gold opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100">→</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const mobileLinkCls = ({ isActive }) =>
  `flex min-h-12 items-center rounded-lg px-3 text-base font-medium transition-colors duration-200 hover:bg-white/5 hover:text-gold ${
    isActive ? 'text-gold' : 'text-white/90'
  }`

function MobileGroup({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `mobile-sub-${item.to.replace(/\W+/g, '')}`
  return (
    <div>
      <div className="flex items-center">
        <NavLink to={item.to} end className={(s) => `${mobileLinkCls(s)} flex-1`}>
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex h-12 w-12 items-center justify-center rounded-lg text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-gold"
        >
          <span className="sr-only">{open ? `Hide ${item.label} pages` : `Show ${item.label} pages`}</span>
          <Chevron open={open} />
        </button>
      </div>
      <Collapse open={open} id={panelId}>
        <div className="mb-2 ml-3 flex flex-col border-l border-gold/40 pl-3">
          {item.children.map((c) => (
            <NavLink key={c.to} to={c.to} className={({ isActive }) => `${mobileLinkCls({ isActive })} min-h-11 text-[15px]`}>
              {c.label}
            </NavLink>
          ))}
        </div>
      </Collapse>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Transparent only over the homepage's full-screen hero, at the very top, with the menu closed.
  const transparent = pathname === '/' && !scrolled && !open

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.base, ease: ease.out }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-smooth ${
        transparent ? 'bg-transparent' : 'bg-ink/90 shadow-[0_1px_0_rgb(255_255_255/0.06),0_10px_30px_-10px_rgb(0_0_0/0.5)] backdrop-blur-md'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" width="44" height="44" className="h-11 w-11 rounded-full bg-white" />
          <span className="font-heading text-base font-bold leading-tight text-white">
            {company.shortName}
            <span className="block text-[11px] font-medium uppercase tracking-widest text-white/60">Private Limited</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center xl:flex">
          {mainNav.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.to} item={item} />
            ) : (
              <DesktopLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </DesktopLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper controls visibility: Button's own inline-flex would override `hidden`. */}
          <span className="hidden md:block">
            <Button to="/contact">Business Enquiry</Button>
          </span>
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-transform duration-300 ease-smooth ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-6 rounded bg-current transition-transform duration-300 ease-smooth ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </Container>

      <Collapse open={open} id="mobile-menu" className="border-t border-white/10 bg-ink xl:hidden">
        <nav
          aria-label="Mobile"
          onClick={(e) => e.target.closest('a') && setOpen(false)}
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain"
        >
          <Container key={pathname} className="flex flex-col py-4">
            {mainNav.map((item) =>
              item.children ? (
                <MobileGroup key={item.to} item={item} defaultOpen={pathname.startsWith(item.to)} />
              ) : (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={mobileLinkCls}>
                  {item.label}
                </NavLink>
              ),
            )}
            <Button to="/contact" className="mt-4 md:hidden">
              Business Enquiry
            </Button>
          </Container>
        </nav>
      </Collapse>
    </motion.header>
  )
}
