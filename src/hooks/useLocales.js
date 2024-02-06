import { useSearchParams } from 'react-router-dom'
import enLocales from '@locales/en.locales.json'
import ruLocales from '@locales/ru.locales.json'

const localesConfig = {
   en: enLocales,
   ru: ruLocales
}

export function useLocales() {
   const [search] = useSearchParams()
   const language = search.get('language') || 'en'
   const locales = localesConfig[language] ?? localesConfig['en']
   return [locales, language]
}
