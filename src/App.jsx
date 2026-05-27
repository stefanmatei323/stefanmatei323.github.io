import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Hero'; 
import HeroContent from './pages/HeroContent';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { translations } from './data';
import './App.css';

function App() {
  const [limba, setLimba] = useState('ro');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Obținem setul de traduceri
  const t = translations[limba];

  return (
    <Router>
      <div className="app-shell">
        <Navbar 
          t={t} 
          limba={limba} 
          setLimba={setLimba} 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        
        <main className="main-content">
          <Routes>
            {/* Pagina Home NU are padding-top pentru a preveni scroll-ul */}
            <Route path="/" element={<HeroContent t={t} limba={limba} />} />

            {/* Celelalte pagini primesc wrapper-ul 'page-padding' pentru a nu fi acoperite de navbar */}
            <Route 
              path="/projects" 
              element={<div className="page-padding"><Projects t={t} limba={limba} /></div>} 
            />
            <Route 
              path="/about" 
              element={<div className="page-padding"><About t={t} /></div>} 
            />
            <Route 
              path="/contact" 
              element={<div className="page-padding"><Contact t={t} /></div>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;