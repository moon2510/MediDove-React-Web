import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import DoctorFooter from '../components/DoctorFooter/DoctorFooter'
import Header from '../components/Header/Header'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import DepartmentBottom from '../components/DepartmentBottom/DepartmentBottom'

export default function DepartmentPage() {
  return (
    <>
      <div>
        <Header />
        <BannerDepartment subtitle={'Service'} title={'Our Services'} />
        <HomeDepartment name='department-service' />
        <DepartmentBottom />
        <ForEmployers />
        <DoctorFooter />
      </div>
    </>
  )
}
