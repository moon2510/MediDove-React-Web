import AOS from 'aos'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeBanner from './components/Banner/HomeBanner'
import DepartmentPage from './page/DepartmentPage'
import DoctorPage from './page/DoctorPage'
import HomePage from './page/HomePage'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      delay: 400,
    })
  }, [])
  return (
    <>
      <HomeBanner />
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
