import './DoctorDetail.scss'

import React from 'react'
import ContactMap from './ContactMap'
import DoctorLeft from './DoctorLeft'
import DoctorRight from './DoctorRight'
import HeaderDetail from './HeaderDetail'

export default function DoctorDetail() {
  return (
    <div>
      <HeaderDetail />
      <div className='container doctorDetailsArea'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7'>
            <DoctorLeft />
            <ContactMap />
          </div>
          <div className='col-xl-5 col-lg-5'>
            <DoctorRight />
          </div>
        </div>
      </div>
    </div>
  )
}
