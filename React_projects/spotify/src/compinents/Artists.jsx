import React, { useState } from 'react'
import '../style/artists.css'
import CarouselItem from './CarouselItem'
import { NavLink } from 'react-router-dom';


function Artists(props) {
    const {id, followers, popularity, images, genres, name, type, url} = props
  return (
    <div>
       <div className="artist-card">
      <div className="artist-profile">
      {
                        images && images.map((item, index)=>{
                          return(
                          <CarouselItem key={index} {...item}/>
                        )
                        })
                      }
      </div>
            <div className="info">
                <h5>{name}</h5>
                <p><span>Followers: </span>{followers.total}</p>
                <marquee behavior="scrolling" direction="left">name: {name} | type: {type}popularity: {popularity} | genres: {genres}  </marquee>
                <div className="play">
               <NavLink to={`/music/artist/${id}`}><i class="bi bi-play-fill"></i></NavLink>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Artists
