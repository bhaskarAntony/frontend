import React from 'react'
import '../style/song.css'
import { NavLink } from 'react-router-dom'

function SongItem(props) {
    const {name, album, preview_url} = props
  return (
    <div className='col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-3'>
        <div className="track p-2">
            <div className="track-img">
            <img src={album ? album.images[1].url: "#"} alt="no image" className='rounded-2' />
            <div className="play1">
               <NavLink to={`/music`}><i class="bi bi-play-fill"></i></NavLink>
               </div>
            </div>
            <div className="tract-info">
                {/* <marquee>{name}</marquee> */}
                <marquee behavior="scrolling" direction="left">{name}</marquee>
            </div>
        </div>
        
    </div>
  )
}

export default SongItem
