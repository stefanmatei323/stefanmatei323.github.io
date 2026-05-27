import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Logo-uri
import { FiCopy, FiCheck } from 'react-icons/fi';     // Iconițe pentru Copy
// import './Contact.css'; // Asigură-te că imporți fișierul tău de CSS

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "eusuntmatei323@gmail.com";

  // Funcția care copiază email-ul în clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Revine la iconița de copy după 2 secunde
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="main-content page-padding fade-in">
      <div className="container contact-page-container">
        
        <header>
          <h1>Contact</h1>
        </header>

        <div className="contact-grid-layout">
          
          {/* SECȚIUNEA EMAIL */}
          <div className="contact-section">
            <p className="contact-label">Email:</p>
            <div className="contact-box email-box">
              <span className="contact-text">{email}</span>
              <button 
                className="copy-btn" 
                onClick={handleCopy} 
                title="Copiază Email"
              >
                {copied ? <FiCheck className="copied-icon" /> : <FiCopy />}
              </button>
            </div>
          </div>

          {/* SECȚIUNEA SOCIAL MEDIA */}
          <div className="contact-section">
            <p className="contact-label">Social Media:</p>
            <div className="social-links-wrapper">
              
              {/* Căsuța GitHub */}
              <a href="https://github.com/stefanmatei323" target="_blank" rel="noreferrer" className="contact-box social-box">
                <FaGithub className="social-icon" />
                <span className="contact-text">GitHub: stefanmatei323</span>
              </a>

              {/* Căsuța LinkedIn */}
              <a href="https://linkedin.com/in/stefanmatei323" target="_blank" rel="noreferrer" className="contact-box social-box">
                <FaLinkedin className="social-icon linkedin-color" />
                <span className="contact-text">LinkedIn: stefanmatei323</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;