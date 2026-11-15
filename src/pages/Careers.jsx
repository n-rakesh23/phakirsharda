import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'

export default function Careers() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Work with us" intro="Opportunities across our businesses." />
      <ContentPending items={["Current openings or general application instructions", "Careers contact email"]} />
    </>
  )
}
