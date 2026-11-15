import Container from '../common/Container'
import Contours from '../common/Contours'
import Button from '../common/Button'

// Compact CTA band used at the foot of inner pages. `category` preselects the contact form topic.
export default function EnquiryBand({
  title = 'Talk to us about your requirement.',
  text = 'Send an enquiry and we will route it to the right team.',
  category,
  buttonLabel = 'Make an enquiry',
}) {
  const to = category ? `/contact?category=${encodeURIComponent(category)}` : '/contact'
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20">
      <Contours className="text-gold opacity-50" />
      <Container className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/70">{text}</p>
        </div>
        <Button to={to} className="shrink-0">{buttonLabel}</Button>
      </Container>
    </section>
  )
}
