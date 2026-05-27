import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Hero.css';

const HeroContent = ({ t }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-section fade-in">
      <div className="hero-content-centered">
        {/* Titlul din data.js - acum nu mai e "Welcome" fixat */}
        <h1 className="hero-title">
          {t.homeTitle}
        </h1>
        
        {/* Subtitlul/Bio din data.js */}
        <p className="hero-subtitle">
          {t.bioShort}
        </p>

        <div className="hero-btns">
          {/* Folosim t.projects pentru textul butonului */}
          <button className="btn-pill-lime" onClick={() => navigate('/projects')}>
            {t.projects}
          </button>
          
          {/* Folosim t.contact pentru textul butonului */}
          <button className="btn-pill-outline" onClick={() => navigate('/contact')}>
            {t.contact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;