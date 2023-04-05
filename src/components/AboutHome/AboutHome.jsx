import './AboutHome.scss'
import React from 'react'

export default function AboutHome() {
  return (
    <div>
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-5 about_left'>
              <div className='medical-icon-brand-2'>
                <img
                  alt=''
                  src='https://medi-dove.netlify.app/img/about/medical-brand-icon-border.png'
                />
              </div>
              <div className='about-left-side'>
                <div className='about-front-img'>
                  <img
                    alt=''
                    src='https://medi-dove.netlify.app/img/about/about-img.jpg'
                  />
                </div>
                <div className='about-shape'>
                  <img
                    alt=''
                    src='https://medi-dove.netlify.app/img/about/about-shape.png'
                  />
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-7'>
              <div className='about-right-side'>
                <div className='about-title'>
                  <h5>About Us</h5>
                  <h1>Short Story About MediDove Clinic.</h1>
                </div>
                <div className='about-text'>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <br />
                </div>
                <div className='about-author'>
                  <div className='author-ava'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/about/author-ava.png'
                    />
                  </div>
                  <div className='author-desination'>
                    <h4>Rosalina D. Williamson</h4>
                    <h6>founder</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
