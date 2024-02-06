import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import '@styles/fonts.scss'
import '@styles/normalize.scss'
import '@styles/main.scss'

import { Layout } from './Layout'
import Home from '@pages/Home'
import Create from '@pages/Create'

//prettier-ignore
export const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
         </Route>
      </Routes>
   </BrowserRouter>
)
