import Container from '../components/common/Container'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">404</p>
      <h1 className="mt-3 text-4xl font-extrabold">Page not found</h1>
      <p className="mt-4">The page you were looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button to="/" variant="dark">Go home</Button>
        <Button to="/contact">Contact us</Button>
      </div>
    </Container>
  )
}
