// ExampleComponent.js
import React, { useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Config/Firebase'; // Update the path if your firebase.js is in a different location.
import { MyContext } from './MyContext';

const Home = (props) => {
    const {isUser, updateUser, userData} = useContext(MyContext);
    const [user, setUser] = useState(isUser)
    
  const handleClick = () => {
    // Updating the context data from ComponentA
    updateUser(!isUser);
    setUser(isUser);
  };


  return (
    <div>
      <ul>
        <li>name: {userData.name}</li>
        <li>email: {userData.email}</li>
        <li>password: {userData.password}</li>
      </ul>

    </div>
  );
};

export default Home;