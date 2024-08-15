import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import AlbumList from './components/AlbumList';
import { Album } from "./components/Album.interface";
import AlbumDetails from './components/AlbumDetails';

function App() {
  
  const [albums, setAlbums] = useState<Album[]>([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => setAlbums(albums));
  }, []);
  
  const getLinkClass = ({isActive}: any) => isActive ? "font-bold" : "";

  return (
    <Router>
      <nav className='nav-menu'>
        <ul className='menu'>
          <li><NavLink className={getLinkClass} to="/">Home</NavLink></li>
          <li><NavLink className={getLinkClass} to="/albums">Albums</NavLink></li>
          <li><NavLink className={getLinkClass} to="/about">About</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumList albums={albums} />} />
        <Route path="/albums/:id/photos" element={<AlbumDetails albums={albums} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;