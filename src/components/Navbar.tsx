import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // <-- Importamos el hook de traducción

export const Navbar = () => {
  const { i18n } = useTranslation();

  // Función para alternar el idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const socialLinks = {
    whatsapp: "https://wa.me/573207439176", 
    linkedin: "https://www.linkedin.com/in/santiago-muñoz-sánchez-429ba42b1",
    github: "https://github.com/gxtti70",
    email: "mailto:munozsanchezsantiago122@gmail.com"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO / NOMBRE - Reducido un poco en móvil para dar espacio */}
        <Link to="/" className="group flex-shrink-0">
          <span className="text-lg sm:text-xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors">
            PORTAFOLIO<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* LINKS DE CONTACTO */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* Los iconos ahora se ven en móvil pero con menos espacio */}
          <div className="flex items-center gap-3 sm:gap-5 border-r border-zinc-800 pr-3 sm:pr-5">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors" 
              title="GitHub"
            >
              <FaGithub size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-cyan-400 transition-colors" 
              title="LinkedIn"
            >
              <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href={socialLinks.email} 
              className="text-zinc-400 hover:text-cyan-400 transition-colors" 
              title="Email"
            >
              <FaEnvelope size={18} className="sm:w-5 sm:h-5" />
            </a>

            {/* BOTÓN DE IDIOMA MINIMALISTA (Agregado aquí) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 sm:gap-1.5 text-zinc-400 hover:text-cyan-400 transition-colors font-mono text-[10px] sm:text-xs font-bold uppercase group ml-1 sm:ml-2"
              title="Cambiar idioma / Change language"
            >
              <FaGlobe className="group-hover:animate-pulse sm:w-4 sm:h-4" size={16} />
              <span className="w-4 text-center">{i18n.language}</span>
            </button>
          </div>

          {/* BOTÓN WHATSAPP DESTACADO */}
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold hover:bg-cyan-600 hover:text-white transition-all shadow-lg shadow-cyan-900/20"
          >
            <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">HABLEMOS</span>
          </a>
        </div>
      </div>
    </nav>
  );
};