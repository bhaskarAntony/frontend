import React from 'react'
import '../styels/login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const Authchecker = ()=>{
  
    if(localStorage.getItem("isUser")){
      navigate('/')
      window.location.reload();
    }
    else{
      alert("please enter valid Login data")
    }
  }
  return (
    <div className='container-login'>
      <div className="cards">
        <h1>Login</h1>
        <form onSubmit={Authchecker}>
            <label>Email</label>
            <input type="text" placeholder='Enter Email' />
            <label>Password</label>
            <input type="text" placeholder='Enter Password' />
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
