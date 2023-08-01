import React from 'react'
import Footer from './Footer'
import Company from './Company'
import Category from '../components/Category'

function Home() {
  return (
    <div>
    <div className='home'>
     <div className="wrapper">
     <h1>Popular trending most <br />watched Movies</h1>
      <h3>Watch trending movies trailers in Our Movies Trends Website</h3>
     <div className="btns">
     <button>Discover Movies</button>
      <button>About Us</button>
     </div>
     </div>
    </div>
    <Category/>
    <Footer/>
    </div>

    
  )
}

export default Home
