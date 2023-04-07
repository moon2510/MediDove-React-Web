import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleCount from '../SingleCount/SingleCount'
import './CounterArea.scss'

export default function DoctorCounter() {
  const [countList, setCountList] = useState([])
  const fetchDataPerson = async () => {
    const result = await axios.get(
      `https://642cf129bf8cbecdb4fa0fb1.mockapi.io/Counter`
    )
    setCountList(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchDataPerson()
  }, [])
  return (
    <>
      <section className='counter-wrapper pt-120 pb-90 gray-bg'>
        <div className='container'>
          <div className='row'>
            {countList?.map((count) => (
              <SingleCount
                key={count.id}
                icon={count.img}
                counter={count.count}
                title={count.title}
                detail={count.detail}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
