import { Link } from 'react-router-dom'
import './BannerDepartment.scss'

// import { Link } from 'react-router-dom'

export default function BannerDepartment(bannerStyle) {
  return (
    <section className='banner-wrap'>
      <div className='banner-background'>
        <div className={bannerStyle.name}>
          <div className='title-wrap'>
            <div className='title'>
              <p>We are here for your care.</p>
              {'doctor' === bannerStyle.name ? (
                <h1>Doctor 01</h1>
              ) : 'doctor-detail' === bannerStyle.name ? (
                <h1>Doctor Details</h1>
              ) : (
                <h1>Our Services</h1>
              )}
            </div>
            <div className='depart-breadcrumb'>
              <Link to='/'>Home</Link>|
              {'banner-department' === bannerStyle.name ? (
                <p>Services</p>
              ) : 'doctor' === bannerStyle.name ? (
                <p>Doctor</p>
              ) : (
                <p>Details</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
