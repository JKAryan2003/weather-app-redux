import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlaces } from '../features/weather/searchSlice'
import { useEffect } from 'react'

const WeatherMain = () => {
  const places = useSelector((state) => state.search.places)
  const dispatch = useDispatch()

  const [city, setCity] = useState()
  console.log(city);

  const handleInput = () => {

  }
  useEffect(() => {
    dispatch(fetchPlaces(city))
  }, [city])
  
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 weatherMain'>
      <div className='d-flex w-75 shadow-lg rounded-5 leftRight'>
        <Left handleInput={handleInput} city={city} setCity={setCity} places={places}/>
        <Right />
      </div>
    </div>
  )
}

export default WeatherMain