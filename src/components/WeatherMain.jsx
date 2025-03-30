import React from 'react'
import Left from './Left'
import Right from './Right'

const WeatherMain = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 border border-primary'>
      <Left />
      <Right />
    </div>
  )
}

export default WeatherMain