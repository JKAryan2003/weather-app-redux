import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCities } from '../features/weather/searchSlice'
import { useEffect } from 'react'

const WeatherMain = () => {
  const cities = useSelector((state) => state.search.cities)
  const dispatch = useDispatch()

  const [city, setCity] = useState()
  console.log(city);

  const handleClick = () => {

  }
  useEffect(() => {
    dispatch(fetchCities(city))
  }, [city])
  
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 weatherMain'>
      <div className='d-flex w-75 shadow-lg rounded-5 leftRight'>
        <Left handleClick={handleClick} city={city} setCity={setCity} cities={cities}/>
        <Right />
      </div>
    </div>
  )
}

export default WeatherMain