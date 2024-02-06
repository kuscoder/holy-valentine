export function classNames(...list) {
   const classList = []

   list.forEach(item => {
      if (!item) return

      if (typeof item === 'object') {
         for (const key in item) {
            if (item[key]) {
               classList.push(key)
            }
         }
      } else {
         classList.push(String(item))
      }
   })

   return classList.length ? classList.join(' ') : undefined
}
