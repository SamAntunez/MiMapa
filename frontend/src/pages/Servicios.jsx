import { Target, Leaf, Layers, CheckCircle } from 'lucide-react';

export default function Servicios() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Target className="w-4 h-4" /> Qué Hago
          </h2>
          <h3 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">Mis Servicios</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Genero la cartografía que tu estudio necesita de forma ágil y amigable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "Levantamiento espacial",
            "Fotogrametría con Dron",
            "Fotos y Videos Aéreos",
            "Monitoreo de Proyectos",
            "Análisis de Imagen Satelital",
            "Análisis Multicriterio",
            "Modelos Digitales",
            "Georreferenciación",
            "Inspección de terreno"
          ].map((servicio, index) => (
            <div key={index} className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-[2rem] shadow-lg border border-slate-800 flex items-center gap-4 hover:shadow-emerald-900/20 hover:border-emerald-700/50 transition-all hover:-translate-y-1">
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-emerald-400 shadow-inner">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-100 text-lg">{servicio}</h4>
            </div>
          ))}
        </div>

        <div className="bg-emerald-950 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl text-center mb-20 relative overflow-hidden border border-emerald-900">
           <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent"></div>
           <h3 className="text-3xl font-extrabold mb-6 text-white relative z-10 drop-shadow-md">Inspección Especializada con Drones</h3>
           <p className="text-lg leading-relaxed max-w-4xl mx-auto font-medium relative z-10 text-emerald-50 drop-shadow-sm">
              Inspección de plantas fotovoltaicas solares, registro de avances de obra, inspección de aerogeneradores y turbinas eólicas, revisión de líneas y torres de alta tensión, y monitoreo de gasoductos y oleoductos. Cuidando el entorno desde las alturas.
           </p>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <h3 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-3 drop-shadow-md">
                <Layers className="w-10 h-10 text-emerald-500" />
                Cartografías, Mapas o Planos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 text-slate-300 font-medium">
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Ubicación</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Pozos de Sondeo</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Prospección</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Calicatas</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Hallazgos</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Transectos</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Densidad</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Interpolación</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Pendientes</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Precipitaciones</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Hidrografía</span>
                 <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Vegetación</span>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] flex justify-center">
               <img src="/mapa_chile.jpg" alt="Mapa Zona Centro Sur" className="w-full max-w-sm rounded-3xl shadow-2xl border-[6px] border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
