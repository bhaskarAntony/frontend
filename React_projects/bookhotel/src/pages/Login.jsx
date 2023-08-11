import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
    const {isUser, userData, updateIsUser } = useContext(MyContext)
    const loginHandler = (e) =>{
      e.preventDefault();
      var email = document.getElementById("email").value;
      var pwd = document.getElementById("password").value;
      if(email==userData.email && pwd==userData.password){
        alert("succsess");
        updateIsUser(true);
        navigate('/')
      }
      else{
        alert("error");
      }
    }

  return (
    <div className='r_container'>
    <div className="card">
        <h2 className='card-header'>Login</h2>
        <form onSubmit={loginHandler}>
            <label htmlFor="name">Email</label>
            <input type="email" name='name' placeholder='Enter Email' id='email' />
            <label htmlFor="name">Password</label>
            <input type="password" name='password' placeholder='password' id='password' />
            <p>Do You have no Account? <NavLink to={'/register'} className="link">Register</NavLink></p>
            <button type="submit">Login</button>
        </form>
    </div>
</div>
  )
}

export default Login
