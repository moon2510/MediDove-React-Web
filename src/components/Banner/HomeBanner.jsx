import React, { useState } from 'react'
import './HomeBanner.scss'
export default function BannerHome() {
  const [display, setDisplay] = useState(false)
  const displayVideo = () => {
    setDisplay(!display)
  }
  const hideVideo = () => {
    setDisplay(!display)
  }
  return (
    <div className='hoverDiv'>
      {display && <div className='mfp-bg ' onClick={hideVideo}></div>}
      <div
        className='carousel slide-fade banner'
        data-ride='carousel'
        id='carouselExampleControls'
      >
        <div className='carousel-inner banner'>
          <div className='carousel-item active'>
            <img
              alt='First slide'
              className='d-block'
              src='https://medi-dove.netlify.app/static/media/slider-bg-1.a5b879494592cab4771e.jpg'
            />
          </div>
          <div className='carousel-item'>
            <img
              alt='Second slide'
              className='d-block'
              src='https://medi-dove.netlify.app/static/media/slider-bg-2in1.a274526164db40a919cb.jpg'
            />
          </div>
        </div>
        <div className='button-banner prev'>
          <a
            className='carousel-control-prev prev-slide'
            data-slide='prev'
            href='#carouselExampleControls'
            role='button'
          >
            <div className='hover-prev-span'>
              <span
                aria-hidden='true'
                className='carousel-control-prev-icon prev-arrow'
              />
              <span className='sr-only'>Previous</span>
            </div>
          </a>
        </div>

        <div className='button-banner next'>
          <a
            className='carousel-control-next next-slide'
            data-slide='next'
            href='#carouselExampleControls'
            role='button'
          >
            <div className='hover-next-span'>
              <span
                aria-hidden='true'
                className='carousel-control-next-icon next-arrow'
              />
              <span className='sr-only'>Next</span>
            </div>
          </a>
        </div>

        {/* container text */}
        <div className='slide-text' data-aos='fade-up'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-8 col-md-10'>
                <div className='hero-text'>
                  <div className='hero-slider-caption '>
                    <h5>We are here for your care.</h5>
                    <h1>Best Care &amp; Better Doctor.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div class='hero-slider-btn'>
                    <a class='primary_btn btn-icon ml-0' href='/contact'>
                      <span className='home-banner'>+</span>
                      MAKE APPOINTMENT
                    </a>
                    <button
                      className='play-btn popup-video'
                      onClick={displayVideo}
                    >
                      <i className='fas fa-play'></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='videodisplay'>
                {display && (
                  <div>
                    <button
                      className='mfp-close'
                      title='Close (Esc)'
                      type='button'
                      onClick={hideVideo}
                    >
                      X
                    </button>
                    <iframe
                      height='452px'
                      src='//www.youtube.com/embed/oU_GUAWz52w?autoplay=1'
                      style={{
                        visibility: display ? 'visible' : 'hidden',
                      }}
                      width='804px'
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
