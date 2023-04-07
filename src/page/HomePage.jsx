import AboutHome from '../components/AboutHome/AboutHome'
import BannerHome from '../components/Banner/HomeBanner'
import FooterHome from '../components/FooterHome/FooterHome'
import Header from '../components/Header/Header'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import HomeOurTeam from '../components/HomeOurTeam/HomeOurTeam'
import HomePlans from '../components/HomePlans/HomePlans'
import News from '../components/News/News'
// home-department
export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <BannerHome />
        <AboutHome />
        <HomeDepartment name='home-department' />
        <HomeOurTeam name='home-our-team' />
        <HomePlans />
        <News />
        <FooterHome name='footer-home' />
      </div>
    </>
  )
}
