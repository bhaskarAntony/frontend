import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/menu.css'

function Menu() {
  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-black">
        <div className="container">
            <NavLink to={'/'} className='navbar-brand fs-1'>Redux- <span className='text-warning'>Crud</span></NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className='nav-link fs-3'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/create'} className='nav-link fs-3'>Create</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Menu
