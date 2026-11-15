import { company } from '../../data/site'

export function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M4.5 2.5h3l1.5 4-2 1.2a10 10 0 0 0 5.3 5.3l1.2-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 3 4.1 1.5 1.5 0 0 1 4.5 2.5Z" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" className={`shrink-0 ${className}`}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="m3 5.5 7 5.5 7-5.5" strokeLinejoin="round" />
    </svg>
  )
}

// Company phone + email as tap-to-call / tap-to-email links.
export default function ContactLinks({ className = '', linkClassName = '', iconClassName }) {
  return (
    <ul className={className}>
      <li>
        <a href={company.phoneHref} className={`inline-flex items-center gap-2 ${linkClassName}`}>
          <PhoneIcon className={iconClassName} />
          <span className="sr-only">Phone: </span>
          {company.phone}
        </a>
      </li>
      <li>
        <a href={`mailto:${company.email}`} className={`inline-flex items-center gap-2 break-all ${linkClassName}`}>
          <MailIcon className={iconClassName} />
          <span className="sr-only">Email: </span>
          {company.email}
        </a>
      </li>
    </ul>
  )
}
