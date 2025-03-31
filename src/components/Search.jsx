import React from 'react'

const Search = ({handleClick, setCity, city, cities}) => {
  console.log(cities);
  
  return (
    <div className='d-flex justify-content-center px-5 flex-column'>
      <div class="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Place" aria-label="Recipient's username" aria-describedby="button-addon2" value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>
      {cities?.map ((item) => 
          <div onClick={() => handleClick(item)} className='searchDiv d-flex justify-content-between px-4 rounded-3'>
            <div>
              {item.name}
            </div>
            <div>
              {item.state + " "}
              {item.country}
            </div>
          </div>
        )}
    </div>
  )
}

export default Search