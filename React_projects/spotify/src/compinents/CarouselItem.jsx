import React from 'react'
import '../style/carousel.css'

function CarouselItem(props) {
    const {height, url, width} = props;
  return (
    <div className='carousel-item active'>
       <img src={url ? url : '#'} alt="no image" /> 

    </div>
  )
}

export default CarouselItem
