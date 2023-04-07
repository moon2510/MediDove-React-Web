import './ForEmployers.scss'

export default function ForEmployers() {
  return (
    <section className='for-employers pt-120 pb-120'>
      <div className='container'>
        <div className='row g-0 for-employers-bg-2'>
          <div className='col-xl-6 col-lg-6 p-0'>
            <div className='for-employers-img'>
              <img
                alt=''
                className='img w-100'
                src='https://medi-dove.netlify.app/img/hire/hire1.jpg'
              />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 p-0'>
            <div className='for-employers-text'>
              <h1>For Employers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a
                className='primary_btn btn-icon btn-icon-green ml-0 btn-1'
                href='/contact'
              >
                <span>+</span>Contact us
              </a>
            </div>
          </div>
        </div>
        <div className='row g-0 for-employers-bg'>
          <div className='col-xl-6 col-lg-6 p-0'>
            <div className='for-employers-text'>
              <h1>For Employers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a className='primary_btn btn-icon ml-0 btn-2' href='/contact'>
                <span>+</span>apply today
              </a>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 p-0'>
            <div className='for-employers-img'>
              <img
                alt=''
                className='img w-100'
                src='https://medi-dove.netlify.app/img/hire/hire2.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
