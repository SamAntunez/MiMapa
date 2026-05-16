import { Link } from 'react-router-dom';
import { TreePine, Sun } from 'lucide-react';

export default function Inicio() {
  return (
    <>
      <section className="relative pt-32 pb-48 px-4 flex items-center justify-center min-h-[85vh] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden bg-slate-900 border-b border-slate-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/montana.jpg')", backgroundPosition: "center 30%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center mt-10">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-300 backdrop-blur-md border border-emerald-700/50 font-semibold tracking-wider text-sm mb-6 shadow-lg">
            <TreePine className="w-4 h-4" /> CONECTANDO CON EL ENTORNO
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-2xl">
            Presenta tus cartografías <span className="text-emerald-400">a tiempo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-medium text-slate-200 drop-shadow-lg max-w-2xl mx-auto">
            Precisión geográfica y rapidez a tu alcance para darle vida y forma a tus ideas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/contacto" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-500 shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-1 transition duration-300 w-full sm:w-auto border border-emerald-500">
              Quiero Cotizar
            </Link>
            <Link to="/esencia" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition duration-300 w-full sm:w-auto shadow-xl">
              Mi Esencia
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-24 container mx-auto px-4 max-w-5xl mb-24">
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row gap-8 items-center justify-between">
            <ul className="text-lg text-slate-200 space-y-5 font-medium flex-1">
              <li className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Cartografías y mapas para informes, presentaciones o estudios.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Planos para permisos ambientales sectoriales.</span>
              </li>
            </ul>
            <ul className="text-lg text-slate-200 space-y-5 font-medium flex-1">
              <li className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Archivos KML o KMZ para interactuar con Google Earth.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Cartografías y planos para tu Línea de Base.</span>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
}
