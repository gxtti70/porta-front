import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "home": {
        "greeting": "Junior Full-stack Developer de Medellín.",
        "value_title": "El valor que aporto",
        "value_p1": "Transformo la complejidad técnica en ventajas competitivas. Mi enfoque como desarrollador Full Stack se centra en crear soluciones donde la escalabilidad y la experiencia del usuario convergen.",
        "value_p2": "A diferencia de un desarrollo convencional, integro metodologías de Arquitectura RAG e Inteligencia Artificial para dotar a las aplicaciones de una capacidad analítica que optimiza procesos y potencia la toma de decisiones.",
        "value_points": {
          "enterprise": {
            "title": "Mentalidad Enterprise",
            "desc": "Experiencia en despliegues bajo estándares de calidad y seguridad de AWS."
          },
          "ai": {
            "title": "IA Aplicada",
            "desc": "Especialista en conectar modelos de lenguaje con datos privados de negocio (RAG)."
          },
          "agility": {
            "title": "Agilidad Técnica",
            "desc": "Capacidad probada para migrar sistemas a arquitecturas serverless eficientes."
          }
        },
        "work_experience": "Experiencia Laboral",
        "tcs": {
          "location": "Medellín, Antioquia (Híbrido)",
          "date": "Mayo 2025 – Octubre 2025",
          "bullet1_bold": "Orquesté",
          "bullet1_text": "el ciclo de vida completo de desarrollo Full Stack, liderando la creación de componentes escalables y coordinando pruebas con el equipo de QA para garantizar despliegues en la nube de alta integridad.",
          "bullet2_bold": "Arquitecté",
          "bullet2_text": "e implementé flujos de autenticación robustos mediante AWS Cognito y optimicé el almacenamiento de activos digitales empleando Amazon S3.",
          "bullet3_bold": "Ejecuté",
          "bullet3_text": "la migración estratégica de controladores tradicionales a arquitecturas serverless con Spring Cloud Function, incrementando la eficiencia operativa del backend.",
          "bullet4_bold": "Autoricé",
          "bullet4_text": "y elaboré documentación técnica crítica (manuales técnicos y de usuario), reduciendo los tiempos de onboarding y mejorando la mantenibilidad a largo plazo del sistema."
        },
        "tech_stack": "Stack Técnico",
        "certifications": "Certificaciones Destacadas",
        "projects": "Proyectos Seleccionados",
        "loading": "Sincronizando..."
      },
      "nav": {
        "back": "Volver al Portafolio"
      }
    }
  },
  en: {
    translation: {
      "home": {
        "greeting": "Junior Full-stack Developer from Medellín.",
        "value_title": "The value I bring",
        "value_p1": "I transform technical complexity into competitive advantages. My approach as a Full Stack Developer focuses on creating solutions where scalability and user experience converge.",
        "value_p2": "Unlike conventional development, I integrate RAG Architecture and Artificial Intelligence methodologies to equip applications with analytical capabilities that optimize processes and empower decision-making.",
        "value_points": {
          "enterprise": {
            "title": "Enterprise Mindset",
            "desc": "Experience in deployments under AWS quality and security standards."
          },
          "ai": {
            "title": "Applied AI",
            "desc": "Specialist in connecting language models with private business data (RAG)."
          },
          "agility": {
            "title": "Technical Agility",
            "desc": "Proven ability to migrate systems to efficient serverless architectures."
          }
        },
        "work_experience": "Work Experience",
        "tcs": {
          "location": "Medellín, Antioquia (Hybrid)",
          "date": "May 2025 – October 2025",
          "bullet1_bold": "Orchestrated",
          "bullet1_text": "the complete Full Stack development lifecycle, leading the creation of scalable components and coordinating tests with the QA team to ensure high-integrity cloud deployments.",
          "bullet2_bold": "Architected",
          "bullet2_text": "and implemented robust authentication flows using AWS Cognito and optimized digital asset storage using Amazon S3.",
          "bullet3_bold": "Executed",
          "bullet3_text": "the strategic migration of traditional controllers to serverless architectures with Spring Cloud Function, increasing operational efficiency on the backend.",
          "bullet4_bold": "Authored",
          "bullet4_text": "and developed critical technical documentation (technical and user manuals), reducing onboarding times and improving long-term system maintainability."
        },
        "tech_stack": "Tech Stack",
        "certifications": "Featured Certifications",
        "projects": "Selected Projects",
        "loading": "Synchronizing..."
      },
      "nav": {
        "back": "Back to Portfolio"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;