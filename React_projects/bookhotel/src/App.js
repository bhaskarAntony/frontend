import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { MyContextProvider } from './pages/MyContext';
import Register from './pages/Register';
import Pnf from './pages/Pnf';
import Menu from './pages/Menu';
import About from './pages/About';
function App() {
  return (
   <div>
    <MyContextProvider>
     <BrowserRouter>
     <Menu/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
  </BrowserRouter>
    </MyContextProvider>

   </div>
  );
}

export default App;
