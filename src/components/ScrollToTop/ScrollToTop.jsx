import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
* Scrolls window to top on every route change.
* Mount once near the top of the tree (inside the Router).
*/
function ScrollToTop() {
 const { pathname } = useLocation()
 useEffect(() => {
   window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
 }, [pathname])
 return null
}

export default ScrollToTop
