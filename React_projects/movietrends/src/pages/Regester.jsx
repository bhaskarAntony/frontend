import React, { useState } from 'react';
import '../styels/login.css'
import Home from './Home';
import { useNavigate } from 'react-router-dom';

function Regester() {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false)
  const submitHandler = (e) =>{
    e.preventDefault();
    localStorage.setItem("isUser", "false");
    alert("regestered is Successfully")  ;
    setIsUser(true);
    navigate('/login')
}
  return (
    <div className='container-login'>
    <div className="cards">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" placeholder='Enter name'/>
          <label>Email</label>
          <input type="text" placeholder='Enter Email' />
          <label>Password</label>
          <input type="text" placeholder='Enter Password' />
          <label>ConfirmPassword</label>
          <input type="text" placeholder='Re-enter Password' />
          <button type="submit">Register</button>
      </form>
    </div>
  </div>
  )
}

export default Regester
