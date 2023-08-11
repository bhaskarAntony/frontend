import React, { useContext, useState } from 'react'
import '../styles/auth.css'
import { NavLink } from 'react-router-dom'
import { MyContext } from './MyContext'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const {userData, updateUser, isUser, updateIsUser} = useContext(MyContext);
    const [userCredential, setUsercredential] = useState({
        name: "",
        email:"",
        password:""
    })
    console.log(userData)
    const Changehandler = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setUsercredential(values => ({...values, [name]: value}))
    }
    const RegisterHandler = (e) =>{
        e.preventDefault();
        updateUser(userCredential)
        navigate('/login')
    }
  return (
    <div className='r_container'>
        <div className="card">
            <h2 className='card-header'>Register</h2>
            <form onSubmit={RegisterHandler}>
                <label htmlFor="name">username</label>
                <input type="text" name='name' placeholder='Enter name'  value={userCredential.name || ""} onChange={Changehandler} />
                <label htmlFor="name">Email</label>
                <input type="email" name='email' placeholder='Enter Email' value={userCredential.email || ""} onChange={Changehandler} />
                <label htmlFor="name">Password</label>
                <input type="text" name='password' placeholder='Create Password' value={userCredential.password || ""} onChange={Changehandler}  />
                <label htmlFor="name">Confirm Password</label>
                <input type="text" name='c_password' placeholder='Re-Enter password' />
                <p>Do Have Already Account? <NavLink to={'/login'} className="link">Login</NavLink></p>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register
