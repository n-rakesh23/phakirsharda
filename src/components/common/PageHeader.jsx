import Container from './Container'

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="bg-ink py-16 text-white sm:py-24">
      <Container>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/75">{intro}</p>}
      </Container>
    </section>
  )
}
