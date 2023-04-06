import AboutHome from '../components/AboutHome/AboutHome'
import HomeConsultant from '../components/HomeConsultant/HomeConsultant'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'

// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <AboutHome />
        <HomeDepartment name='home-department' />
        <HomeConsultant />
      </div>
    </>
  )
}
