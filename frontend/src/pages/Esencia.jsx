import { Link } from 'react-router-dom';
import { Leaf, Mountain } from 'lucide-react';

export default function Esencia() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-900 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 my-10 md:my-16 border border-slate-800 shadow-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-800 rounded-[3rem] transform -rotate-3 scale-105 opacity-30"></div>
            <img src="/valle.jpg" alt="Valle hermoso" className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 bg-slate-950 border border-slate-800 p-6 rounded-3xl shadow-2xl z-20 hidden md:flex items-center gap-4">
              <div className="bg-emerald-900/50 p-3 rounded-full border border-emerald-800"><Mountain className="w-8 h-8 text-emerald-400" /></div>
              <p className="font-bold text-white leading-tight">Experta en<br/>Geomática</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Leaf className="w-4 h-4" /> Mi Esencia
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight drop-shadow-md">
              Entiendo el territorio, <br/> te ayudo a mostrarlo.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
              <p>
                Soy la creadora detrás de <strong className="text-emerald-400">MiMapa</strong>, un proyecto inicial especializado en levantamiento, procesamiento y análisis de datos espaciales. Esta iniciativa nace para facilitar el acceso a cartografías de alta precisión con un trato humano y directo.
              </p>
              <p>
                Ofrezco reforzar la comunicación de tus proyectos. Recibo la información espacial de tu área y la transformo en el mapa que necesitas para comunicar tu idea al mundo.
              </p>
              <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 mt-8 shadow-inner">
                <p className="text-slate-200 font-semibold flex items-start gap-4">
                  <span className="text-3xl">🤝</span>
                  <span>¿Necesitas apoyo para proyectos comunitarios o de beneficio colectivo? <br/><Link to="/contacto" className="text-emerald-400 underline hover:text-emerald-300 decoration-2 underline-offset-2 mt-1 inline-block">Cuenta conmigo.</Link></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
