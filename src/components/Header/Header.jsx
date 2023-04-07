import React, { useState } from 'react'

import './Header.scss'
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
  FaBehance,
} from 'react-icons/fa'

import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Sidebar from './SideBar'

export default function Header() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <header>
        <div className='header-medidove top-bar d-none d-md-block'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1'>
                <div className='header-info'>
                  <span>
                    <i className='fas fa-phone'></i> +1 800 833 9780
                  </span>
                  <span>
                    <i className='fas fa-envelope'></i> info@example.com
                  </span>
                </div>
              </div>
              <div className='col-xl-5 col-lg-5 col-md-4'>
                <div className='header-top-right-btn f-right'>
                  <Link className='primary_btn' to='/contact'>
                    Make Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'header-menu-area sticky_menu'}>
          <div className='container menu_wrapper'>
            <div className='row align-items-center'>
              <div className='style-logo col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center'>
                <div className='logo logo-circle pos-rel'>
                  <Link to='/'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/logo/logo.png'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-xl-9 col-lg-9 col-md-6 col-6'>
                <div className='header-right f-right'>
                  <div className='header-lang f-right pos-rel d-none d-lg-block'>
                    <div className='lang-icon'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/icon/lang.png'
                      />
                      <span>
                        EN<i className='fas fa-angle-down'></i>
                      </span>
                    </div>
                    <ul className='header-lang-list'>
                      <li>
                        <a className='no-underline' href='#'>
                          USA
                        </a>
                      </li>
                      <li>
                        <a className='no-underline' href='#'>
                          UK
                        </a>
                      </li>
                      <li>
                        <a className='no-underline' href='#'>
                          CA
                        </a>
                      </li>
                      <li>
                        <a className='no-underline' href='#'>
                          AU
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='header-social-icons f-right d-none d-xl-block'>
                    <ul>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaBehance />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaPinterest />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='header__menu f-right'>
                  <nav id='mobile-menu'>
                    <ul>
                      <li>
                        <Link to='/'>Home +</Link>
                      </li>
                      <li>
                        <Link to='/services'>Department +</Link>
                        <ul className='submenu'>
                          <li>
                            <Link to='/services'>Services 01</Link>
                          </li>
                          <li>
                            <Link to='/servicesDetails'>Services Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/doctors'>Doctors +</Link>
                        <ul className='submenu'>
                          <li>
                            <Link to='/doctors'>Doctors 01</Link>
                          </li>
                          <li>
                            <Link to='/doctorDetails'>Doctors Details</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className='side-menu-icon d-lg-none text-end'>
                  <button
                    className='menu-button side-toggle border-0 bg-transparent'
                    onClick={handleShow}
                  >
                    <HiMenu fontSize={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar handleClose={handleClose} show={show} />
    </>
  )
}
