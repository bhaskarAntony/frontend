import React from 'react'
import '../style/song.css'

function SongItem(props) {
    const {name, album, preview_url} = props
  return (
    <div className='col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 p-2'>
        <div className="track">
            <img src={album ? album.images[1].url: "#"} alt="no image" className='rounded-2' />
            <div className="tract-info">
                <h5>{name}</h5>
            </div>
        </div>
        
    </div>
  )
}

export default SongItem
