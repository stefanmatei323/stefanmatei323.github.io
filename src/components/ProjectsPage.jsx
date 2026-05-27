import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineChevronRight, HiOutlineArrowLeft } from "react-icons/hi";
import ProjectCard from './ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = () => {
  // Exemplu de date pentru proiecte
  const projects = [
    { id: 1, title: "Senzor Proximitate", desc: "Proiect realizat pentru laboratorul de Electronică.", tags: ["Arduino", "C++"], status: "Finalizat", img: "https://via.placeholder.com/200x120" },
    { id: 2, title: "Amplificator Audio", desc: "Schema realizată în Eagle PCB și testată.", tags: ["Analog", "PCB"], status: "În lucru", img: "https://via.placeholder.com/200x120" },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <Link to="/" className="back-btn"><HiOutlineArrowLeft /> Înapoi</Link>
        <h1>My Projects</h1>
      </header>

      <div className="projects-wrapper">
        <div className="projects-scroll-area">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        {/* Săgeata din dreapta pentru swipe/scroll */}
        <div className="swipe-arrow">
          <HiOutlineChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;