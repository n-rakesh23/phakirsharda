import Container from './Container'
import Contours from './Contours'
import Breadcrumb from './Breadcrumb'

export default function PageHeader({ eyebrow, title, intro, breadcrumb, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Contours className="text-gold opacity-50" />
      <Container className="relative pb-16 pt-20 sm:pb-24 sm:pt-28">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {eyebrow && (
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-heading text-display-xl font-extrabold text-white">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        {children}
      </Container>
    </section>
  )
}
