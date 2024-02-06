import { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useLocales } from '@hooks/useLocales'
import css from './Layout.module.scss'

export const Layout = () => {
   const [locales, language] = useLocales()

   return (
      <Suspense fallback={'Loading...'}>
         <Outlet />

         <footer className={css.footer}>
            <Link to={`/create?language=${language}`}>{locales.create}</Link>

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
