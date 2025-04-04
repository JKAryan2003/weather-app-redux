import React from 'react'
import Search from './Search'

const Left = ({ handleClick, city, setCity, cities, weatherData, cityName, hourData }) => {
  console.log(hourData);
  
  return (
    <div className='w-75'>
      <div className='d-flex justify-content-between px-5 py-4'>
        <h1 className='text-light'>
          Weather Kit
        </h1>
        <h2 className='text-secondary'>
         {new Date().toDateString("en-US")} {new Date().toLocaleTimeString()}
        </h2>
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
        {hourData?.map((data) => 
          <div className='d-flex flex-column align-items-center rounded-3 hourlyDiv'>
            <p>{new Date(data?.dt_txt).toLocaleTimeString("en-US")}</p>
            <p>{data?.main?.temp} &deg;C</p>
            <img src={`https://openweathermap.org/img/wn/${(data?.weather?.[0]?.icon)}@2x.png`} alt="" />
            <p>{data?.weather?.[0]?.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Left