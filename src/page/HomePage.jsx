import AboutHome from '../components/AboutHome/AboutHome'
import HomeConsultant from '../components/HomeConsultant/HomeConsultant'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import BannerHome from '../components/Banner/HomeBanner'
import FooterHome from '../components/FooterHome/FooterHome'
import Header from '../components/Header/Header'
import HomeOurTeam from '../components/HomeOurTeam/HomeOurTeam'
import HomePlans from '../components/HomePlans/HomePlans'
import News from '../components/News/News'
import Available from '../components/Doctor/DoctorOne/Available/Available'
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
        <Available />
        <HomePlans />

        <HomeConsultant />
        <News />
        <FooterHome name='footer-home' />
      </div>
    </>
  )
}
