import React from 'react'
import CarouselItem from './CarouselItem'

function AlImage(props) {
    const {id, followers, popularity, images, genres, name, type, url} = props
  return (
    <div>
            <div className="artist-profile">
      {
                        images && images.map((item, index)=>{
                          return(
                          <CarouselItem key={index} {...item}/>
                        )
                        })
                      }
      </div>
    </div>
  )
}

export default AlImage
