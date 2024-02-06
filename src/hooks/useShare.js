import { useCallback } from 'react'
import { useCopy } from '@hooks/useCopy'

export function useShare() {
   const copy = useCopy()

   return useCallback(
      async options => {
         try {
            await navigator.share({
               title: options.title,
               url: options.url
            })
         } catch (err) {
            await copy({
               text: options.url,
               success: options.success,
               error: options.error
            })
         }
      },
      [copy]
   )
}
