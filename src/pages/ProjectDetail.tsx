import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Project } from '../types/types';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProjectDetail({ projects }: { projects: Project[] }) {
  const { id } = useParams();
  
  // Buscamos el proyecto con seguridad
  const project = projects?.find(p => p.id === Number(id));
  
  // Procesamos las imágenes con un fallback por si no hay ninguna
  const images = project?.images ? project.images.split(',') : ['https://via.placeholder.com/800x600?text=Sin+Imagen'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pantalla de carga o error si no existe el proyecto
  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white font-mono gap-4 bg-[#111827]">
        <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        <p>Buscando proyecto...</p>
        <Link to="/" className="text-cyan-400 hover:underline text-xs mt-4">Volver al inicio</Link>
      </div>
    );
  }

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-[#111827] text-zinc-100 flex flex-col lg:h-screen lg:overflow-hidden">
      
      {/* NAVBAR COMPACTA - Ajustada para móviles */}
      <nav className="px-6 md:px-12 py-4 flex-none mt-16 lg:mt-0">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-[10px] uppercase tracking-widest">
          <FaArrowLeft /> Volver al Portafolio
        </Link>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow px-6 md:px-12 pb-12 lg:pb-6 flex items-center justify-center">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:h-full lg:max-h-[85vh]">
          
          {/* COLUMNA IZQUIERDA: CARRUSEL RESPONSIVE */}
          <div className="lg:col-span-5 flex flex-col h-[40vh] sm:h-[50vh] lg:h-full gap-4">
            <div className="relative flex-grow rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-zinc-800/50 bg-zinc-900/20 shadow-2xl group">
              <img 
                src={images[currentIndex].trim()} 
                className="w-full h-full object-contain p-4" 
                alt="Captura del proyecto"
              />
              
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-cyan-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <FaChevronLeft size={12} />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-cyan-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <FaChevronRight size={12} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1 transition-all rounded-full ${i === currentIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/10'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="grid grid-cols-2 gap-3 flex-none">
              <a href={project.link_repo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-zinc-800/30 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all text-[10px] font-mono uppercase tracking-widest">
                <FaGithub size={14}/> GitHub
              </a>
              <a href={project.link_demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition-all font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-cyan-900/20">
                <FaExternalLinkAlt size={12}/> Demo Live
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="lg:col-span-7 flex flex-col h-full lg:justify-between py-1">
            <div className="space-y-6">
              <header>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[1px] w-6 bg-cyan-500"></span>
                  <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-[0.4em]">
                    {project.category || 'Proyecto Seleccionado'}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter">
                  {project.title}
                </h1>
              </header>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] space-y-6 lg:overflow-y-auto lg:max-h-[45vh] scrollbar-thin scrollbar-thumb-zinc-800">
                <section>
                  <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                    Contexto
                  </h4>
                  <p className="text-lg md:text-xl font-light italic text-zinc-200 leading-snug">
                    "{project.description}"
                  </p>
                </section>

                <div className="h-[1px] bg-gradient-to-r from-zinc-800/50 to-transparent"></div>

                <section>
                  <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                    Análisis del Proyecto
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                    {project.explanation || 'Análisis técnico en proceso.'}
                  </p>
                </section>
              </div>
            </div>

            {/* STACK TÉCNICO */}
            <footer className="pt-6">
              <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-3">Tecnologías Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack?.split(',').map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-zinc-800/40 border border-zinc-800/80 rounded-lg text-[10px] font-mono text-cyan-300">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </footer>
          </div>

        </div>
      </main>
    </div>
  );
}