export default function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-display-md font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : ''}`}>{intro}</p>}
    </div>
  )
}
