import React, { useState } from 'react';
import '../styels/login.css'
import Home from './Home';

function Regester() {
  const [currentPage, setCurrentPage] = useState('home');
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setCurrentPage("home")
  };
  const upload = (e) =>{
    e.preventDefault();
    localStorage.setItem("key", "true");
    alert("uploaded successfully")
    
}
  return (
    <div className='container' onSubmit={upload}>
    <div className="card">
      <h1>Regester</h1>
      <form >
          <label>Username</label>
          <input type="text" placeholder='Enter name'/>
          <label>Email</label>
          <input type="text" placeholder='Enter Email' />
          <label>Password</label>
          <input type="text" placeholder='Enter Password' />
          <label>ConfirmPassword</label>
          <input type="text" placeholder='Re-enter Password' />
          <button type="submit">Regester</button>
      </form>
    </div>
    {currentPage === 'home' && <Home />}
  </div>
  )
}

export default Regester
