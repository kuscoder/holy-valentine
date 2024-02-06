import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer, Flip } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '@styles/fonts.scss'
import '@styles/normalize.scss'
import '@styles/main.scss'

import { Layout } from './Layout'
import Home from '@pages/Home'
import Create from '@pages/Create'

//prettier-ignore
export const App = () => (
   <HashRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
         </Route>
      </Routes>

      <ToastContainer
         theme="light"
         limit={7}
         autoClose={5000}
         transition={Flip}
      />
   </HashRouter>
)
