import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import Available from '../components/Doctor/DoctorOne/Available/Available'

// home-department
export default function DoctorPage() {
  return (
    <>
      <div>
        <BannerDepartment subtitle={'Doctor'} title={'Doctor 01'} />
        <Available />
      </div>
    </>
  )
}
