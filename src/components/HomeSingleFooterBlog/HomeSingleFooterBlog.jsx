import React from 'react'
import { Link } from 'react-router-dom'
import './HomeSingleFooterBlog.scss'

export default function HomeSingleFooterBlog({ image, title, subtitle }) {
  return (
    <>
      <div className='single-blog-feeds mb-20'>
        <div className='blog-feeds-thumb'>
          <Link to='/blogDetails'>
            <img alt='' src={image} />
          </Link>
        </div>
        <div className='blog-feeds-text'>
          <h5>
            <Link to='/blogDetails'>{title}</Link>
          </h5>
          <span className='feeds-date'>{subtitle}</span>
        </div>
      </div>
    </>
  )
}
