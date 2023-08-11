import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null
  })
  const updateIsUser = (newData) => {
    setIsUser(newData);
  };
  const updateUser = (newData1) => {
    setUserData(newData1);
  };

  return (
    <MyContext.Provider value={{isUser, setIsUser, userData, setUserData, updateIsUser, updateUser}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
