import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types/types';
import { useTranslation } from 'react-i18next'; // <-- IMPORTAMOS EL HOOK DE TRADUCCIÓN

import { 
  FaJava, FaPython, FaReact, FaAngular, FaAmazon, FaGithub, 
  FaNodeJs, FaVuejs, FaUbuntu, FaDocker, FaGitAlt, FaAward, FaGoogle, FaLinux
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
  { name: "Linux", icon: FaLinux },
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
  const { t } = useTranslation(); // <-- EXTRAEMOS LA FUNCIÓN "t"

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
              {t('home.greeting')} {/* <-- TEXTO DINÁMICO */}
            </p>
          </div>
        </div>
      </header>

      {/* VALOR QUE APORTO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="border border-zinc-800/50 bg-[#1f2937]/30 p-6 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/40 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <span className="hidden sm:block w-12 h-[1px] bg-cyan-800"></span>
            {t('home.value_title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-zinc-200 text-lg md:text-xl leading-relaxed font-light">
                {t('home.value_p1')}
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {t('home.value_p2')}
              </p>
            </div>
            
            <div className="bg-[#111827]/50 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-center space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <p className="text-sm text-zinc-300"><span className="text-zinc-100 font-bold">{t('home.value_points.enterprise.title')}:</span> {t('home.value_points.enterprise.desc')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <p className="text-sm text-zinc-300"><span className="text-zinc-100 font-bold">{t('home.value_points.ai.title')}:</span> {t('home.value_points.ai.desc')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <p className="text-sm text-zinc-300"><span className="text-zinc-100 font-bold">{t('home.value_points.agility.title')}:</span> {t('home.value_points.agility.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA LABORAL */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">{t('home.work_experience')}</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>

        <div className="border-2 border-zinc-800/50 bg-[#1f2937]/30 p-6 md:p-8 rounded-3xl group transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#1f2937]/60 shadow-xl shadow-black/20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center md:items-start gap-4 md:w-1/3 flex-shrink-0">
              <div className="w-14 h-14 rounded-full border border-zinc-800/80 bg-[#111827] flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:shadow-cyan-900/40 transition-all duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor">
                  <path d="M24 16.262c0-1.305-.522-2.174-1.827-3.088l-1.785-1.24c-.033-.022-.06-.045-.092-.068-.629-.473-.91-.912-.91-1.43 0-.696.567-1.13 1.371-1.13 1.022 0 1.503.477 2.111.477.479 0 .805-.326.805-.804 0-.348-.174-.631-.631-.848-.718-.348-1.503-.48-2.35-.48-.892 0-1.676.262-2.241.697a.984.984 0 0 0 0-.001 3.64 3.64 0 0 0-.326.283l-.008.01c-.65.695-1.19 1.714-1.623 3.145l-.501 1.652c-.893 2.912-2.306 4.304-4.504 4.304-2.415 0-3.938-1.675-3.938-4.153v.026-.025c0-2.468 1.509-4.159 3.69-4.174l.03-.002a4.857 4.857 0 0 1 2.089.457c.282.13.522.174.74.174.1 0 .192-.017.279-.041.362-.103.592-.408.592-.83 0-.326-.196-.653-.653-.87-.827-.414-1.894-.653-3.046-.653-.86 0-1.653.152-2.359.436-2.117.851-3.452 2.886-3.452 5.545l.002-.024-.001.024c0 .931.169 1.783.479 2.536-.452.985-1.143 1.509-2.046 1.509-1.087 0-1.804-.63-1.806-2.06V9.477h2.546c.588 0 .979-.348.979-.848s-.39-.848-.98-.848H2.09V5.563c0-.653-.435-1.088-1.044-1.088C.435 4.475 0 4.911 0 5.563v10.285c0 2.393 1.37 3.655 3.7 3.655.486.001.97-.08 1.43-.24h.005a3.49 3.49 0 0 0 1.81-1.514c1.034 1.117 2.565 1.775 4.48 1.775.999 0 1.868-.195 2.65-.607h.003c1.588-.827 2.72-2.502 3.503-5.068l.457-1.5a2.984 2.984 0 0 1-.162-.234c.308.492.785.953 1.468 1.43l1.631 1.13c.244.17.463.34.668.51.289.322.378.67.378 1.078 0 .935-.74 1.566-1.807 1.566-1.022 0-1.893-.522-2.371-.522s-.806.325-.806.804c0 .348.174.63.632.848.631.304 1.653.566 2.567.566 1.153 0 2.111-.348 2.785-.957a1.59 1.59 0 0 0 .156-.161A3.104 3.104 0 0 0 24 16.262z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-cyan-300">
                  Tata Consultancy Services
                </h3>
                <p className="text-sm font-mono text-zinc-400">{t('home.tcs.location')}</p>
              </div>
            </div>

            <div className="flex flex-col md:w-2/3 border-t md:border-t-0 md:border-l border-zinc-800/80 pt-6 md:pt-0 md:pl-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <h4 className="text-lg font-bold text-zinc-100 italic">Junior Full-stack Developer (Intern)</h4>
                <span className="text-[10px] md:text-xs font-mono font-medium px-3 py-1.5 bg-cyan-950/40 text-cyan-200 rounded-full border border-cyan-800/40 w-fit">
                  {t('home.tcs.date')}
                </span>
              </div>
              
              <ul className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span><strong>{t('home.tcs.bullet1_bold')}</strong> {t('home.tcs.bullet1_text')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span><strong>{t('home.tcs.bullet2_bold')}</strong> {t('home.tcs.bullet2_text')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span><strong>{t('home.tcs.bullet3_bold')}</strong> {t('home.tcs.bullet3_text')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">▹</span>
                  <span><strong>{t('home.tcs.bullet4_bold')}</strong> {t('home.tcs.bullet4_text')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STACK TÉCNICO */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-widest flex items-center gap-4">
          {t('home.tech_stack')}
          <div className="h-[1px] flex-grow bg-zinc-800/50"></div>
        </h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-[#1f2937]/40 rounded-xl border border-zinc-800/50 hover:border-cyan-500/50 transition-all group">
              <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs md:text-sm font-mono text-zinc-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{t('home.certifications')}</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="bg-[#1f2937]/30 border border-zinc-800/50 p-5 rounded-2xl hover:bg-[#1f2937]/60 transition-all flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111827] border border-zinc-700/50 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/50">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-base truncate group-hover:text-cyan-300">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">{t('home.projects')}</h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>
        {loading ? (
          <div className="text-zinc-500 font-mono animate-pulse">{t('home.loading')}</div>
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