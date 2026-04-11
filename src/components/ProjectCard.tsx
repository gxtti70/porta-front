import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Extraemos solo la primera imagen para la miniatura
  const thumbnail = project.images?.split(',')[0] || 'https://via.placeholder.com/600x400?text=Proyecto';

  return (
    <Link to={`/proyecto/${project.id}`} className="group block h-full">
      <div className="relative bg-[#1f2937]/50 border-2 border-zinc-800/50 p-6 rounded-3xl hover:border-cyan-500/80 transition-all duration-300 flex flex-col h-full">
        
        {/* Imagen: Mantenemos el aspecto fijo para que todas las cartas midan igual arriba */}
        <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden border border-zinc-700/30 bg-[#111827] relative flex-none">
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-800 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
          )}

          <img 
            src={thumbnail} 
            alt={project.title}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Info del Proyecto */}
        <div className="flex flex-col flex-grow">
          <div className="mb-3">
            <span className="text-[9px] font-mono font-medium text-cyan-300 uppercase tracking-widest bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/40">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* STACK COMPLETO: Sin filtros, pero con gap controlado para no romper el layout */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tech_stack.split(',').map((tech) => (
              <span 
                key={tech} 
                className="text-[9px] font-mono px-2 py-0.5 bg-[#0f172a] text-zinc-500 rounded border border-zinc-800/50 hover:border-zinc-700 transition-colors"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};