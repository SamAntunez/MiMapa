import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="bg-emerald-900 text-emerald-100 text-center py-2 text-sm font-bold tracking-widest uppercase border-b border-emerald-800">
        🌿 10% de dcto. en tu primer mapa
      </div>
      <nav className="bg-slate-950/80 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-slate-800 shadow-sm">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <Link to="/" className="text-2xl font-black flex items-center gap-2 text-white hover:scale-105 transition-transform">
            <Globe2 className="w-8 h-8 text-emerald-500" />
            MiMapa
          </Link>
          
          <button className="md:hidden text-white bg-slate-900 p-2 rounded-full border border-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <Link to="/" className={`hover:text-emerald-400 transition ${location.pathname === '/' ? 'text-emerald-400' : ''}`}>Inicio</Link>
            <Link to="/esencia" className={`hover:text-emerald-400 transition ${location.pathname === '/esencia' ? 'text-emerald-400' : ''}`}>Mi Esencia</Link>
            <Link to="/servicios" className={`hover:text-emerald-400 transition ${location.pathname === '/servicios' ? 'text-emerald-400' : ''}`}>Qué Hago</Link>
            <Link to="/contacto" className={`hover:text-emerald-400 transition ${location.pathname === '/contacto' ? 'text-emerald-400' : ''}`}>Hablemos</Link>
            <Link to="/ingresa" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-600 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-emerald-600">
              Ingresar
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 px-4 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-6 absolute w-[90%] left-[5%] top-16 z-50">
            <Link to="/" className="font-medium text-lg text-white" onClick={closeMenu}>Inicio</Link>
            <Link to="/esencia" className="font-medium text-lg text-white" onClick={closeMenu}>Mi Esencia</Link>
            <Link to="/servicios" className="font-medium text-lg text-white" onClick={closeMenu}>Qué Hago</Link>
            <Link to="/contacto" className="font-medium text-lg text-white" onClick={closeMenu}>Hablemos</Link>
            <Link to="/ingresa" className="bg-emerald-700 text-white px-4 py-3 rounded-xl font-bold text-center mt-2" onClick={closeMenu}>Ingresar al Portal</Link>
          </div>
        )}
      </nav>
    </>
  );
}
