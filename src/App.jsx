import Aos from 'aos'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DoctorDetail from './components/Doctor/DoctorDetail/DoctorDetail'
import DepartmentPage from './page/DepartmentPage'
import DoctorPage from './page/DoctorPage'
import HomePage from './page/HomePage'

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1100,
      delay: 400,
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<DepartmentPage />} path='/services' />
          <Route element={<DoctorPage />} path='/doctors' />
          <Route element={<DoctorDetail />} path='doctorDetails' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
