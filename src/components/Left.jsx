import React from 'react'
import Search from './Search'

const Left = ({ handleClick, city, setCity, cities, weatherData, cityName }) => {
  return (
    <div className='w-75'>
      <div className='d-flex justify-content-between px-5 py-4'>
        <h1 className='text-light'>
          My Weather
        </h1>
        <h1 className='text-secondary'>
          March 30 09:20
        </h1>
      </div>
      <Search handleClick={handleClick} city={city} setCity={setCity} cities={cities}/>

      <div className='d-flex justify-content-center'>
        <div className='pe-5'>
          <h1 className='temp text-light'>{Math.round(weatherData?.main?.temp)} &deg;C</h1>
        </div> 

        <div className='ps-5'>
          <img src={`https://openweathermap.org/img/wn/${(weatherData?.weather?.[0]?.icon)}@2x.png`} alt="" height={120}/>
          <h2 className='weatherDescription '>{(weatherData?.weather?.[0]?.description)}</h2>
          <h5>Feels like {Math.round(weatherData?.main?.feels_like)} &deg; C</h5>
        </div>
      </div>

      <div className='location'>
          <h1 className='text-white'>{cityName}</h1>
      </div> 

      <h3 className='text-secondary ps-5'>Hourly Forecast</h3>

      <div className='d-flex text-white justify-content-around py-4'>
        <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
          <p>12 : 00 AM</p>
          <p>08 &deg;C</p>
          {/* <img src={`https://openweathermap.org/img/wn/${(weatherData?.weather[0].icon)}@2x.png`} alt="" /> */}
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