import React, {useState, useEffect, useCallback} from 'react'
import {toast} from 'react-toastify'
import key from '../config/token'
import Artists from './Artists'
import Contact from './Contact'
import Albums from './Albums'
import AlImage from './AlImage'
import { useNavigate } from 'react-router-dom'
import Search from './Search'


function Home(props) {
    const navigate = useNavigate()
  return (
    <div>
     <div className="home">
     <div className="blur">
       <div className="text">
       <h1>Listen Popuar Streaming <span className='text-main'>Music</span></h1>
       <p>Music is a universal form of expression that involves the combination of sounds, rhythms, and melodies to create a harmonious and meaningful composition.</p>
    <div className="btns d-flex gap-2 justify-content-center">
    <button className='border-0 p-3 px-5 fs-4 mt-4 text-white bg-black rounded-2' onClick={()=>{
      navigate('/albums')
    }}>Listen Now</button>
    <button className='border-0 p-3 px-5 fs-4 mt-4 rounded-2' onClick={()=>{
      navigate('/search')
    }}>Find a Song</button>
    </div>
       </div>
      </div>
     </div>
     
    <section id="artists" >
        <div className="section-header bg-black p-4">
          <h1>Artists</h1>
        </div>
     <div className="artists-images">
     <Albums/>
     </div>
    </section>
    </div>
  )
}

export default Home
