import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import DoctorFooter from '../components/DoctorFooter/DoctorFooter'
import Header from '../components/Header/Header'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'

export default function DepartmentPage() {
  return (
    <>
      <div>
        <Header />
        <BannerDepartment subtitle={'Service'} title={'Our Services'} />
        <HomeDepartment name='department-service' />
        <DoctorFooter />
      </div>
    </>
  )
}
