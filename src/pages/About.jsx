import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Phakir Sarada Private Limited" intro="A diversified industrial company rooted in Odisha." />
      <ContentPending items={["Company profile", "Mission, vision and values", "Leadership (if approved)"]} />
    </>
  )
}
