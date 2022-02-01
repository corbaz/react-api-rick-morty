import img_home from './img/home.jpeg';
import './App.css';
// import Welcome from './components/Welcome';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Profile from './pages/Profile';
import { useState } from 'react';
import Personajes from './components/Personajes';

function App() {
  const [personajes, setPersonajes] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const data = await api.json();
    await setPersonajes(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {personajes
          ? <Personajes
            personajes={personajes}
            setPersonajes={setPersonajes}
          />
          : <>
            <img
              src={img_home}
              alt="Rick & Morty"
              className='img-home'
            />
            <button
              onClick={reqApi}
              className='btn-search'>Buscar Personaje
            </button>
          </>
        }
      </header>
    </div>
  );
}

export default App;
