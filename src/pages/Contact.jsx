import { useState } from 'react'
import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import { enquiryCategories, offices } from '../data/site'

const field = 'mt-1 block w-full rounded-md border border-slate/30 bg-white px-3 py-2.5 text-graphite focus:border-gold'

// Client-side form only. Submission endpoint is TBD (see .env.example / README §9);
// server-side validation and spam protection are required before launch.
export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) return
    setStatus('not-configured')
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Business Enquiry" intro="Tell us what you need and we will route it to the right team." />
      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          <label className="text-sm font-medium text-graphite">Name *<input name="name" required className={field} autoComplete="name" /></label>
          <label className="text-sm font-medium text-graphite">Organisation<input name="organisation" className={field} autoComplete="organization" /></label>
          <label className="text-sm font-medium text-graphite">Email *<input name="email" type="email" required className={field} autoComplete="email" /></label>
          <label className="text-sm font-medium text-graphite">Phone<input name="phone" type="tel" className={field} autoComplete="tel" /></label>
          <label className="text-sm font-medium text-graphite">Enquiry category *
            <select name="category" required className={field} defaultValue="">
              <option value="" disabled>Select…</option>
              {enquiryCategories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium text-graphite">Location<input name="location" className={field} /></label>
          <label className="text-sm font-medium text-graphite sm:col-span-2">Message *<textarea name="message" required rows={5} className={field} /></label>
          {/* Honeypot field for basic spam filtering */}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="sm:col-span-2">
            <Button type="submit" variant="dark">Send enquiry</Button>
            {status === 'not-configured' && (
              <p role="status" className="mt-3 text-sm text-trust-red">
                The enquiry service is not connected yet. (Development build.)
              </p>
            )}
          </div>
        </form>
        <aside>
          <h2 className="text-xl font-bold">Offices</h2>
          <ul className="mt-4 space-y-3">
            {offices.map((o) => (
              <li key={o.city}>
                <p className="font-semibold text-navy">{o.city}</p>
                <p className="text-sm">{o.address ?? 'Address to be confirmed'}</p>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  )
}
