import PageHeader from '../components/common/PageHeader'
import ContentPending from '../components/common/ContentPending'

export default function Locations() {
  return (
    <>
      <PageHeader eyebrow="Locations" title="Our footprint" intro="Offices and operating locations across India." />
      <ContentPending items={["Verified office addresses and map links", "Training centre location(s)", "Trust activity areas"]} />
    </>
  )
}
