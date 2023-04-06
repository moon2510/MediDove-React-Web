import './HomeDepartment.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function HomeDepartment(cardstyle) {
  console.log(cardstyle.cardstyle)
  const [serviceList, setServiceList] = useState([])
  const fetchDataService = async () => {
    //get topics
    const result = await axios.get(
      `https://642cdf0f66a20ec9ce900412.mockapi.io/Service`
    )
    setServiceList(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchDataService()
  }, [])

  return (
    <section className={cardstyle.name}>
      <div className='container'>
        <div>
          {'home-department' === cardstyle.name ? (
            <>
              <img
                className='nurse-img'
                src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
              ></img>
              <div className='title'>
                <h5>Departments</h5>
                <h1>Managed Your Heathcare Services</h1>
              </div>

              <img src='https://medi-dove.netlify.app/img/shape/section-title-line.png'></img>
            </>
          ) : (
            <>
              <div className='title-wrap'>
                <div className='left-text'>
                  <img
                    className='nurse-img'
                    src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
                  ></img>
                  <h5>HEALTH CARE FACILITY</h5>
                  <h1>
                    Would you rather stay at home than go into a health care
                    facility?
                  </h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nost rud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium.
                </p>
              </div>
            </>
          )}
        </div>

        <div className='row card-wrap'>
          {serviceList?.map((service) => (
            <div className='center col-xl-4 col-lg-6 col-md-6' key={service.id}>
              <div className='card-department'>
                <div className='profile-container'>
                  <img alt='#' src={service.img}></img>
                </div>

                <div className='name-service'>
                  <h3>
                    <Link className='name-service-link' to='/servicesDetails'>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.description}</p>
                </div>

                <Link className='read-more' to='/servicesDetails'>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
