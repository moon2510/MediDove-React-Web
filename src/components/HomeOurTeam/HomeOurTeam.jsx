import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './HomeOurTeam.scss'
import { Link } from 'react-router-dom'
import HomeSingleTeam from '../HomeSingleTeam/HomeSingleTeam'

export default function HomeOurTeam() {
  const [personList, setPersonList] = useState([])
  const fetchDataPerson = async () => {
    const result = await axios.get(
      `https://642cdf0f66a20ec9ce900412.mockapi.io/Person`
    )
    setPersonList(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchDataPerson()
  }, [])
  return (
    <>
      <section className='team-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7 col-md-10'>
              <div className='section-title'>
                <div className='section-icon'>
                  <img
                    alt=''
                    className='section-back-icon'
                    src='	https://medi-dove.netlify.app/img/section/section-back-icon.png'
                  />
                </div>
                <div className='section-text'>
                  <h5>Our Team</h5>
                  <h1>A Professional & Care Provider</h1>
                </div>
                <div className='section-line'>
                  <img
                    alt=''
                    src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
                  />
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-5'>
              <div className='section-button d-none d-lg-block team_btn'>
                <Link className='primary_btn btn-icon' to='/contact'>
                  <span>+</span>Make Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            {personList?.map((person) => (
              <HomeSingleTeam
                image={person.avt}
                key={person.id}
                subtitle={person.role}
                title={person.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
