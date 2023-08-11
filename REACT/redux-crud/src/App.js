import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import Menu from './components/Menu';
import Pnf from './pages/Pnf';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
  <div className='bg-dark'>
      <ToastContainer />
     <Router>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
   </Router>
  </div>
  );
}

export default App;
