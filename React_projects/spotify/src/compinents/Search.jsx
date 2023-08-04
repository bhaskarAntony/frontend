import React from 'react'
import '../style/search.css'

function Search() {
  return (
    <div className='search'>
        <div className="row">
            <div  className='col-sm-12 col-md-12 col-lg-4 d-flex align-items-center gap-2'>
            <input type="text" placeholder='What do you want to listen to?'/>
            <button className='border-0 p-2 px-3 d-flex align-items-center fs-5 gap-2 rounded-5'>Search<i class="bi bi-search text-dark"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Search
