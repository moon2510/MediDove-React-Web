import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DepartmentPage from './page/DepartmentPage'
import HomePage from './page/HomePage'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<DepartmentPage />} path='/services' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
