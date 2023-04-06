import { Link } from 'react-router-dom'
import './BannerDepartment.scss'

// import { Link } from 'react-router-dom'

export default function BannerDepartment({ title, subtitle }) {
  return (
    <section className='breadcrumb-bg pt-200 pb-180 page_header_bg banner-background'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 col-md-9'>
            <div className='page-title'>
              <p className='small-text pb-15'>We are here for your care.</p>
              <h1>{title}</h1>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center'>
            <div className='page-breadcumb'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb '>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li aria-current='page' className='breadcrumb-item active'>
                    {subtitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
