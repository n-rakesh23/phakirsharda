import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Businesses from './pages/businesses/Businesses'
import BusinessPage from './pages/businesses/BusinessPage'
import Projects from './pages/Projects'
import Community from './pages/Community'
import Locations from './pages/Locations'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="businesses" element={<Businesses />} />
        <Route path="businesses/:slug" element={<BusinessPage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="community" element={<Community />} />
        <Route path="locations" element={<Locations />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
