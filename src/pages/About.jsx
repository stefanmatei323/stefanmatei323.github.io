import React from 'react';
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import './Pages.css';

const About = ({ t }) => {
  
  // Funcția care forțează deschiderea PDF-ului într-un tab nou
  const handleOpenCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <div className="main-content page-padding fade-in">
      <div className="container about-page-container">
        
        <header>
          <h1>{t.about}</h1>
        </header>
        
        <div className="about-btns-row">
          
          {/* --- MODIFICARE AICI --- */}
          <button onClick={handleOpenCV} className="btn-pill-lime">
            <HiOutlineDownload className="btn-icon" />
            <span>{t.cvBtn}</span>
          </button>

          {/* Butonul de contact rămâne link */}
          <Link 
            to="/contact"
            className="btn-pill-outline"
            style={{ textDecoration: 'none' }}
          >
            <HiOutlineMail className="btn-icon" />
            <span>{t.contact}</span>
          </Link>
        </div>

        <div className="dark-bio-card">
          <p className="bio-text">
            {t.bio}
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;