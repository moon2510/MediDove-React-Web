import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './page/HomePage'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
