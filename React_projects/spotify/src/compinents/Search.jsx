import React, { useState } from 'react'
import '../style/search.css'

function Search(props) {
  const [val, setval] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("value", val);
    props.sArtist(val, "artist", 20)
  }

  return (
    <div className='search'>     
       <div className="row">
            <form autoComplete='false' onSubmit={submitHandler}>
            <div  className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center gap-2 justify-content-center'>
            <input type="search" placeholder='Enter Artist Name to find Albums' onChange={(e)=>setval(e.target.value)}/>
            <button type='submit' className='border-0 p-2 px-3 d-flex align-items-center fs-5 gap-2 rounded-5'>Search<i class="bi bi-search text-dark"></i></button>
            </div>
          </form>
        </div>
        
    </div>
  )
}

export default Search
