import { useState } from 'react';
import { Map, MapPin, Phone, Leaf, Camera, Mail, MessageCircle, Paperclip, Loader2, CheckCircle, ChevronRight, Menu, X, Target, Layers, Mountain, Sun, Globe2, TreePine } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.target);
    
    formData.append("access_key", "b0e27955-da6f-4069-bca3-8f990ef84194");
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-slate-300 bg-slate-950 selection:bg-emerald-900 selection:text-white">
      {/* Banner */}
      <div className="bg-emerald-900 text-emerald-100 text-center py-2 text-sm font-bold tracking-widest uppercase border-b border-emerald-800">
        🌿 10% de dcto. en tu primer mapa
      </div>

      {/* Navbar Premium Oscuro */}
      <nav className="bg-slate-950/80 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-slate-800 shadow-sm">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <a href="#inicio" className="text-2xl font-black flex items-center gap-2 text-white hover:scale-105 transition-transform">
            <Globe2 className="w-8 h-8 text-emerald-500" />
            MiMapa
          </a>
          
          <button className="md:hidden text-white bg-slate-900 p-2 rounded-full border border-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#inicio" className="hover:text-emerald-400 transition">Inicio</a>
            <a href="#nosotros" className="hover:text-emerald-400 transition">Mi Esencia</a>
            <a href="#servicios" className="hover:text-emerald-400 transition">Qué Hago</a>
            <a href="#contacto" className="hover:text-emerald-400 transition">Hablemos</a>
            <a href="#ingresa" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-600 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-emerald-600">
              Ingresar
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 px-4 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-6 absolute w-[90%] left-[5%] top-16 z-50">
            <a href="#inicio" className="font-medium text-lg text-white" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#nosotros" className="font-medium text-lg text-white" onClick={() => setIsMenuOpen(false)}>Mi Esencia</a>
            <a href="#servicios" className="font-medium text-lg text-white" onClick={() => setIsMenuOpen(false)}>Qué Hago</a>
            <a href="#contacto" className="font-medium text-lg text-white" onClick={() => setIsMenuOpen(false)}>Hablemos</a>
            <a href="#ingresa" className="bg-emerald-700 text-white px-4 py-3 rounded-xl font-bold text-center mt-2" onClick={() => setIsMenuOpen(false)}>Ingresar al Portal</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-48 px-4 flex items-center justify-center min-h-[85vh] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden bg-slate-900 border-b border-slate-800">
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
            <a href="#contacto" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-500 shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-1 transition duration-300 w-full sm:w-auto border border-emerald-500">
              Quiero Cotizar
            </a>
            <a href="#nosotros" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition duration-300 w-full sm:w-auto shadow-xl">
              Mi Esencia
            </a>
          </div>
        </div>
      </section>

      {/* Intro List */}
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

      {/* Quienes Somos */}
      <section id="nosotros" className="py-24 px-4 relative overflow-hidden bg-slate-900 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-24 border border-slate-800 shadow-xl">
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
                    <span>¿Necesitas apoyo para proyectos comunitarios o de beneficio colectivo? <br/><a href="#contacto" className="text-emerald-400 underline hover:text-emerald-300 decoration-2 underline-offset-2 mt-1 inline-block">Cuenta conmigo.</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4">
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

          {/* Inspecciones con Drones */}
          <div className="bg-emerald-950 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl text-center mb-20 relative overflow-hidden border border-emerald-900">
             <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent"></div>
             <h3 className="text-3xl font-extrabold mb-6 text-white relative z-10 drop-shadow-md">Inspección Especializada con Drones</h3>
             <p className="text-lg leading-relaxed max-w-4xl mx-auto font-medium relative z-10 text-emerald-50 drop-shadow-sm">
                Inspección de plantas fotovoltaicas solares, registro de avances de obra, inspección de aerogeneradores y turbinas eólicas, revisión de líneas y torres de alta tensión, y monitoreo de gasoductos y oleoductos. Cuidando el entorno desde las alturas.
             </p>
          </div>

          {/* Mapas Especializados */}
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

      {/* Cotizar / Formulario */}
      <section id="contacto" className="py-24 px-4 bg-slate-950 relative border-t border-slate-900">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> Conversemos
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-md">Hablemos sobre tu idea.</h3>
            
            <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 inline-block text-left mb-10 max-w-2xl mx-auto shadow-lg">
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500"/></span> Describe lo que necesitas representar.</li>
                <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500"/></span> Adjunta un archivo de referencia (opcional).</li>
                <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500"/></span> Te responderé en <strong>menos de 24 horas</strong>.</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-800 space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-emerald-900/40 border border-emerald-800 text-emerald-100 px-6 py-5 rounded-2xl flex items-center gap-4 shadow-inner">
                <CheckCircle className="w-8 h-8 flex-shrink-0 text-emerald-400"/>
                <span className="font-semibold text-lg">¡Mensaje enviado con éxito! Me pondré en contacto contigo súper rápido.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-900/40 border border-red-800 text-red-100 px-6 py-5 rounded-2xl shadow-inner">
                <span className="font-semibold">Uy, algo salió mal. Por favor intenta nuevamente o escríbeme por email.</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Nombre y Apellido *</label>
                <input type="text" name="nombre" required className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition shadow-inner text-white" placeholder="¿Cómo te llamas?" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Email *</label>
                <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition shadow-inner text-white" placeholder="tu@correo.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Asunto *</label>
                <input type="text" name="asunto" required className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition shadow-inner text-white" placeholder="Ej. Mapa para proyecto" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Resultado esperado *</label>
                <div className="relative">
                  <select name="resultado_esperado" required className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition text-white appearance-none shadow-inner font-medium">
                    <option value="">Selecciona una opción...</option>
                    <option value="Cartografía">Cartografía</option>
                    <option value="Plano">Plano</option>
                    <option value="Archivo KML o KMZ">Archivo KML o KMZ</option>
                    <option value="Georreferenciar imagen">Georreferenciar imagen</option>
                    <option value="Otro">Otro (Especificar abajo)</option>
                  </select>
                  <ChevronRight className="w-5 h-5 text-emerald-500 absolute right-4 top-4 rotate-90 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Cuéntame más sobre tu idea *</label>
              <textarea name="mensaje" required className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition shadow-inner text-white" rows="5" placeholder="Escribe aquí los detalles..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">¿Tienes algún archivo de referencia? (Opcional)</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <label className="cursor-pointer bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-bold transition shadow-md w-full sm:w-auto justify-center">
                  <Paperclip className="w-5 h-5 text-emerald-400" /> Explorar archivos
                  <input type="file" name="archivo" className="hidden" />
                </label>
                <span className="text-sm text-slate-500 font-medium">KML, KMZ, SHP, PDF, DOC</span>
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 px-6 rounded-2xl transition shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-1 flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg border border-emerald-500">
                {isSubmitting ? (
                  <><Loader2 className="w-6 h-6 animate-spin" /> Enviando...</>
                ) : (
                  <><MessageCircle className="w-6 h-6" /> Enviar Mensaje</>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
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
              <li><a href="#inicio" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Mi Esencia</a></li>
              <li><a href="#servicios" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Qué Hago</a></li>
              <li><a href="#contacto" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Hablemos</a></li>
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
    </div>
  );
}
