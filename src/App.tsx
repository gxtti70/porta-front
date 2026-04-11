import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Project } from './types/types';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Navbar } from './components/Navbar'; 
// CORRECCIÓN: Ajustamos la ruta del Chatbot para que coincida con tu estructura de carpetas
import { Chatbot } from './components/Chatbot'; 

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Lógica para traer los proyectos del Backend
  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error conectando al backend:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-zinc-100 font-sans selection:bg-cyan-500/30">
        
        {/* 1. La Navbar queda FIJA arriba de todas las páginas */}
        <Navbar /> 

        {/* 2. El padding-top (pt-20) evita que el contenido se meta debajo de la Navbar */}
        <div className="pt-20"> 
          <Routes>
            {/* Ruta Principal */}
            <Route 
              path="/" 
              element={<Home projects={projects} loading={loading} />} 
            />
            
            {/* Ruta de Detalles */}
            <Route 
              path="/proyecto/:id" 
              element={<ProjectDetail projects={projects} />} 
            />
          </Routes>
        </div>

        {/* 3. EL CHATBOT (Global) */}
        {/* Lo colocamos aquí para que el botón flote encima de CUALQUIER página */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;