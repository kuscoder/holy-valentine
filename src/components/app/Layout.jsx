import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => (
   <Suspense fallback={'Loading...'}>
      <Outlet />
   </Suspense>
)
