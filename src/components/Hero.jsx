import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineUser, HiOutlineMail, HiMenuAlt3, HiX } from "react-icons/hi";
import './Hero.css';
// Am corectat calea: intr-un proiect React folosim cai relative (./) 
import Logo from './Logo'; 

const Hero = ({ t, setLimba, limba, menuOpen, setMenuOpen }) => {
  
  // Funcție pentru a închide meniul burger la click pe un link
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container-centered">
        <NavLink to="/" className="logo-container" onClick={handleNavLinkClick}>
          <Logo />
        </NavLink>
        
        {/* Nav Links - primesc clasa 'active' pentru meniul burger de mobil */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              onClick={handleNavLinkClick}
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <HiOutlineHome className="icon" /> {t.home}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              onClick={handleNavLinkClick}
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <HiOutlineBriefcase className="icon" /> {t.projects}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              onClick={handleNavLinkClick}
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <HiOutlineUser className="icon" /> {t.about}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              onClick={handleNavLinkClick}
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <HiOutlineMail className="icon" /> {t.contact}
            </NavLink>
          </li>
          
          {/* Buton schimbare limbă */}
          <button 
            className="lang-button" 
            onClick={() => {
              setLimba(limba === 'ro' ? 'en' : 'ro');
              handleNavLinkClick();
            }}
          >
            {limba === 'ro' ? 'EN' : 'RO'}
          </button>
        </ul>

        {/* Iconița Burger */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Hero;