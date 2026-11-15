import Container from './Container'

// Visible marker for content awaiting company approval. Must be removed before launch.
export default function ContentPending({ items = [] }) {
  return (
    <Container className="py-16">
      <div className="rounded-lg border border-dashed border-gold/70 bg-white p-6">
        <p className="font-heading font-bold text-navy">Content to be confirmed</p>
        {items.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        )}
      </div>
    </Container>
  )
}
