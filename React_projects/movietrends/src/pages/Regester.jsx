import React from 'react'

function Regester() {
  return (
    <div className='container'>
        <div className="card">
            <form>
                <label htmlFor="name">Username</label>
                <input type="text" name='name' id='name' placeholder='Enter username' />
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='Enter Email' />
                <label htmlFor="pws">Password</label>
                <input type="text" name='pws' id='pws' placeholder='Enter Password' />
                <label htmlFor="name">Confirm Password</label>
                <input type="text" name='confirmpass' id='c_pws' placeholder='Enter username' />
                <button type="submit">Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Regester
