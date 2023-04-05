import HomeOurTeam from '@app/components/HomeOurTeam/HomeOurTeam'
import AboutHome from '../components/AboutHome/AboutHome'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <AboutHome />
        <HomeDepartment name='home-department' />
        <HomeOurTeam name='home-our-team' />
      </div>
    </>
  )
}
