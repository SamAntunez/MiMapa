import { useState } from 'react';
import { Map, MapPin, Phone, ShieldCheck, Camera, Mail, MessageCircle, Paperclip, Loader2, CheckCircle, ChevronRight, Menu, X, Target, Layers } from 'lucide-react';

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
    <div className="font-sans text-gray-800 bg-white selection:bg-emerald-200">
      {/* Banner */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm font-bold tracking-wider">
        🎉 10% DE DCTO. EN TU PRIMER MAPA
      </div>

      {/* Navbar */}
      <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#inicio" className="text-2xl font-bold flex items-center gap-2">
            <Map className="w-8 h-8 text-secondary" />
            MiMapa
          </a>
          
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <a href="#inicio" className="hover:text-secondary transition">Inicio</a>
            <a href="#nosotros" className="hover:text-secondary transition">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-secondary transition">Servicios</a>
            <a href="#contacto" className="hover:text-secondary transition">Contacto</a>
            <a href="#ingresa" className="bg-secondary text-primary px-5 py-2 rounded-full font-bold hover:bg-emerald-400 transition">
              Ingresa
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 px-2 border-t border-emerald-700 pt-4">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <a href="#ingresa" className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold inline-block text-center mt-2" onClick={() => setIsMenuOpen(false)}>Ingresa</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="inicio" className="bg-gradient-to-br from-emerald-50 to-white pt-24 pb-20 px-4 border-b border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
          <Map className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#064e3b] leading-tight">
              Presenta tus cartografías <span className="text-emerald-600">a tiempo</span>
            </h1>
            <p className="text-2xl mb-4 font-semibold text-emerald-800">
              Precisión Geográfica y Rapidez a tu Alcance
            </p>
            <ul className="text-lg text-gray-700 space-y-3 mb-8 text-left max-w-xl mx-auto md:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Cartografías y Mapas para informes, presentaciones, o adjuntos de tu proyecto o estudio</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Planos para permisos ambientales sectoriales</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Archivos KML o KMZ para presentaciones con Google Earth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Cartografías y Planos para Líneas de Bases</span>
              </li>
            </ul>
            <a href="#contacto" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-800 hover:shadow-xl hover:-translate-y-1 transition duration-300 inline-block">
              Quiero Cotizar
            </a>
          </div>
        </div>
      </section>

      {/* Quienes Somos */}
      <section id="nosotros" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Especialistas en Geomática y Sistemas de Información Geográfica</h2>
          <h3 className="text-4xl font-bold mb-10 text-primary">Quiénes Somos</h3>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify md:text-center">
            <p>
              Somos <strong>MiMapa</strong>, una empresa experta en levantamiento, procesamiento y análisis de datos espaciales. Nacimos con el objetivo de facilitar el acceso a cartografías de alta precisión, permitiendo a nuestros clientes conseguir exactamente lo que necesitan representar en sus informes, en el formato y tamaño que requieren.
            </p>
            <p>
              Ofrecemos reforzar la comunicación geográfica de sus proyectos o estudios a través de mapas, y ayudar en la consolidación cartográfica de sus entregas.
            </p>
            <p>
              Recibimos la información espacial de diferentes áreas profesionales para representar en cartografía lo que necesiten.
            </p>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-8">
              <p className="font-semibold text-emerald-900">
                ¿Si necesitas apoyo para proyectos comunitarios y de beneficio colectivo? <a href="#contacto" className="text-emerald-600 underline hover:text-emerald-800">Comunícate con nosotros.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Generamos la cartografía que tu proyecto o estudio necesita.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Levantamiento de información espacial",
              "Fotogrametría con Dron",
              "Fotos y Videos Aéreos",
              "Monitoreo de Proyectos",
              "Análisis de Imagen Satelital",
              "Análisis Multicriterio",
              "Modelos Digitales",
              "Georreferenciación",
              "Inspección de terreno"
            ].map((servicio, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:border-emerald-200 transition">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800">{servicio}</h4>
              </div>
            ))}
          </div>

          {/* Inspecciones con Drones */}
          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl text-center mb-16 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
             <h3 className="text-2xl font-bold mb-6 text-secondary relative z-10">Inspección Especializada con Drones</h3>
             <p className="text-lg leading-relaxed max-w-4xl mx-auto font-medium opacity-90 relative z-10">
                INSPECCION DE PLANTAS FOTOVOLTAICAS SOLARES CON DRONES, REGISTRO DE AVANCES DE OBRA CON DRONES, INSPECCION DE OBRAS CON DRONES, INSPECCION DE AEROGENERADORES Y TURBINAS EOLICAS CON DRONES, INSPECCION DE LINEAS Y TORRES DE ALTA TENSION CON DRONES, INSPECCION DE GASODUCTOS Y OLEODUCTOS CON DRONES
             </p>
          </div>

          {/* Mapas Especializados */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border-t-8 border-secondary">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
              <Layers className="w-8 h-8 text-secondary" />
              Cartografías, Mapas o Planos Especializados
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-gray-700 font-medium">
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Ubicación político-administrativa</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Pozos de Sondeo</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Prospección</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Calicatas</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Hallazgos</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Transectos</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Densidad</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Interpolación</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Pendientes</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Precipitaciones</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Hidrografía</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Vegetación</span>
               <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500"/> Geomorfología</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cotizar / Formulario */}
      <section id="contacto" className="py-20 px-4 bg-emerald-50 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Quiero Cotizar</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 inline-block text-left mb-8 max-w-2xl mx-auto">
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"/> Describe lo que necesitas representar en un mapa o cartografía.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"/> Adjunta un archivo de referencia (opcional).</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"/> Nos comunicaremos en <strong>menos de 24 horas</strong>.</li>
              </ul>
            </div>
            
            <h3 className="text-3xl font-bold text-emerald-800 mb-2">Hablemos sobre tu idea.</h3>
            <p className="text-lg text-emerald-700">Estamos listos para apoyar tus requerimientos cartográficos.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-emerald-100 space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0"/>
                <span className="font-semibold">¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded-xl">
                <span className="font-semibold">Ocurrió un error al enviar el mensaje. Intenta nuevamente o contáctanos por email.</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre y Apellido *</label>
                <input type="text" name="nombre" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="tu@correo.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Asunto *</label>
                <input type="text" name="asunto" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="Ej. Cotización de Mapa" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Resultado esperado *</label>
                <select name="resultado_esperado" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition text-gray-700">
                  <option value="">Selecciona una opción...</option>
                  <option value="Cartografía">Cartografía</option>
                  <option value="Plano">Plano</option>
                  <option value="Archivo KML o KMZ">Archivo KML o KMZ</option>
                  <option value="Georreferenciar imagen">Georreferenciar imagen</option>
                  <option value="Otro">Otro (Especificar en el mensaje)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje o Requerimiento *</label>
              <textarea name="mensaje" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" rows="5" placeholder="Describe lo que necesitas representar..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Adjuntar archivo de referencia (Opcional)</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <label className="cursor-pointer bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-primary px-5 py-3 rounded-xl flex items-center gap-2 font-medium transition shadow-sm w-full sm:w-auto justify-center">
                  <Paperclip className="w-5 h-5 text-secondary" /> Explorar archivos
                  <input type="file" name="archivo" className="hidden" />
                </label>
                <span className="text-sm text-gray-500">KML, KMZ, SHP, PDF, DOC</span>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-[#044031] text-white font-bold py-4 px-6 rounded-xl transition shadow-lg hover:shadow-xl hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                ) : (
                  <><Mail className="w-5 h-5" /> Enviar Mensaje</>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#064e3b] text-emerald-100 py-12 border-t-4 border-secondary">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Map className="w-8 h-8 text-secondary" /> MiMapa
            </h3>
            <p className="text-sm text-emerald-200 mb-4">Especialistas en Geomática y Sistemas de Información Geográfica.</p>
            <div className="flex gap-4">
               <a href="https://wa.me/56971640168" target="_blank" rel="noreferrer" className="bg-emerald-800 p-2 rounded-full hover:bg-green-600 transition text-white">
                 <MessageCircle className="w-5 h-5" />
               </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-white transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Quiénes Somos</a></li>
              <li><a href="#servicios" className="hover:text-white transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Servicios</a></li>
              <li><a href="#contacto" className="hover:text-white transition flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Contacto</a></li>
              <li><a href="#ingresa" className="hover:text-white transition flex items-center gap-2 font-bold text-secondary"><ChevronRight className="w-4 h-4"/> Ingresa (Portal)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contacto</h4>
            <p className="text-sm flex items-center gap-3 mb-4"><Phone className="w-5 h-5 text-secondary" /> +56 9 71640168</p>
            <p className="text-sm flex items-center gap-3 mb-4"><Mail className="w-5 h-5 text-secondary" /> analistageografica@gmail.com</p>
            <p className="text-sm flex items-center gap-3"><MapPin className="w-5 h-5 text-secondary" /> Pucón, Chile</p>
          </div>
        </div>
        <div className="text-center text-emerald-800 text-xs mt-12 pt-6 border-t border-emerald-800/50">
          © {new Date().getFullYear()} MiMapa. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
