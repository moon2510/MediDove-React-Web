import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import DepartmentBottom from '../components/DepartmentBottom/DepartmentBottom'
import DoctorFooter from '../components/DoctorFooter/DoctorFooter'
import ForEmployers from '../components/For Employers/ForEmployers'
import Header from '../components/Header/Header'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'

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
