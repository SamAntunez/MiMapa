import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Construction } from 'lucide-react';

export default function Ingresar() {
  return (
    <section className="py-24 px-4 bg-slate-950 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Luz ambiental verde */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container max-w-xl mx-auto text-center relative z-10">
        <div className="inline-flex p-6 bg-slate-900 border border-emerald-900/30 rounded-[2.5rem] shadow-xl mb-8 relative">
          <Construction className="w-16 h-16 text-emerald-400 animate-pulse" />
          <div className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 p-2 rounded-full font-bold shadow-md">
            <ShieldAlert className="w-5 h-5" />
          </div>
        </div>

        <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-widest mb-3">
          Portal de Clientes
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
          Espacio en Desarrollo
        </h1>
        <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Próximamente aquí podrás acceder a tu portal privado para visualizar tus mapas interactivos, descargar cartografía y hacer seguimiento de tus proyectos territoriales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/" className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-2xl transition shadow-md flex justify-center items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Volver al Inicio
          </Link>
          <Link to="/contacto" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-0.5 border border-emerald-600 text-center">
            Hablemos hoy
          </Link>
        </div>
      </div>
    </section>
  );
}
