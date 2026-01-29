
import React from 'react';
import { Project, Category } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative cursor-pointer reveal flex flex-col"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 shadow-md transition-shadow group-hover:shadow-2xl bg-white/50 backdrop-blur-sm">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#f83e02]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge on Overlay for context */}
        <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] bg-white text-[#f83e02] px-2 py-1 rounded shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f83e02]">
          {project.category}
        </span>
        <h3 className="text-lg md:text-xl font-display text-slate-900 group-hover:text-[#f83e02] transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-[10px] md:text-xs text-slate-600 line-clamp-2 max-w-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
