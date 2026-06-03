import { useEffect, useState } from 'react'

/**
* useScrollPosition — returns current scrollY value.
* @param {number} throttleMs - optional throttle in ms (default 16)
*/
export default function useScrollPosition(throttleMs = 16) {
 const [scrollY, setScrollY] = useState(() => (typeof window !== 'undefined' ? window.scrollY : 0))

 useEffect(() => {
   if (typeof window === 'undefined') return
   let ticking = false
   let lastRun = 0

   const update = () => {
     setScrollY(window.scrollY)
     ticking = false
   }

   const onScroll = () => {
     const now = Date.now()
     if (now - lastRun < throttleMs) return
     lastRun = now
     if (!ticking) {
       window.requestAnimationFrame(update)
       ticking = true
     }
   }

   window.addEventListener('scroll', onScroll, { passive: true })
   return () => window.removeEventListener('scroll', onScroll)
 }, [throttleMs])

 return scrollY
}
