import React, { useState } from 'react'
import '../src/App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Company from './pages/Company'
import Nav from './components/Nav'
import Regester from './pages/Regester'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'

function App() {

  return (
      <BrowserRouter>
      <Nav/>
        <Routes>
       {
        localStorage.getItem("isUser") ?    <Route path='/' element={<Home/>}/> :    <Route path='/' element={<Regester/>}/>
       }
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/register' element={<Regester/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
