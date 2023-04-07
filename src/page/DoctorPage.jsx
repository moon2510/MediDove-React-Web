import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import DoctorDetail from '../components/Doctor/DoctorDetail/DoctorDetail'
import Available from '../components/Doctor/DoctorOne/Available/Available'

// home-department
export default function DoctorPage() {
  return (
    <>
      <div>
        <BannerDepartment subtitle={'Doctor'} title={'Doctor 01'} />
        <DoctorDetail />
        <Available />
      </div>
    </>
  )
}
