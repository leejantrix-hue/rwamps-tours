import { useEffect } from 'react'

/**
* Locks body scroll when `locked` is true.
* Useful for modal/menu overlays.
*/
export default function useScrollLock(locked) {
 useEffect(() => {
   if (!locked) return
   const original = document.body.style.overflow
   document.body.style.overflow = 'hidden'
   return () => {
     document.body.style.overflow = original
   }
 }, [locked])
}
