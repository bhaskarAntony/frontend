import React, {useState, useEffect, useCallback} from 'react'
import {toast} from 'react-toastify'
import key from '../config/token'
import '../style/albums.css'
import AlImage from './AlImage'

const URL = 'https://api.spotify.com'

function Album2() {
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
      <div className="artists-images">
      {
          artist && artist.map((item, index) =>{
            return (
             <>
              <AlImage key={index} {...item}/>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Album2
