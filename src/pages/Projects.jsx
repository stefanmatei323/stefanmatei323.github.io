import React, { useState, useRef } from 'react';
import { proiecteInginerie } from '../data';
import ProjectCard from '../components/ProjectCard';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi"; 
import './Pages.css';

const ProjectSection = ({ title, category, t, limba }) => {
  const scrollRef = useRef(null);
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -580 : 580; 
      scrollRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const filteredProjects = proiecteInginerie.filter(p => p.categorie === category);

  if (filteredProjects.length === 0) return null;

  return (
    <div className="project-section-wrapper">
      <div className="category-header">
        <div className="lime-accent-line"></div>
        <h2>{title}</h2>
      </div>
      
      <div className="swipe-wrapper">
        {filteredProjects.length > 1 && showLeftArrow && (
          <button 
            className="swipe-arrow-btn left" 
            onClick={() => scroll('left')}
          >
            <HiOutlineChevronLeft />
          </button>
        )}

        <div 
          className="horizontal-scroll" 
          ref={scrollRef} 
          onScroll={handleScroll}
        >
          {filteredProjects.map(p => (
            <ProjectCard 
              key={p.id} 
              data={p} 
              lang={limba} 
              t={t} 
            />
          ))}
        </div>
        
        {filteredProjects.length > 1 && (
          <button 
            className="swipe-arrow-btn right" 
            onClick={() => scroll('right')}
          >
            <HiOutlineChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = ({ t, limba }) => {
  return (
    <div className="page-container projects-page fade-in">
      {/* Categoriile existente */}
      <ProjectSection title={t.catEmbedded} category="Embedded" t={t} limba={limba} />
      <ProjectSection title={t.catAndroid} category="Android" t={t} limba={limba} />
      
      {/* --- NOUA CATEGORIE: AUTOMOTIVE --- */}
      <ProjectSection title={t.catAutomotive} category="Automotive" t={t} limba={limba} />
    </div>
  );
};

export default Projects;