import AboutHome from '../components/AboutHome/AboutHome'
import FooterHome from '../components/FooterHome/FooterHome'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import HomeOurTeam from '../components/HomeOurTeam/HomeOurTeam'
// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <AboutHome />
        <HomeDepartment name='department-service' />
        <HomeOurTeam name='home-our-team' />
        <FooterHome name='footer-home' />
      </div>
    </>
  )
}
