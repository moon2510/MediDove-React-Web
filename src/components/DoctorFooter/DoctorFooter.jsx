import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeSingleFooterBlog from '../HomeSingleFooterBlog/HomeSingleFooterBlog'
import './DoctorFooter.scss'

export default function DoctorFooter() {
  const [personList, setPersonList] = useState([])
  const fetchDataPerson = async () => {
    const result = await axios.get(
      `https://642f0d9c8ca0fe3352df482f.mockapi.io/footer`
    )
    setPersonList(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchDataPerson()
  }, [])
  return (
    <>
      <div style={{ height: '100px' }}></div>
      <footer className='doctor-footer'>
        <div className='footer-doctor-top primary-bg footer-map pos-rel pt-120 pb-80'>
          <div className='container'>
            <div
              className='row align-items-center'
              style={{ position: 'relative', zIndex: '9999' }}
            >
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-contact-info footer-contact-info-3 mb-40'>
                  <div className='footer-logo mb-35'>
                    <Link to='/'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/logo/footer-logo-3.png'
                      />
                    </Link>
                  </div>
                  <div className='footer-contact-content mb-25'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut.
                    </p>
                  </div>
                  <div className='footer-emailing'>
                    <ul>
                      <li>
                        <i className='far fa-envelope'></i>
                        info@examplemedical.com
                      </li>
                      <li>
                        <i className='far fa-clone'></i>examplemedical.com
                      </li>
                      <li>
                        <i className='far fa-flag'></i>227 Marion Street,
                        Columbia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-widget-left mb-40'>
                  <div className='footer-title'>
                    <h3>Departments</h3>
                  </div>
                  <div className='footer-menu footer-menu-2'>
                    <ul>
                      <li>
                        <Link to='/servicesDetails'>Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Departments</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Family Medicine</Link>
                      </li>
                      <li>
                        <Link to='/doctors'>Our Doctors</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Women’s Health</Link>
                      </li>
                      <li>
                        <Link to='/blogs'>News</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Optician</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Shop</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Pediatrics</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                      <li>
                        <Link to='/servicesDetails'>Dermatology</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-widget-right mb-40'>
                  <div className='footer-title'>
                    <h3>News Feeds</h3>
                  </div>
                  <div className='blog-feeds pe-15'>
                    {personList?.map((person) => (
                      <HomeSingleFooterBlog
                        image={person.img}
                        key={person.id}
                        subtitle={person.subtitle}
                        title={person.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom pt-25 pb-20'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='footer-copyright footer-copyright-3 text-center'>
                  <p>Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
