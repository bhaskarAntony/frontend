import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Video from './pages/Video';
import Topnav from './components/Topnav';
import Sidenav from './components/Sidenav';
import Pnf from './pages/Pnf';

function App() {
  return (
   <div>
     <Router>
    <Topnav/>
     <Routes>
     <Route path={'/'} element={<Home/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/video'} element={<Video/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
     </Routes>
    </Router>
   </div>
  );
}

export default App;
