import React, {useState, useEffect, useCallback} from 'react'
import {toast} from 'react-toastify'
import key from '../config/token'
import Artists from './Artists'

const URL = 'https://api.spotify.com'

function Home(props) {
  const [artist, setArtist] = useState([])
  const [album, setAlbum] = useState([])

  //logic to search artists 
  const searchArtist = async(artistname, type, limit) => {
    await fetch(`${URL}/v1/search?q=${artistname}&type=${type}&limit=${limit}`, {
      method:"GET",
      headers: {
        Authorization: `Bearer ${key}` //oAuth 2.0 header authorization 
      }
    })
    .then(res => res.json())
    .then(success =>{
      console.log(success)
      setArtist(success.artists.items)
    }).catch(err =>toast.error(err.message))
  }

  const searchAlbum = async(albumname, type, limit) => {
    await fetch(`${URL}/v1/search?q=${albumname}&type=${type}&limit=${limit}`, {
      method:"GET",
      headers: {
        Authorization: `Bearer ${key}` //oAuth 2.0 header authorization 
      }
    })
    .then(res => res.json())
    .then(success =>{
      console.log(success)
      setAlbum(success.albums.items)
    }).catch(err =>toast.error(err.message))
  }
  useEffect(()=>{
    searchArtist("SPB", "artist", 10)
    searchAlbum("SPB", "album", 10)
  }, [])
  return (
    <div>
     <div className="home">
     <div className="blur">
       <div className="text">
       <h1>Listen Popuar Streaming <span className='text-main'>Music</span></h1>
       <p>Music is a universal form of expression that involves the combination of sounds, rhythms, and melodies to create a harmonious and meaningful composition.</p>
    <div className="btns d-flex gap-2 justify-content-center">
    <button className='border-0 p-3 px-5 fs-4 mt-4 text-white bg-black rounded-2'>Listen Now</button>
    <button className='border-0 p-3 px-5 fs-4 mt-4 rounded-2'>Find a Song</button>
    </div>
       </div>
      </div>
     </div>
    <section id="artists" className="artists">
        <div className="section-header">
          <h1>Artists</h1>
        </div>
    <div className="artists-images">
    {
          artist && artist.map((item, index) =>{
            return (
              <Artists key={index} {...item}/>
            )
          })
        }
    </div>
    </section>
    </div>
  )
}

export default Home
