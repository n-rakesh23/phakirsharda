import { useParams } from 'react-router-dom'
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
      <ContentPending items={pending[slug]} />
    </>
  )
}
