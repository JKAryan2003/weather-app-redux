import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCities, fetchTimeData, fetchWeather, resetData } from '../features/weather/weatherSlice'
import { useEffect } from 'react'

const WeatherMain = () => {
  const cities = useSelector((state) => state.weather.cities)
  
  const weatherData = useSelector((state) => state.weather.weatherData)
  const timeData = useSelector((state) => state.weather.timeData.list)
  console.log(timeData);
  
  const getHourData = (timeData) => {
    console.log(timeData);
    
    const filterData = timeData.filter((item) => 
      (new Date(item.dt_txt) > new Date()) && (new Date(item.dt_txt).getDate() === new Date().getDate())
    )  
    return filterData
  }

  const hourData = getHourData(timeData)
  console.log(hourData);
  

  const dispatch = useDispatch()

  const [city, setCity] = useState()
  const [cityName, setCityName] = useState("Bhubaneshwar")

  const handleClick = (city) => {
   dispatch(fetchWeather(city))
   dispatch(fetchTimeData(city))
   dispatch(resetData())
   setCity("")
   setCityName(city.name)
  }

  useEffect(() => {
    dispatch(fetchCities(city))
  }, [city])

  
  console.log(weatherData);
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 weatherMain'>
      <div className='d-flex w-75 shadow-lg rounded-5 leftRight'>
        <Left handleClick={handleClick} city={city} setCity={setCity} cities={cities} weatherData={weatherData} cityName={cityName}/>
        <Right weatherData={weatherData}/>
      </div>
    </div>
  )
}

export default WeatherMain