import { Link } from 'react-router-dom'

const variants = {
  // Gold with a light sheen that sweeps across on hover
  primary:
    'relative isolate overflow-hidden bg-gold text-ink shadow-[0_8px_24px_-10px_rgb(214_166_79/0.7)] hover:bg-[#dfb262] hover:shadow-[0_12px_30px_-10px_rgb(214_166_79/0.85)] before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/45 before:to-transparent before:transition-transform before:duration-700 before:ease-smooth hover:before:translate-x-full',
  secondary: 'border border-current text-current hover:bg-white/10',
  dark: 'bg-navy text-white hover:bg-ink',
  trust: 'bg-trust-red text-white hover:bg-trust-navy',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-smooth active:scale-[0.98] ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
