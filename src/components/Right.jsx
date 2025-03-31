import React from 'react'

const Right = ({weatherData}) => {
  return (
    <div className='w-25'>
      <h3 className='pt-4 pb-3 text-secondary'>Today's Data</h3>
      <div className='d-flex flex-column stats px-4 py-2 rounded-4'>
        <div className='d-flex justify-content-between fs-4 py-2'>
          <div className='d-flex justify-content-around'>
            <span><i class="fa-solid fa-temperature-high"> &nbsp;</i></span>
            <span>{Math.round(weatherData?.main?.temp_max)} &deg; C</span>
          </div>

          <div>
            <span><i class="fa-solid fa-temperature-low"> &nbsp; </i></span>
            <span>{Math.round(weatherData?.main?.temp_min)} &deg; C</span>
          </div>
        </div>
        <div className='d-flex justify-content-between fs-4 py-2'>
          <div>
            <span><i class="fa-solid fa-wind">&nbsp;&nbsp;</i></span>
            <span>{weatherData?.wind?.speed}m/s</span>
          </div>
          <div>
            <span><i class="fa-solid fa-droplet">&nbsp;&nbsp;</i></span>
            <span>{weatherData?.main?.humidity}g/m³</span>
          </div>
        </div>
        <div className='d-flex justify-content-between fs-5 py-2'>
            <span>Sunrise &nbsp;</span>
            <span>{new Date((weatherData?.sys?.sunrise)*1000).toLocaleTimeString("en-US")}</span>
        </div>

        <div className='d-flex justify-content-between fs-5 py-2'>
            <span>Sunset &nbsp;</span>
            <span>{new Date((weatherData?.sys?.sunset)*1000).toLocaleTimeString("en-US")}</span>
        </div>

      </div>

      <h4 className='pt-4 text-secondary-emphasis'>Daily Forecast</h4>
      <div className="dailyData pe-4 text-light">
        <div className='py-1'>
          <h6 className='text-light'>Monday</h6>
          <div className='d-flex align-items-center justify-content-around rounded-3 eachDailyData'>
            <span>30 &deg; C</span>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={50}/>
            <span>Cloudy</span>
          </div>
        </div>
        <div className='py-1'>
          <h6 className='text-light'>Monday</h6>
          <div className='d-flex align-items-center justify-content-around rounded-3 eachDailyData'>
            <span>30 &deg; C</span>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={50}/>
            <span>Cloudy</span>
          </div>
        </div>
        <div className='py-1'>
          <h6 className='text-light'>Monday</h6>
          <div className='d-flex align-items-center justify-content-around rounded-3 eachDailyData'>
            <span>30 &deg; C</span>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={50}/>
            <span>Cloudy</span>
          </div>
        </div>
        <div className='py-1'>
          <h6 className='text-light'>Monday</h6>
          <div className='d-flex align-items-center justify-content-around rounded-3 eachDailyData'>
            <span>30 &deg; C</span>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={50}/>
            <span>Cloudy</span>
          </div>
        </div>
        <div className='py-1'>
          <h6 className='text-light'>Monday</h6>
          <div className='d-flex align-items-center justify-content-around rounded-3 text-light eachDailyData'>
            <span>30 &deg; C</span>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" height={50}/>
            <span>Cloudy</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Right