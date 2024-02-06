import { useRef, useEffect } from 'react'

export function useFocusOut(focus, callback) {
   const element = useRef(null)

   useEffect(() => {
      const onOutAction = e => {
         if (focus && element.current && !element.current.contains(e.target)) {
            callback()
         }
      }

      document.addEventListener('click', onOutAction)
      document.addEventListener('focusin', onOutAction)

      return () => {
         document.removeEventListener('click', onOutAction)
         document.removeEventListener('focusin', onOutAction)
      }
   }, [focus])

   return element
}
