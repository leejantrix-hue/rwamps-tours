import { useEffect, useState } from 'react'

/**
* useMediaQuery — reactive media query hook.
* @param {string} query - e.g. '(max-width: 768px)'
* @returns boolean
*/
export default function useMediaQuery(query) {
 const getMatch = () =>
   typeof window !== 'undefined' && window.matchMedia
     ? window.matchMedia(query).matches
     : false

 const [matches, setMatches] = useState(getMatch)

 useEffect(() => {
   if (typeof window === 'undefined' || !window.matchMedia) return
   const mql = window.matchMedia(query)
   const handler = (e) => setMatches(e.matches)
   setMatches(mql.matches)

   if (mql.addEventListener) mql.addEventListener('change', handler)
   else mql.addListener(handler)

   return () => {
     if (mql.removeEventListener) mql.removeEventListener('change', handler)
     else mql.removeListener(handler)
   }
 }, [query])

 return matches
}
