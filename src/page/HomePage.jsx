import AboutHome from '../components/AboutHome/AboutHome'
import FooterHome from '../components/FooterHome/FooterHome'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import HomeOurTeam from '../components/HomeOurTeam/HomeOurTeam'
import HomePlans from '../components/HomePlans/HomePlans'
// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <AboutHome />
        <HomeDepartment name='department-service' />
        <HomeOurTeam name='home-our-team' />
        <HomePlans />
        <FooterHome name='footer-home' />
      </div>
    </>
  )
}
