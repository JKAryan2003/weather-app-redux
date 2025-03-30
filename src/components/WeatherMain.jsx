import React from 'react'
import Left from './Left'
import Right from './Right'

const WeatherMain = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 weatherMain'>
      <div className='d-flex w-75 shadow-lg rounded-5 leftRight'>
        <Left />
        <Right />
      </div>
     
    </div>
  )
}

export default WeatherMain