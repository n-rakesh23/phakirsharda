import Container from '../components/common/Container'
import Button from '../components/common/Button'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/common/Reveal'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <Container className="py-32 text-center">
      <Reveal as="p" className="font-heading text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_var(--color-gold)]">404</Reveal>
      <Reveal delay={100}><h1 className="mt-3 text-4xl font-extrabold">Page not found</h1></Reveal>
      <Reveal as="p" delay={200} className="mt-4">The page you were looking for doesn’t exist or has moved.</Reveal>
      <Reveal delay={300} className="mt-8 flex justify-center gap-3">
        <Button to="/" variant="dark">Go home</Button>
        <Button to="/contact">Contact us</Button>
      </Reveal>
    </Container>
  )
}
