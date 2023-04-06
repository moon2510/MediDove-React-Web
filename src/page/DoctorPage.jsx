import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import CounterArea from '../components/CounterArea/CounterArea'
import Available from '../components/Doctor/DoctorOne/Available/Available'
import DoctorFooter from '../components/DoctorFooter/DoctorFooter'

// home-department
export default function DoctorPage() {
  return (
    <>
      <div>
        <BannerDepartment subtitle={'Doctor'} title={'Doctor 01'} />
        <Available />
        <CounterArea />
        <DoctorFooter />
      </div>
    </>
  )
}
