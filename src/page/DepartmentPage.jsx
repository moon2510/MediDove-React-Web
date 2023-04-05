import BannerDepartment from '../components/BannerDepartment/BannerDepartment'
import HomeDepartment from '../components/HomeDepartment/HomeDepartment'

export default function DepartmentPage() {
  return (
    <>
      <div>
        <BannerDepartment name='banner-department' />
        <HomeDepartment name='department-service' />
      </div>
    </>
  )
}
