import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DoctorDetails from './components/Doctor/DoctorDetails/DoctorDetails'

import DepartmentPage from './page/DepartmentPage'
import HomePage from './page/HomePage'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<DepartmentPage />} path='/services' />
          <Route element={<DoctorDetails />} path='/doctorDetails' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
