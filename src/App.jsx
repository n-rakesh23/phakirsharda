import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Home is bundled eagerly (first paint); every other page is code-split and loaded on demand.
const About = lazy(() => import('./pages/About'))
const Businesses = lazy(() => import('./pages/businesses/Businesses'))
const BusinessPage = lazy(() => import('./pages/businesses/BusinessPage'))
const Projects = lazy(() => import('./pages/Projects'))
const Community = lazy(() => import('./pages/Community'))
const Locations = lazy(() => import('./pages/Locations'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />
}

const page = (el) => <Suspense fallback={<PageFallback />}>{el}</Suspense>

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={page(<About />)} />
        <Route path="businesses" element={page(<Businesses />)} />
        <Route path="businesses/:slug" element={page(<BusinessPage />)} />
        <Route path="projects" element={page(<Projects />)} />
        <Route path="community" element={page(<Community />)} />
        <Route path="locations" element={page(<Locations />)} />
        <Route path="careers" element={page(<Careers />)} />
        <Route path="contact" element={page(<Contact />)} />
        <Route path="privacy" element={page(<Privacy />)} />
        <Route path="*" element={page(<NotFound />)} />
      </Route>
    </Routes>
  )
}
