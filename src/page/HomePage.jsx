import AboutHome from '../components/AboutHome/AboutHome'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <AboutHome />
        <HomeDepartment name='department-service' />
      </div>
    </>
  )
}
