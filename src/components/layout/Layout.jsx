import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from '../motion/ScrollProgress'

export default function Layout() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      {/* The header is fixed. The homepage hero sits underneath it (transparent header);
          every other page is offset by the header height. Keyed by route for the page fade. */}
      <main id="main" key={pathname} className={`flex-1 animate-page-in ${home ? '' : 'pt-18'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
