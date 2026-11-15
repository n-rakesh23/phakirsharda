import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'

export default function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projects & Operations" title="Projects & Operations" intro="Selected projects and operations, published with approval." />
      <ContentPending items={["Paradip construction project details", "Approved project photographs"]} />
    </>
  )
}
