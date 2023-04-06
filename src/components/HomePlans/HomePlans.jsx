import './HomePlans.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom'
export default function HomePlans() {
  const [planListYear, setPlanListYear] = useState([])
  const [planListMonth, setPlanListMonth] = useState([])
  const fetchDataPlanYear = async () => {
    const result = await axios.get(
      'https://642ce712bf8cbecdb4f959fc.mockapi.io/Plans'
    )
    setPlanListYear(result.data)
    console.log(result)
  }
  const fetchDataPlanMonth = async () => {
    const result = await axios.get(
      'https://642ce712bf8cbecdb4f959fc.mockapi.io/PlanMonthly'
    )
    setPlanListMonth(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchDataPlanYear()
    fetchDataPlanMonth()
  }, [])
  return (
    <section className='home-plan pricing-area gray-bg pt-115 pb-90'>
      <div className='container'>
        <div className='row'>
          <div className='title-left col-xl-8 col-lg-6 col-md-12'>
            <div className='section-title pos-rel mb-75'>
              <div className='section-icon'>
                <img
                  alt=''
                  className='section-back-icon back-icon-left'
                  src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
                />
              </div>
              <div className='section-text pos-rel'>
                <h5>Our Plans</h5>
                <h1>Pricing &amp; Plans</h1>
              </div>
              <div className='section-line pos-rel'>
                <img
                  alt=''
                  src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
                />
              </div>
            </div>
          </div>
          <div className='tab-plan col-xl-7 col-lg-6 col-md-12'>
            <div className='pricing-menu f-right'>
              <ul className='nav nav-pills' id='pills-tab' role='tablist'>
                <li className='nav-item'>
                  <button
                    aria-controls='pills-home'
                    aria-selected='true'
                    className='nav-link active'
                    data-bs-target='#pills-home'
                    data-bs-toggle='tab'
                    data-toggle='pill'
                    id='pills-home-tab'
                    role='tab'
                  >
                    monthly
                  </button>
                </li>
                <li className='nav-item'>
                  <button
                    aria-controls='pills-profile'
                    aria-selected='false'
                    className='nav-link'
                    data-bs-target='#pills-profile'
                    data-bs-toggle='tab'
                    data-toggle='pill'
                    id='pills-profile-tab'
                    role='tab'
                  >
                    yearly
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-12'>
            <div className='card-price-wrap tab-content' id='pills-tabContent'>
              <div
                aria-labelledby='pills-home-tab'
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
              >
                <div className='row'>
                  {planListMonth?.map((plan) => (
                    <div className='col-xl-4 col-lg-4 col-md-6' key={plan.id}>
                      <div className='pricing-box mb-30'>
                        <div className='pricing-thumb mb-45'>
                          <img alt='' src={plan.img} />
                        </div>
                        <div className='pricing-content'>
                          <h1>{plan.title}</h1>
                          <p>
                            Ut enim ad minim veniam, quis istomw nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo.
                          </p>
                          <Link
                            className='price-button-add primary_btn btn-icon ml-0'
                            to='/contact'
                          >
                            <span>+</span>Price: {plan.price}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                aria-labelledby='pills-profile-tab'
                className='tab-pane fade'
                id='pills-profile'
                role='tabpanel'
              >
                <div className='row'>
                  {planListYear?.map((plan) => (
                    <div
                      className='price-card-wrap col-xl-4 col-lg-4 col-md-6'
                      key={plan.id}
                    >
                      <div className='pricing-box mb-30'>
                        <div className='pricing-thumb mb-45'>
                          <img alt='' src={plan.img} />
                        </div>
                        <div className='pricing-content'>
                          <h1>{plan.title}</h1>
                          <p>
                            Ut enim ad minim veniam, quis istomw nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo.
                          </p>
                          <Link
                            className='price-button-add primary_btn btn-icon ml-0'
                            to='/'
                          >
                            <span>+</span>Price: {plan.price}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
