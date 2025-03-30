import React from 'react'

const Search = () => {
  return (
    <div className='d-flex justify-content-center p-3'>
      <div class="input-group mb-3 w-75">
        <input type="text" class="form-control" placeholder="Search Place" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button class="btn btn-info" type="button" id="button-addon2">Search</button>
      </div>
    </div>
  )
}

export default Search