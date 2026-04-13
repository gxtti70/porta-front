import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/types';
import { FaArrowRight } from 'react-icons/fa';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://porta-back.onrender.com';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const rawThumbnail = project.images?.split(',')[0] || '';

  const formatImageUrl = (url: string) => {
    if (!url || url.trim() === "") {
      return 'https://via.placeholder.com/600x400?text=Santiago+Muñoz';
    }
    if (url.includes('localhost:8000')) {
      return url.replace('http://localhost:8000', BACKEND_URL);
    }
    if (url.startsWith('/static')) {
      return `${BACKEND_URL}${url}`;
    }
    return url;
  };

  const thumbnail = formatImageUrl(rawThumbnail);
  const techList = project.tech_stack?.split(',') || [];

  return (
    // AQUÍ ESTÁ LA MAGIA: touch-manipulation y active:scale para respuesta instantánea en mobile
    <Link 
      to={`/proyecto/${project.id}`} 
      className="group block h-full touch-manipulation active:scale-[0.98] transition-transform duration-75"
    >
      {/* md:hover desactiva el hover en celulares para evitar el doble tap en Safari */}
      <div className="relative bg-[#1f2937]/50 border-2 border-zinc-800/50 p-4 sm:p-6 rounded-3xl md:hover:border-cyan-500/80 transition-all duration-300 flex flex-col h-full shadow-lg md:hover:shadow-cyan-900/10">
        
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
            // La imagen solo hace zoom en computadores (md:group-hover)
            className={`w-full h-full object-cover md:group-hover:scale-110 transition-all duration-700 ${
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
          
          {/* El título solo cambia de color en PC (md:group-hover) */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:group-hover:text-cyan-400 transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>

          {/* STACK TÉCNICO */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {techList.map((tech, index) => (
              <span 
                key={`${tech}-${index}`} 
                className="text-[8px] sm:text-[9px] font-mono px-2 py-0.5 bg-[#0f172a] text-zinc-500 rounded border border-zinc-800/50 md:hover:border-zinc-700 transition-colors"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* BOTÓN DE CALL TO ACTION (SOLO MOBILE) */}
          <div className="mt-5 md:hidden">
            <div className="w-full py-2.5 bg-cyan-900/20 border border-cyan-800/50 rounded-xl flex items-center justify-center gap-2 text-cyan-400 font-mono text-[10px] uppercase tracking-widest active:bg-cyan-900/40 transition-colors">
              Ver Detalles <FaArrowRight size={10} />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};