import './DepartmentBottom.scss'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Row, Col } from 'react-bootstrap'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { PhoneFilled } from '@ant-design/icons'
export default function DepartmentBottom() {
  return (
    <section
      className='department-section'
      style={{ paddingTop: '115px', paddingBottom: '120px' }}
    >
      <div className='container department-wrapper'>
        <div className='row'>
          <div className='col-xl-7 col-lg-6 col-md-10'>
            <div className='departmemt-left-side pos-rel mb-45'>
              <div className='departmemt-left-text section-text-white pos-rel'>
                <h5 style={{ color: '#9ca8b6' }}>make a call</h5>
                <h1 className='white-color' style={{ color: 'white' }}>
                  Quote Calculator
                </h1>
                <p>
                  If you require services on a public holiday, overnight
                  services or live-in services, please call (+00)888.666.88 so
                  we can discuss prices with you.
                </p>
              </div>
            </div>
            <div className='deparment-left-button'>
              <Link className='primary_btn btn-icon btn-icon-green ml-0' to='/'>
                <span>+</span>Make Appointment
              </Link>
            </div>
          </div>
          <div className='col-xl-5 col-lg-6'>
            <div className='department-right-box white-bg'>
              <div
                className='department-right-content'
                style={{ paddingBottom: '40px' }}
              >
                <div className='row'>
                  <div className='col-xl-12'>
                    <select
                      className='form-select select_style'
                      defaultValue={'DEFAULT'}
                    >
                      <option defaultValue={'When would you like our support?'}>
                        When would you like our support?
                      </option>
                      <option defaultValue={'DEFAULT'}>
                        When would you like our support?
                      </option>
                    </select>
                  </div>
                  <div className='col-xl-12'>
                    <select
                      className='form-select select_style'
                      defaultValue={'DEFAULT'}
                    >
                      <option defaultValue={'When would you like us arrive?'}>
                        When would you like us arrive?
                      </option>
                      <option defaultValue={'DEFAULT'}>
                        When would you like our support?
                      </option>
                    </select>
                  </div>
                  <div className='col-xl-12'>
                    <select
                      className='form-select select_style'
                      defaultValue={'DEFAULT'}
                    >
                      <option defaultValue={'How long should we stay?'}>
                        How long should we stay?
                      </option>
                      <option defaultValue={'DEFAULT'}>
                        When would you like our support?
                      </option>
                    </select>
                  </div>
                  <div className='col-xl-12'>
                    <select
                      className='form-select select_style'
                      defaultValue={'DEFAULT'}
                    >
                      <option defaultValue={'Where are you located?'}>
                        Where are you located?
                      </option>
                      <option defaultValue={'DEFAULT'}>
                        When would you like our support?
                      </option>
                    </select>
                  </div>
                  <div className='col-xl-12'>
                    <form action='#' className='department-form'>
                      <input placeholder='Your Phone number' type='text' />
                      <PhoneFilled className='iconPhone' />
                    </form>
                  </div>
                </div>
              </div>
              <a className='primary_btn mt-40' href='#'>
                submit query
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
