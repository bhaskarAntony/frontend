import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Search from './Search'
import '../styles/nav.css'

function Topnav() {
  const navigate = useNavigate()
  return (
    <nav>
       <h1 className='text-primary' onClick={()=>navigate('/')}
        style={{
        "cursor":'pointer'
        }}
        >Facebook</h1>
       <Search/>
       <ul>
        <li><NavLink to={'/'}><i class="bi bi-chat-dots-fill"></i></NavLink></li>
        <li><NavLink to={'/video'}><i class="bi bi-bell-fill"></i></NavLink></li>
        <li><NavLink to={'/profile'}><i class="bi bi-person-circle"></i></NavLink></li>
       </ul>
    </nav>
  )
}

export default Topnav
