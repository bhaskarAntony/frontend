import React from 'react'
import { NavLink} from 'react-router-dom'

function Menu() {
  return (
   <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3 sticky-top">
    <div className="container">
       <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/9973/9973495.png" alt="" />
        <NavLink to={'/'} className="navbar-brand fs-3">MySpotyfy</NavLink>
       </div>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end " id='menu'>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link fs-4">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/contact'}  className="nav-link fs-4">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <input type="text" name="search" id='search' placeholder='search here' className='border-0 search rounded-5 p-2 fs-5 mx-3' />
                    <i class="bi bi-search"></i>
                </li>
            </ul>
        </div>
    </div>
   </nav>
  )
}

export default Menu
