import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Regester from '../pages/Regester'
import Home from '../pages/Home'
import Movies from '../pages/Movies';
import Trending from '../pages/Trending';
import Company from '../pages/Company';

function Nav() {
  return (
   <div>
    <Router>
    <nav>
        <h1>MOVIE<span className='main-text'> TRENDS</span></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/trending">Popular</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><button type='button'><Link to="/regester">Regester</Link></button></li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/regester' element={<Regester/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/company' element={<Company/>}/>


      </Routes>
    </Router>
   </div>
  )
}

export default Nav
