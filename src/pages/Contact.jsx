import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import usePageMeta from '../hooks/usePageMeta'
import OfficeAddress from '../components/common/OfficeAddress'
import { mapLink } from '../utils/maps'
import ContactLinks from '../components/common/ContactLinks'
import { company, enquiryCategories, offices } from '../data/site'
import Reveal from '../components/common/Reveal'

// Posts JSON to VITE_ENQUIRY_ENDPOINT (e.g. Formspree, Web3Forms or a serverless function).
// The receiving service MUST validate server-side and apply spam protection (README §9, §11).
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT

const field =
  'mt-1.5 block w-full rounded-md border border-slate/30 bg-white px-3 py-2.5 text-graphite transition-colors focus:border-gold aria-[invalid=true]:border-trust-red'
const labelCls = 'text-sm font-medium text-graphite'

function validate(data) {
  const errors = {}
  if (!data.name?.trim()) errors.name = 'Please enter your name.'
  if (!data.email?.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (data.phone && !/^[+()\d\s-]{7,20}$/.test(data.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!data.category) errors.category = 'Please choose a topic.'
  if (!data.message?.trim() || data.message.trim().length < 10) errors.message = 'Please tell us a little more (at least 10 characters).'
  if (!data.consent) errors.consent = 'Please confirm so we can reply to you.'
  return errors
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label} {required && <span aria-hidden="true" className="text-trust-red">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-trust-red">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  usePageMeta('Contact & Business Enquiry', `Contact ${company.legalName}: business, training, vendor, partnership and careers enquiries.`)
  const [params] = useSearchParams()
  const requested = params.get('category')
  const initialCategory = enquiryCategories.includes(requested) ? requested : ''
  const programme = params.get('programme')
  const initialMessage = programme ? `I would like to know more about the ${programme.slice(0, 80)} programme.` : ''
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | not-configured
  const [errors, setErrors] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.company_website) return // honeypot: silently drop bots
    const found = validate(data)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      form.elements.namedItem(firstInvalid)?.focus()
      return
    }
    if (!ENDPOINT) {
      setStatus('not-configured')
      return
    }
    setStatus('sending')
    try {
      const { company_website: _hp, ...payload } = data
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, source: window.location.href }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const err = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? `${k}-error` : undefined })

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Contact' }]}
        eyebrow="Contact"
        title="Business Enquiry"
        intro="Tell us what you need and we will send it to the right team."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-3 lg:py-24">
        <div className="lg:col-span-2">
          {status === 'sent' ? (
            <div role="status" className="rounded-xl bg-white p-10 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Enquiry sent</p>
              <h2 className="mt-3 text-3xl font-extrabold">Thank you. We have your message.</h2>
              <p className="mt-4">The right team will get back to you.</p>
              <Button type="button" variant="dark" className="mt-8" onClick={() => setStatus('idle')}>
                Send another enquiry
              </Button>
            </div>
          ) : (
            <Reveal>
            <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-xl bg-white p-6 shadow-card sm:grid-cols-2 sm:p-10">
              <Field id="name" label="Name" required error={errors.name}>
                <input id="name" name="name" className={field} autoComplete="name" {...err('name')} />
              </Field>
              <Field id="organisation" label="Organisation">
                <input id="organisation" name="organisation" className={field} autoComplete="organization" />
              </Field>
              <Field id="email" label="Email" required error={errors.email}>
                <input id="email" name="email" type="email" className={field} autoComplete="email" {...err('email')} />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone}>
                <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" {...err('phone')} />
              </Field>
              <Field id="category" label="Topic" required error={errors.category}>
                <select key={initialCategory} id="category" name="category" className={field} defaultValue={initialCategory} {...err('category')}>
                  <option value="" disabled>Select a topic…</option>
                  {enquiryCategories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field id="location" label="Your location">
                <input id="location" name="location" className={field} autoComplete="address-level2" />
              </Field>
              <div className="sm:col-span-2">
                <Field id="message" label="Message" required error={errors.message}>
                  <textarea key={initialMessage} id="message" name="message" rows={6} className={field} defaultValue={initialMessage} {...err('message')} />
                </Field>
              </div>

              {/* Honeypot: hidden from people, tempting to bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="company_website">Leave this field empty</label>
                <input id="company_website" type="text" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="consent" value="yes" className="mt-1 h-4 w-4 accent-navy" {...err('consent')} />
                  <span>
                    I agree that {company.shortName} may use these details to reply to my enquiry. See our{' '}
                    <Link to="/privacy" className="font-semibold text-navy underline">privacy notice</Link>.
                  </span>
                </label>
                {errors.consent && <p id="consent-error" className="mt-1 text-sm text-trust-red">{errors.consent}</p>}
              </div>

              <div className="sm:col-span-2" aria-live="polite">
                <Button type="submit" variant="dark" disabled={status === 'sending'} className="disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </Button>
                {status === 'error' && (
                  <p className="mt-3 text-sm text-trust-red">Sorry, your enquiry could not be sent. Please try again in a moment.</p>
                )}
                {status === 'not-configured' && (
                  <p className="mt-3 text-sm text-trust-red">
                    Online enquiries are not connected yet, so nothing was sent. Please email{' '}
                    <a href={`mailto:${company.email}`} className="font-semibold underline">{company.email}</a> or call{' '}
                    <a href={company.phoneHref} className="font-semibold underline">{company.phone}</a>.
                  </p>
                )}
              </div>
            </form>
            </Reveal>
          )}
        </div>

        <Reveal delay={150}>
        <aside className="space-y-8">
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h2 className="text-xl font-bold">Call or email us</h2>
            <ContactLinks className="mt-4 space-y-3" linkClassName="text-lg font-semibold text-navy transition-colors duration-200 hover:text-gold" iconClassName="h-5 w-5 text-gold" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Offices</h2>
            <ul className="mt-4 space-y-5">
              {offices.map((o) => (
                <li key={o.id} className="border-l-2 border-gold pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{o.label}</p>
                  <p className="font-heading font-bold text-navy">{o.city}, {o.state}</p>
                  {o.entity && <p className="text-xs font-semibold text-graphite">{o.entity}</p>}
                  <OfficeAddress office={o} className="mt-1 text-sm" />
                  <a href={mapLink(o)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 14s5-4.5 5-8.5A5 5 0 0 0 3 5.5C3 9.5 8 14 8 14Z"/><circle cx="8" cy="5.5" r="1.8"/></svg>
                    Map<span className="sr-only"> of the {o.city} office (opens in a new tab)</span>
                  </a>
                  {o.phone && <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block text-sm text-navy underline">{o.phone}</a>}
                  {o.email && <a href={`mailto:${o.email}`} className="block text-sm text-navy underline">{o.email}</a>}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-navy p-6 text-white">
            <p className="font-heading font-bold text-white">Looking for work?</p>
            <p className="mt-2 text-sm text-white/70">Choose "Careers" as the topic, or visit our careers page.</p>
            <Link to="/careers" className="mt-4 inline-block text-sm font-semibold text-gold underline underline-offset-4">Careers</Link>
          </div>
        </aside>
        </Reveal>
      </Container>
    </>
  )
}
