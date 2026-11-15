import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy notice" />
      <ContentPending items={["Privacy notice wording (requires legal review)"]} />
    </>
  )
}
