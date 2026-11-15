import { Link } from 'react-router-dom'

// items: [{ label, to? }] — the last item is the current page.
export default function Breadcrumb({ items, tone = 'dark' }) {
  const muted = tone === 'dark' ? 'text-white/60 hover:text-gold' : 'text-slate hover:text-navy'
  const current = tone === 'dark' ? 'text-white/90' : 'text-navy'
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className={muted}>Home</Link></li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-white/40">/</span>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className={muted}>{item.label}</Link>
            ) : (
              <span aria-current="page" className={current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
