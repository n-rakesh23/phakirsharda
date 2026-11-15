import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-gold text-ink hover:bg-[#c8963f]',
  secondary: 'border border-current text-current hover:bg-white/10',
  dark: 'bg-navy text-white hover:bg-ink',
  trust: 'bg-trust-red text-white hover:bg-trust-navy',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
