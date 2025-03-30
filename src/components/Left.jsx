import React from 'react'
import Search from './Search'

const Left = () => {
  return (
    <div className='w-75'>
      <div className='d-flex justify-content-between px-5 py-4'>
        <h1 className='text-secondary'>
          My Weather
        </h1>
        <h1>
          March 30 09:20
        </h1>
      </div>
      <Search />

      <div className='d-flex justify-content-center'>
        <div className='pe-5'>
          <h1 className='temp'>08 &deg;C</h1>
        </div> 

        <div className='ps-5'>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={120}/>
          <h2 className='weatherDescription ps-4'>Rainy</h2>
        </div>
      </div>

      <div className='location'>
          <h1 className='text-white'>Bhubaneswar</h1>
      </div> 

      <h3 className='text-white ps-5'>Hourly Forecast</h3>

      <div className='d-flex text-white justify-content-around py-4'>
        <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
          <p>12 : 00 AM</p>
          <p>08 &deg;C</p>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <p>Rainy</p>
        </div>
        <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
          <p>12 : 00 AM</p>
          <p>08 &deg;C</p>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <p>Rainy</p>
        </div>
        <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
          <p>12 : 00 AM</p>
          <p>08 &deg;C</p>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <p>Rainy</p>
        </div>
        <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
          <p>12 : 00 AM</p>
          <p>08 &deg;C</p>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <p>Rainy</p>
        </div>
      </div>
    </div>
  )
}

export default Left