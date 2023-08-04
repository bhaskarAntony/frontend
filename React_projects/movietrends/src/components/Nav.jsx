import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
   <div>
    <nav>
       <NavLink to="/" className="link"> <h1>MOVIE<span className='main-text'> TRENDS</span></h1></NavLink>
        <ul>
          <li><NavLink to="/company">Company</NavLink></li>
          {
            localStorage.getItem("isUser") ? (
             <>
              <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/movies">Movies</NavLink></li>
             <li><button type='button'><NavLink to="/login">Login</NavLink></button></li></>
            ) : (
              <li><button type='button'><NavLink to="/register">Register</NavLink></button></li>
            )
          }
        </ul>
      </nav>

   </div>
  )
}

export default Nav
