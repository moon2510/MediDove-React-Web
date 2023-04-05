import React from 'react'
import { Link } from 'react-router-dom'
import './HomeSingleTeam.scss'

export default function HomeSingleTeam({ image, title, subtitle }) {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-xl-4'>
        <div className='team-box'>
          <div className='team-thumb'>
            <img alt='' className='avatar' src={image} />
            <Link className='team-link' to='/doctorDetails'>
              +
            </Link>
          </div>
          <div className='team-content'>
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
          </div>
        </div>
      </div>
    </>
  )
}
