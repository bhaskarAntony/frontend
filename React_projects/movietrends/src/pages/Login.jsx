import React from 'react'

function Login() {
  return (
    <div className='container'>
        <div className="card">
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='Enter Email' />
                <label htmlFor="pws">Password</label>
                <input type="text" name='pws' id='pws' placeholder='Enter Password' />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
