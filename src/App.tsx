import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Project } from './types/types';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Navbar } from './components/Navbar'; 
import { Chatbot } from './components/Chatbot'; 

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Lógica para traer los proyectos del Backend en Producción
  useEffect(() => {
    // CORRECCIÓN: Se agrega /projects al final de la URL
    fetch('https://porta-back.onrender.com/projects')
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando proyectos");
        return res.json();
      })
      .then((data) => {
        // VALIDACIÓN: Si data no es un array, ponemos un array vacío
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error conectando al backend:", err);
        setProjects([]); // Evitamos que sea undefined
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-zinc-100 font-sans selection:bg-cyan-500/30">
        
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