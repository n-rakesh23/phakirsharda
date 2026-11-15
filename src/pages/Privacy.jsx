import Container from '../components/common/Container'
import PageHeader from '../components/common/PageHeader'
import usePageMeta from '../hooks/usePageMeta'
import { company } from '../data/site'
import Reveal from '../components/common/Reveal'

// DRAFT. Must be reviewed by a legal adviser (including against India's Digital Personal
// Data Protection Act, 2023) and completed with real contact details before launch.
export default function Privacy() {
  usePageMeta('Privacy Notice', `How ${company.legalName} handles personal information submitted through this website.`)
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Privacy notice' }]} eyebrow="Legal" title="Privacy notice" />
      <Container className="py-16 lg:py-24">
        <Reveal className="mb-10 rounded-xl border border-dashed border-gold/70 bg-white p-6 text-sm">
          <p className="font-heading font-bold text-navy">Draft for legal review</p>
          <p className="mt-2">This notice is a working draft and is not yet in force. It must be reviewed and approved before the website launches.</p>
        </Reveal>
        <article className="max-w-[70ch] space-y-8 leading-relaxed">
          <Reveal as="section">
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p className="mt-3">This website is operated by {company.legalName}. Contact details for privacy questions will be added here.</p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">What we collect</h2>
            <p className="mt-3">
              When you send an enquiry, we collect the details you give us: your name, email address and message, and
              if you choose to share them, your organisation, phone number and location.
            </p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">How we use it</h2>
            <p className="mt-3">We use these details only to respond to your enquiry and to send it to the right part of our business.</p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">Sharing</h2>
            <p className="mt-3">Details of any service providers who process enquiries for us, such as a form or email provider, will be listed here.</p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">How long we keep it</h2>
            <p className="mt-3">The retention period is to be confirmed.</p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">Your rights</h2>
            <p className="mt-3">How to access, correct or delete your information will be described here following legal review.</p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-2xl font-bold">Cookies and analytics</h2>
            <p className="mt-3">This website does not currently use analytics or advertising cookies.</p>
          </Reveal>
        </article>
      </Container>
    </>
  )
}
