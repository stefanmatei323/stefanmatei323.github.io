import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './ProjectCard.css';

const ProjectCard = ({ data, lang, t }) => {
  if (!data) return null;

  // Extragem limba corectă (ro sau en)
  const content = data[lang] || data['ro'];

  // Verificăm dacă proiectul are un link valid (să nu fie gol sau "#")
  const hasValidLink = data.link && data.link !== "" && data.link !== "#";

  // Funcția care oprește link-ul și afișează mesajul dacă nu există cod sursă
  const handleButtonClick = (e) => {
    if (!hasValidLink) {
      e.preventDefault(); // Oprește browserul din a deschide un tab nou
      
      const mesaj = lang === 'en' 
        ? "The source code for this project is private or currently unavailable."
        : "Codul sursă pentru acest proiect este privat sau indisponibil momentan.";
        
      alert(mesaj);
    }
  };

  return (
    <div className="p-card">
      <div className="p-info">
        <div className="p-top">
          <div className="p-title-area">
            <h3>{content.title}</h3>
            {/* SUBTITRARE: Integrată sub titlu */}
            {/*<p className="p-subtitle">{content.subtitle}</p>*/}
          </div>
          
          {/* STATUS: Folosește statusKey pentru clasă (culori) și content.status pentru text */}
          <span className={`p-status ${data.statusKey}`}>
            {content.status}
          </span>
        </div>

        <p className="p-desc">{content.desc}</p>
        
        <div className="p-tags">
          {content.tags?.map(tag => (
            <span key={tag} className="p-tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="p-img">
        <img src={data.img} alt={content.title} />
      </div>
      
      <div className="p-footer">
        <a 
          href={hasValidLink ? data.link : "#"} 
          target={hasValidLink ? "_blank" : "_self"} 
          rel="noreferrer" 
          className="p-btn"
          onClick={handleButtonClick}
          style={{ textDecoration: 'none' }}
        >
          <HiOutlineExternalLink /> {t.viewBtn}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;