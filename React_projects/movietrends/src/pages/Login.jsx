import React from 'react'
import '../styels/login.css'

function Login() {
  return (
    <div className='container'>
      <div className="card">
        <h1>Login</h1>
        <form>
            <label>Email</label>
            <input type="text" placeholder='Enter Email'onChange={inputHandler} />
            <label>Password</label>
            <input type="text" placeholder='Enter Password' />
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
