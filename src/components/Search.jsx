import React from 'react'

const Search = ({handleInput, setCity, city, places}) => {
  return (
    <div className='d-flex justify-content-center p-3'>
      <div class="input-group mb-3 w-75">
        <input type="text" class="form-control" placeholder="Search Place" aria-label="Recipient's username" aria-describedby="button-addon2" value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search