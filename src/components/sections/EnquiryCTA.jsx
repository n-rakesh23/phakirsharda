import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Contours from '../common/Contours'

const routes = [
  'Mining',
  'Construction',
  'Manufacturing',
  'Transportation and logistics',
  'Industrial training',
  'Vendor or supplier registration',
  'Business partnership',
]

export default function EnquiryCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-[clamp(4rem,9vw,7rem)] text-white">
      <Contours className="text-gold opacity-60" />
      <Container className="relative">
        <h2 className="max-w-3xl text-display-md font-extrabold text-white">
          Have a project, a supply need or a partnership in mind?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/70">Choose a topic and we will send your enquiry to the right team.</p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {routes.map((r) => (
            <li key={r}>
              <Link
                to={`/contact?category=${encodeURIComponent(r)}`}
                className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-5 text-sm font-medium text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                {r}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
