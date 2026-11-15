import Container from '../components/common/Container'
import ContentPending from '../components/common/ContentPending'
import Button from '../components/common/Button'
import { trust } from '../data/site'
import trustLogo from '../assets/brand/maa-kalarai-trust-logo.webp'

// Uses the trust's own palette (navy + red from its logo) on a light background,
// so it reads as a distinct, warmer section while staying inside the group site.
export default function Community() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container className="flex flex-col items-start gap-8">
          <img src={trustLogo} alt={trust.name} width="350" height="100" className="h-auto w-full max-w-md" />
          <p className="max-w-2xl text-lg">
            The {trust.name} carries out the charitable work associated with Phakir Sarada Private Limited.
          </p>
          <Button to="/contact" variant="trust">
            Contact the trust to support
          </Button>
        </Container>
      </section>
      <ContentPending
        items={[
          'Registration details and legal relationship to the company',
          'Focus areas and key initiatives',
          'Areas served',
          'Approved photographs (with consent)',
          'Trust contact details',
        ]}
      />
    </>
  )
}
