import { trust } from '../../data/site'

// Every trust logo and trust call-to-action points to the trust's own website,
// opened in a new tab (with a screen-reader hint).
export default function TrustLink({ className = '', children, showIcon = false, ...props }) {
  return (
    <a href={trust.website} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
      {showIcon && <ExternalIcon />}
      <span className="sr-only"> (opens the {trust.name} website in a new tab)</span>
    </a>
  )
}

export function ExternalIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={`inline-block shrink-0 ${className}`}>
      <path d="M6 3H3v10h10v-3M9 2h5v5M14 2 7 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
