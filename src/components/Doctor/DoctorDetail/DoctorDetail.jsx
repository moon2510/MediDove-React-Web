import './DoctorDetail.scss'

import React from 'react'
import BannerDepartment from '../../BannerDepartment/BannerDepartment'
import DoctorFooter from '../../DoctorFooter/DoctorFooter'
import Header from '../../Header/Header'
import ContactMap from './ContactMap'
import DoctorLeft from './DoctorLeft'
import DoctorRight from './DoctorRight'

export default function DoctorDetail() {
  return (
    <div>
      <Header />
      <BannerDepartment subtitle={'Details'} title={'Doctor Details'} />
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
      <DoctorFooter />
    </div>
  )
}
