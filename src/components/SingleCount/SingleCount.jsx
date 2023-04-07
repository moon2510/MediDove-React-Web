import React from 'react'
import CountUp from 'react-countup'
import './SingleCount.scss'

export default function SingleCount({ icon, counter, title, detail }) {
  return (
    <>
      <div className='col-xl-4 col-lg-4 col-md-6'>
        <div className='single-counter mb-30'>
          <img src={icon} alt='' />
          <div className='counter-text-box'>
            <h1>
              <span className='counter'>
                <CountUp end={counter} duration={8} />
              </span>
              +
            </h1>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </>
  )
}
