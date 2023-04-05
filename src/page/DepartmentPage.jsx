import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'

export default function DepartmentPage() {
  return (
    <>
      <div>
        <BannerDepartment subtitle={'Service'} title={'Our Services'} />
        <HomeDepartment name='department-service' />
      </div>
    </>
  )
}
