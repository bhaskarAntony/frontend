import React, { useState } from 'react'
import '../style/artists.css'

function Artists(props) {
    const {followers, id, popularity, images, genres, name, type, url} = props
    const [img, setImg] = useState(images.url)
    console.log(img)
  return (
    <div>
       <div className="artist-card">
            <img src={images.url} className='rounded-5' alt="myimage" />
            <div className="info">
                <h5>{name}</h5>
                <p><span>Followers: </span>{followers.total}</p>
                <marquee behavior="scrolling" direction="left">name: {name} | type: {type}popularity: {popularity} | genres: {genres}  </marquee>
            </div>
        </div>
    </div>
  )
}

export default Artists
