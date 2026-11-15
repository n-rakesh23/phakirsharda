import { useParams } from 'react-router-dom'
import Container from '../../components/common/Container'
import PageHeader from '../../components/common/PageHeader'
import ContentPending from '../../components/common/ContentPending'
import NotFound from '../NotFound'
import { businesses } from '../../data/businesses'

const pending = {
  mining: ['Verified commodities', 'Mine/site names per district', 'Safety and compliance statements'],
  construction: ['Paradip project name, scope and status', 'Client permission', 'Project gallery'],
  manufacturing: ['Product categories', 'Facility details', 'Quality approach'],
  transportation: ['Services offered', 'Fleet details (if approved)', 'Coverage area'],
  'industrial-training': ['Programmes and skills covered', 'Eligibility and duration', 'Training centre location(s)', 'Accreditation / certificates (only if documented)'],
}

export default function BusinessPage() {
  const { slug } = useParams()
  const business = businesses.find((b) => b.slug === slug)
  if (!business) return <NotFound />

  return (
    <>
      <PageHeader eyebrow="Businesses" title={business.name} intro={business.summary} />
      <Container className="pt-16">
        <img
          src={business.image}
          alt={`${business.name} — placeholder image`}
          width="1600"
          height="900"
          className="aspect-video w-full rounded-lg object-cover"
        />
      </Container>
      <ContentPending items={pending[slug]} />
    </>
  )
}
