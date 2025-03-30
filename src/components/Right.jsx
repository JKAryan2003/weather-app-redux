import React from 'react'

const Right = () => {
  return (
    <div className='w-25'>
      <h3 className='px-4 pt-4 pb-3'>Today's Data</h3>
      <div className='d-flex flex-column stats p-4 rounded-4'>
        <div className='d-flex justify-content-between fs-4 py-2'>
          <div className='d-flex justify-content-around'>
            <span><i class="fa-solid fa-temperature-high"> &nbsp;</i></span>
            <span>08 &deg; C</span>
          </div>

          <div>
            <span><i class="fa-solid fa-temperature-low"> &nbsp; </i></span>
            <span>08 &deg; C</span>
          </div>
        </div>
        <div className='d-flex justify-content-between fs-4 py-2'>
          <div>
            <span><i class="fa-solid fa-wind">&nbsp;&nbsp;</i></span>
            <span>23</span>
          </div>
          <div>
            <span><i class="fa-solid fa-droplet">&nbsp;&nbsp;</i></span>
            <span>55</span>
          </div>
        </div>
        <div className='d-flex justify-content-between fs-5 py-2'>
            <span>Sunrise &nbsp;</span>
            <span>09 : 00 AM</span>
        </div>

        <div className='d-flex justify-content-between fs-5 py-2'>
            <span>Sunset &nbsp;</span>
            <span>09 : 00 AM</span>
        </div>

      </div>
    </div>
  )
}

export default Right