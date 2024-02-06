import { Suspense } from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'
import { useLocales } from '@hooks/useLocales'
import css from './Layout.module.scss'

export const Layout = () => {
   const [search] = useSearchParams()
   const locales = useLocales()
   const lang = search.get('l') || 'en'
   return (
      <Suspense fallback={'Loading...'}>
         <Outlet />

         <footer className={css.footer}>
            <Link to={`/create?l=${lang}`}>{locales.create}</Link>

            <a
               href="https://github.com/kuscoder"
               target="_blank"
            >
               {locales.developer}
            </a>
         </footer>
      </Suspense>
   )
}
