import HomeBanner from './components/Banner/HomeBanner'
import { useEffect } from 'react'
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
    </>
  )
}
