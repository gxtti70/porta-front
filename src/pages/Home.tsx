import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types/types';

import { 
  FaJava, FaPython, FaReact, FaAngular, FaAmazon, FaGithub, 
  FaNodeJs, FaVuejs, FaUbuntu, FaDocker, FaGitAlt, FaAward, FaGoogle
} from 'react-icons/fa';
import { 
  SiSpringboot, SiFastapi, SiPostgresql, SiClaude, SiGooglegemini,
  SiJavascript, SiTypescript, SiTailwindcss
} from 'react-icons/si';

const techStack = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Python", icon: FaPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "Vue", icon: FaVuejs },
  { name: "Angular", icon: FaAngular },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Ubuntu", icon: FaUbuntu },
  { name: "AWS", icon: FaAmazon },
  { name: "Claude", icon: SiClaude },
  { name: "Gemini AI", icon: SiGooglegemini }
];

const certifications = [
  { title: "Amazon Junior Software Developer", issuer: "AWS", icon: FaAmazon },
  { title: "Programación con Python", issuer: "Universidad Nacional de Colombia", icon: FaPython },
  { title: "Python for Everybody", issuer: "University of Michigan", icon: FaPython },
  { title: "Claude Code in Action", issuer: "Anthropic", icon: SiClaude },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Entrena", icon: FaAmazon },
  { title: "Google AI", issuer: "Google", icon: FaGoogle },
  { title: "Agile Software Development: Scrum", issuer: "Project Management Institute", icon: FaAward },
  { title: "Habilidades Directivas y Tecnológicas", issuer: "AWS & Bancolombia", icon: FaAward },
  { title: "Cloud Foundations for Startups", issuer: "AWS Entrena Colombia", icon: FaAmazon }
];

interface HomeProps {
  projects: Project[];
  loading: boolean;
}

export default function Home({ projects, loading }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#111827] text-zinc-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* HEADER RESPONSIVE */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-[#1f2937] text-cyan-400 text-3xl font-black font-mono shadow-xl shadow-cyan-900/20 flex-shrink-0">
            SM
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Santiago Muñoz
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mt-2 font-medium">
              Junior Full-stack Developer de Medellín.
            </p>
          </div>
        </div>
      </header>

      {/* VALOR QUE APORTO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="border border-zinc-800/50 bg-[#1f2937]/30 p-6 md:p-10 rounded-3xl shadow-lg shadow-black/30">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            <span className="hidden sm:block w-10 h-[1px] bg-cyan-800"></span>
            El valor que aporto
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-5xl">
            Mi enfoque va más allá de escribir líneas de código; me dedico a construir soluciones tecnológicas que resuelven problemas reales y generan un impacto tangible. Aporto valor traduciendo la complejidad del backend y el poder de la <span className="text-cyan-300 font-medium">Inteligencia Artificial</span> en herramientas intuitivas y eficientes.
          </p>
        </div>
      </section>

      {/* SECCIÓN: EXPERIENCIA LABORAL (ESTILO HARVARD) */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">Experiencia Laboral</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>

        <div className="border-2 border-zinc-800/50 bg-[#1f2937]/30 p-6 md:p-8 rounded-3xl group transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#1f2937]/60 shadow-xl shadow-black/20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center md:items-start gap-4 md:w-1/3 flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-800/80 bg-[#111827] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                <FaAward className="text-white group-hover:text-cyan-400 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  Tata Consultancy Services
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase">Medellín, Antioquia (Híbrido)</p>
              </div>
            </div>

            <div className="flex flex-col md:w-2/3 border-t md:border-t-0 md:border-l border-zinc-800/80 pt-6 md:pt-0 md:pl-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <h4 className="text-lg font-bold text-zinc-100 italic">Junior Full-stack Developer (Intern)</h4>
                <span className="text-[10px] md:text-xs font-mono font-medium px-3 py-1.5 bg-cyan-950/40 text-cyan-200 rounded-full border border-cyan-800/40 w-fit">
                  Mayo 2025 – Octubre 2025
                </span>
              </div>
              
              <ul className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span>**Orquesté** el ciclo de vida completo de desarrollo Full Stack, liderando la creación de componentes escalables y coordinando pruebas con el equipo de **QA** para asegurar despliegues en la nube de alta integridad.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span>**Arquitecté** e implementé flujos de autenticación robustos mediante **AWS Cognito** y optimicé el almacenamiento de activos digitales empleando **Amazon S3**.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span>**Ejecuté** la migración estratégica de controladores tradicionales a arquitecturas serverless con **Spring Cloud Function**, incrementando la eficiencia operativa del backend.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span>**Autoricé** y elaboré documentación técnica crítica (manuales técnicos y de usuario), reduciendo los tiempos de **onboarding** y mejorando la mantenibilidad a largo plazo del sistema.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STACK TÉCNICO */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-widest flex items-center gap-4">
          Stack Técnico
          <div className="h-[1px] flex-grow bg-zinc-800/50"></div>
        </h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-[#1f2937]/40 rounded-xl border border-zinc-800/50 hover:border-cyan-500/50 transition-all group cursor-default"
            >
              <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs md:text-sm font-mono text-zinc-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Certificaciones Destacadas</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="bg-[#1f2937]/30 border border-zinc-800/50 p-5 rounded-2xl hover:border-cyan-500/50 hover:bg-[#1f2937]/60 transition-all group flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111827] border border-zinc-700/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-cyan-500/50 shadow-inner transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-base truncate group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] md:text-xs font-mono">{cert.issuer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROYECTOS */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">Proyectos Seleccionados</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>
        {loading ? (
          <div className="flex items-center gap-3 text-zinc-500 font-mono animate-pulse">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
            Sincronizando con el backend...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}