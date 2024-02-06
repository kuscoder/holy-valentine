import { useCallback } from 'react'

export function useCopy() {
   return useCallback(async options => {
      try {
         await navigator.clipboard.writeText(options.text)
         options.success?.()
      } catch (err) {
         options.error?.()
      }
   }, [])
}
