import React from 'react'
import { NavLink} from 'react-router-dom'

function Menu() {
  return (
   <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
    <div className="container">
        <NavLink to={'/'} className="navbar-brand fs-3">MySpotyfy</NavLink>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id='menu'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link fs-4">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/music'}  className="nav-link fs-4">Music</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/contact'}  className="nav-link fs-4">Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
   </nav>
  )
}

export default Menu