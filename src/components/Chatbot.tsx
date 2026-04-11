import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Estado inicial con el nombre Lexi Bot
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'bot', 
      content: '¡Hola! Soy Lexi Bot, el asistente virtual de Santiago. Conozco todo sobre su experiencia en TCS, sus proyectos y certificaciones. ¿Qué te gustaría saber?' 
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg.content })
      });

      if (!response.ok) {
        throw new Error("Fallo en la comunicación con el servidor");
      }

      const data = await response.json();
      
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'bot', 
        content: data.response 
      };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Error al conectar con la IA:", error);
      const errorMsg: Message = { 
        id: Date.now().toString(), 
        role: 'bot', 
        content: "Uy, parece que tengo un cable suelto. Asegúrate de que mi servidor backend (FastAPI) esté encendido. 🔌" 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <div 
        className={`mb-4 w-[90vw] sm:w-96 bg-[#1f2937] border-2 border-zinc-800/80 rounded-2xl shadow-2xl shadow-cyan-900/20 flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#111827] border-b border-zinc-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center">
              <FaRobot className="text-cyan-400" />
            </div>
            <div>
              {/* Nombre actualizado aquí */}
              <h3 className="text-zinc-100 font-bold text-sm">Lexi Bot</h3>
              <p className="text-cyan-500 text-[10px] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                En línea
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-white transition-colors p-1"
          >
            <FaTimes />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#1f2937]/50 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-900/40 text-cyan-50 border border-cyan-700/50 rounded-br-none' 
                    : 'bg-[#111827] text-zinc-300 border border-zinc-800/80 rounded-bl-none'
                }`}
              >
                {/* Renderizado de Markdown para respuestas ordenadas y enlaces seguros */}
                {msg.role === 'user' ? (
                  msg.content
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc ml-5 mb-3 space-y-1" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal ml-5 mb-3 space-y-1" {...props} />,
                      li: ({node, ...props}) => <li className="pl-1" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-cyan-300" {...props} />,
                      // --- MAGIA PARA LOS ENLACES ---
                      a: ({node, ...props}) => (
                        <a 
                          {...props} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-medium"
                        />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#111827] border border-zinc-800/80 rounded-2xl rounded-bl-none p-3 flex gap-1.5">
                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-[#111827] border-t border-zinc-800 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pregunta algo..."
            className="flex-grow bg-[#1f2937] border border-zinc-700 rounded-xl px-4 py-2 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-cyan-900/20 flex-shrink-0"
          >
            <FaPaperPlane className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 ${
          isOpen 
            ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700' 
            : 'bg-cyan-600 text-white shadow-cyan-900/50 hover:bg-cyan-500'
        }`}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-2xl" />}
      </button>

    </div>
  );
};