import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Seguridad: Extraemos la miniatura o usamos un placeholder si no hay imagen
  const thumbnail = project.images?.split(',')[0] || 'https://via.placeholder.com/600x400?text=Santiago+Muñoz';

  // Seguridad: Convertimos el stack en array, manejando casos vacíos
  const techList = project.tech_stack?.split(',') || [];

  return (
    <Link to={`/proyecto/${project.id}`} className="group block h-full">
      <div className="relative bg-[#1f2937]/50 border-2 border-zinc-800/50 p-4 sm:p-6 rounded-3xl hover:border-cyan-500/80 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-cyan-900/10">
        
        {/* Contenedor de Imagen */}
        <div className="w-full h-48 sm:h-52 mb-4 sm:mb-6 rounded-2xl overflow-hidden border border-zinc-700/30 bg-[#111827] relative flex-none">
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-800 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
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
            <span className="text-[8px] sm:text-[9px] font-mono font-medium text-cyan-300 uppercase tracking-widest bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/40">
              {project.category || 'Desarrollo'}
            </span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* STACK TÉCNICO: Con seguridad contra nulos */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {techList.map((tech, index) => (
              <span 
                key={`${tech}-${index}`} 
                className="text-[8px] sm:text-[9px] font-mono px-2 py-0.5 bg-[#0f172a] text-zinc-500 rounded border border-zinc-800/50 hover:border-zinc-700 transition-colors"
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