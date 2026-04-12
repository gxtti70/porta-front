import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Project } from './types/types';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Navbar } from './components/Navbar'; 
import { Chatbot } from './components/Chatbot'; 
import './i18n'; // <-- Solo dejamos el diccionario, adiós al botón flotante

// Detecta automáticamente si estás en local (.env.local) o en producción
const API_BASE = import.meta.env.VITE_API_URL || 'https://porta-back.onrender.com';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Lógica para traer los proyectos (inteligente con API_BASE)
  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando proyectos");
        return res.json();
      })
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error conectando al backend:", err);
        setProjects([]); 
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-zinc-100 font-sans selection:bg-cyan-500/30 relative">
        
        <Navbar /> 

        <div className="pt-20"> 
          <Routes>
            <Route 
              path="/" 
              element={<Home projects={projects} loading={loading} />} 
            />
            
            <Route 
              path="/proyecto/:id" 
              element={<ProjectDetail projects={projects} />} 
            />
          </Routes>
        </div>

        {/* Lexi Bot siempre visible */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;