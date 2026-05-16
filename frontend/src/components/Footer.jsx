import { Link } from 'react-router-dom';
import { Globe2, MessageCircle, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6 max-w-6xl">
        <div>
          <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3 drop-shadow-sm">
            <Globe2 className="w-8 h-8 text-emerald-500" /> MiMapa
          </h3>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Acercando el territorio a tus manos. Especialista en Geomática y Sistemas de Información Geográfica con trato humano.
          </p>
          <div className="flex gap-4">
             <a href="https://wa.me/56971640168" target="_blank" rel="noreferrer" className="bg-slate-900 border border-slate-800 p-3 rounded-full hover:bg-emerald-700 hover:text-white transition shadow-sm">
               <MessageCircle className="w-6 h-6" />
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide drop-shadow-sm">Navegación</h4>
          <ul className="space-y-4 font-medium text-slate-500">
            <li><Link to="/" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Inicio</Link></li>
            <li><Link to="/esencia" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Mi Esencia</Link></li>
            <li><Link to="/servicios" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Qué Hago</Link></li>
            <li><Link to="/contacto" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Hablemos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide drop-shadow-sm">Contacto</h4>
          <div className="space-y-4 font-medium text-slate-500">
            <p className="flex items-center gap-4"><Phone className="w-5 h-5 text-emerald-500" /> +56 9 71640168</p>
            <p className="flex items-center gap-4"><Mail className="w-5 h-5 text-emerald-500" /> analistageografica@gmail.com</p>
            <p className="flex items-center gap-4"><MapPin className="w-5 h-5 text-emerald-500" /> Pucón, Chile</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-slate-600 text-sm mt-16 pt-8 border-t border-slate-900 font-medium">
        © {new Date().getFullYear()} MiMapa. Conectando proyectos con su entorno.
      </div>
    </footer>
  );
}
