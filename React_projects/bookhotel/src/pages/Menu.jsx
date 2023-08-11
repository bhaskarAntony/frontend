import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/menu.css'
import { MyContext } from './MyContext'

function Menu() {
  const navigate = useNavigate();
    const {isUser,updateIsUser, updateUser} = useContext(MyContext)
    const Logout = () =>{
      updateIsUser(false);
      updateUser({
        name: "",
        email: "",
        password: ""
      });
      navigate('/register')
    }
  return (
    <nav>
       {
        isUser ?  <span className='nav-brand'><NavLink to={'/'}>HoBook</NavLink></span> : <span className='nav-brand'><NavLink to={'/about'}>HoBook</NavLink></span>
       }
        <ul>
           {
            isUser ? (
              <>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><button onClick={Logout} className='logout'>Logout</button></li>
              </>
            ) : (
               <>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li>
               </>
            )
           }
        </ul>
    </nav>
  )
}

export default Menu
