import { useSearchParams } from 'react-router-dom'
import enLocales from '@locales/en.locales.json'
import ruLocales from '@locales/ru.locales.json'

const locales = {
   en: enLocales,
   ru: ruLocales
}

export function useLocales() {
   const [search] = useSearchParams()
   return locales[search.get('l')] ?? locales['en']
}
