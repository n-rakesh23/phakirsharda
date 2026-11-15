import { Link } from 'react-router-dom'
import Container from '../../components/common/Container'
import PageHeader from '../../components/common/PageHeader'
import { businesses } from '../../data/businesses'

export default function Businesses() {
  return (
    <>
      <PageHeader eyebrow="Businesses" title="Five businesses, one group" />
      <Container className="grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((b) => (
          <Link key={b.slug} to={b.slug} className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-bold">{b.name}</h2>
            <p className="mt-2 text-sm">{b.summary}</p>
          </Link>
        ))}
      </Container>
    </>
  )
}
