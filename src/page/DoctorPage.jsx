import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import DoctorDetail from '../components/Doctor/DoctorDetail/DoctorDetail'
import CounterArea from '../components/CounterArea/CounterArea'
import Available from '../components/Doctor/DoctorOne/Available/Available'
import DoctorFooter from '../components/DoctorFooter/DoctorFooter'
import Header from '../components/Header/Header'
import HomeOurTeam from '../components/HomeOurTeam/HomeOurTeam'
// home-department
export default function DoctorPage() {
  return (
    <>
      <div>
        <Header />
        <BannerDepartment subtitle={'Doctor'} title={'Doctor 01'} />
        <HomeOurTeam name='home-our-team' />
        <Available />
        <CounterArea />
        <DoctorFooter />
      </div>
    </>
  )
}
