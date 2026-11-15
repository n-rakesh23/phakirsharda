import Container from './Container'

// Visible marker for content awaiting company approval. Every instance must be gone before launch
// (README §14 "Definition of done"). Use `bare` to render without the page Container.
export default function ContentPending({ title = 'Content to be confirmed', items = [], bare = false }) {
  const box = (
    <div className="rounded-xl border border-dashed border-gold/70 bg-white p-6">
      <p className="flex items-center gap-2 font-heading font-bold text-navy">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-gold" />
        {title}
      </p>
      {items.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      )}
    </div>
  )
  return bare ? box : <Container className="py-16">{box}</Container>
}
