import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Project } from '../types/types';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProjectDetail({ projects }: { projects: Project[] }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  
  const images = project?.images ? project.images.split(',') : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return <div className="h-screen flex items-center justify-center text-white font-mono">Cargando...</div>;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="h-screen bg-[#111827] text-zinc-100 flex flex-col overflow-hidden">
      
      {/* NAVBAR MÁS COMPACTA */}
      <nav className="px-12 py-4 flex-none">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-[9px] uppercase tracking-[0.3em]">
          <FaArrowLeft /> Volver al Portafolio
        </Link>
      </nav>

      {/* CONTENIDO PRINCIPAL - Ajustado para ocupar el 100% sin scroll */}
      <main className="flex-grow px-12 pb-6 flex items-center justify-center">
        <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-10 h-full max-h-[85vh]">
          
          {/* COLUMNA IZQUIERDA: VISUAL (CARRUSEL) */}
          <div className="lg:col-span-5 flex flex-col h-full gap-4">
            <div className="relative flex-grow rounded-[2rem] overflow-hidden border-2 border-zinc-800/50 bg-zinc-900/20 shadow-2xl group">
              <img 
                src={images[currentIndex]} 
                className="w-full h-full object-contain p-4" 
                alt="Captura del proyecto"
              />
              
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3.5 rounded-full hover:bg-cyan-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <FaChevronLeft size={12} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3.5 rounded-full hover:bg-cyan-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
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
              <a href={project.link_repo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-zinc-800/30 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all text-[10px] font-mono uppercase tracking-widest">
                <FaGithub size={14}/> GitHub
              </a>
              <a href={project.link_demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition-all font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-cyan-900/20">
                <FaExternalLinkAlt size={12}/> Demo Live
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN SIN SCROLL */}
          <div className="lg:col-span-7 flex flex-col h-full justify-between py-1">
            <div className="space-y-4">
              <header>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[1px] w-6 bg-cyan-500"></span>
                  <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-[0.4em]">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter">
                  {project.title}
                </h1>
              </header>

              {/* CAJA DE TEXTO OPTIMIZADA (Se eliminó overflow-y-auto y max-h fijo) */}
              <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2rem] space-y-6">
                <section>
                  <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                    Contexto
                  </h4>
                  <p className="text-xl font-light italic text-zinc-200 leading-snug">
                    "{project.description}"
                  </p>
                </section>

                <div className="h-[1px] bg-gradient-to-r from-zinc-800/50 to-transparent"></div>

                <section>
                  <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                    Análisis del Proyecto
                  </h4>
                  <p className="text-zinc-400 text-sm lg:text-base leading-relaxed font-light">
                    {project.explanation}
                  </p>
                </section>
              </div>
            </div>

            {/* STACK TÉCNICO COMPACTO */}
            <footer className="pt-4">
              <h4 className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-3">Stack Tecnológico</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.split(',').map(tech => (
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