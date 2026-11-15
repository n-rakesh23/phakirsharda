import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Jump (not smooth-scroll) to the top on navigation; the global `scroll-behavior: smooth`
// would otherwise animate all the way up from the previous page's scroll position.
// In-page hash links still scroll smoothly.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
