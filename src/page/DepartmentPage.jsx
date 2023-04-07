import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'
import DepartmentBottom from '../components/DepartmentBottom/DepartmentBottom'

export default function DepartmentPage() {
  return (
    <>
      <div>
        <BannerDepartment subtitle={'Service'} title={'Our Services'} />
        <HomeDepartment name='department-service' />
        <DepartmentBottom />
      </div>
    </>
  )
}
