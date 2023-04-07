import React from 'react'
import './DoctorDetail.scss'
// import line from '../../../img/section-title-line.png'
// import backIcon from '../../../img/sectionTeam/section-back-icon.png'
// import featureIconLeft from '../../../img/ser-fea-icon-1.png'
// import featureIconRight from '../../../img/ser-fea-icon-2.png'

const body =
  // eslint-disable-next-line max-len
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

export default function DoctorLeft() {
  return (
    <div>
      <div className='headingLeft'>
        <div className='sectionIcon'>
          <img
            className='sectionBackIcon backIconLeft'
            src='https://medi-dove.netlify.app/img/section/section-back-icon-sky.png'
          ></img>
        </div>
        <div className='sectionText'>
          <h5>introducing my self</h5>
          <h1>There Is Nothing To Show Something.</h1>
        </div>
        <div className='sectionLine'>
          <img
            alt='line'
            src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
          />
        </div>
      </div>
      <div className='details'>
        <p>{body}</p>
      </div>
      <div>
        <div className='sectionText'>
          <h1>Here Is Skills</h1>
        </div>
        <div className='sectionLine'>
          <img
            alt='line'
            src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
          />
        </div>
      </div>
      <div className='details'>
        <p>{body}</p>
      </div>
      <div className='container serviceFeatures'>
        <div className='row'>
          <div className='col-lg-6 featureLeft'>
            <div className='featurIcon'>
              <img src='https://medi-dove.netlify.app/img/services/ser-fea-icon-1.png'></img>
            </div>
            <div className='featureText'>
              <h4>Personal care</h4>
              <ul>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 featureRight'>
            <div className='featurIcon'>
              <img src='https://medi-dove.netlify.app/img/services/ser-fea-icon-2.png'></img>
            </div>
            <div className='featureText'>
              <h4>Lifestyle support</h4>
              <ul>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='sectionText'>
          <h1>Care Coverage</h1>
        </div>
        <div className='sectionLine'>
          <img
            alt='line'
            src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
          />
        </div>
      </div>
      <div className='details'>
        <p>{body}</p>
      </div>
    </div>
  )
}
