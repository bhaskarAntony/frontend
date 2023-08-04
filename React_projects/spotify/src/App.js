import './App.css';
import Home from './compinents/Home';
import Menu from './compinents/Menu';
import Pnf from './compinents/Pnf';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Music from './compinents/Music';
import Contact from './compinents/Contact';
import Search from './compinents/Search';
import Albums from './compinents/Albums';

function App() {
  return (
   <BrowserRouter>
    <Menu/>
    <ToastContainer autoClose={4000} position={'top-right'}/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/music/artist/:artistId'} element={<Music/>}/>
      <Route path={'/albums'} element={<Albums/>}/>
      <Route path={'/contact'} element={<Contact/>}/>
      <Route path={'/search'} element={<Search/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
