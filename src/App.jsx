import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DepartmentPage from './page/DepartmentPage'
import DoctorPage from './page/DoctorPage'
import HomePage from './page/HomePage'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<DepartmentPage />} path='/services' />
          <Route element={<DoctorPage />} path='/doctors' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
