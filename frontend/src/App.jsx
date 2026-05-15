import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Map, MapPin, Phone, Info, Download, ShieldCheck, Camera, Mail, MessageCircle, Paperclip, Loader2 } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <Map className="w-8 h-8 text-secondary" />
          MiMapa
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-secondary transition">Inicio</Link>
          <a href="#servicios" className="hover:text-secondary transition">Servicios</a>
          <Link to="/about" className="hover:text-secondary transition">Quiénes Somos</Link>
          <Link to="/contacto" className="hover:text-secondary transition">Contacto</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/portal" className="bg-secondary px-4 py-2 rounded font-semibold hover:bg-sky-400 transition">
            Portal de Clientes
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#064e3b] text-emerald-100 py-8 border-t-4 border-secondary">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Map className="w-6 h-6 text-secondary" /> MiMapa
          </h3>
          <p className="text-sm text-emerald-200">Especialistas en levantamientos topográficos y generación de mapas espaciales en múltiples formatos.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition">Contacto</Link></li>
            <li><Link to="/portal" className="hover:text-white transition">Portal Privado</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contacto</h4>
          <p className="text-sm flex items-center gap-2 mb-2"><Phone className="w-4 h-4 text-secondary" /> +56 9 71640168</p>
          <p className="text-sm flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Temuco, Chile</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white text-primary py-24 px-4 text-center border-b border-emerald-100 relative overflow-hidden">
        {/* Elemento decorativo sutil de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
          <Map className="w-96 h-96" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-[#064e3b]">Precisión Geográfica a tu Alcance</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-800">
            Servicios de levantamientos topográficos, fotogrametría y descarga de mapas en los formatos que tu proyecto requiere.
          </p>
          <Link to="/contacto" className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-emerald-400 hover:shadow-lg hover:-translate-y-1 transition duration-300 inline-block">
            Solicitar Cotización
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary text-center hover:-translate-y-2 transition duration-300">
              <Camera className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Levantamientos Fotogramétricos</h3>
              <p className="text-gray-600">Alta precisión utilizando drones de última generación para modelado 3D y ortofotos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary text-center hover:-translate-y-2 transition duration-300">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mapas a Medida</h3>
              <p className="text-gray-600">Generamos la cartografía específica que tu proyecto necesita, con coordenadas precisas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary text-center hover:-translate-y-2 transition duration-300">
              <Download className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Múltiples Formatos</h3>
              <p className="text-gray-600">Descarga directa desde nuestro portal en formatos KML, SHP, GeoJSON, GeoTIFF y más.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="py-20 px-4 container mx-auto text-center min-h-[60vh]">
      <ShieldCheck className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-6 text-emerald-900">Quiénes Somos</h1>
      <p className="text-lg max-w-3xl mx-auto text-gray-700">
        Somos MiMapa, una empresa experta en recolección, procesamiento y distribución de datos espaciales.
        Nacimos con el objetivo de facilitar el acceso a información geográfica de alta precisión, permitiendo a nuestros clientes
        descargar exactamente lo que necesitan, en el formato que sus softwares requieren.
      </p>
    </div>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://mimapa-backend-k1ea.onrender.com/api/contacto/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Limpiar el formulario
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
    <div className="bg-emerald-50 py-20 px-4 min-h-[80vh] relative">
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary mb-4">Hablemos sobre tu proyecto</h1>
          <p className="text-emerald-800">Estamos listos para apoyarte con tus requerimientos espaciales y topográficos.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
          <a href="mailto:analistageografica@gmail.com" className="flex items-center gap-2 text-primary hover:text-secondary font-medium transition">
            <Mail className="w-5 h-5 text-secondary" /> analistageografica@gmail.com
          </a>
          <span className="hidden md:inline text-gray-300">|</span>
          <a href="https://wa.me/56971640168" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-green-600 font-medium transition">
            <MessageCircle className="w-5 h-5 text-green-500" /> +56 9 71640168
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-emerald-100">
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">¡Mensaje enviado con éxito! Te contactaremos a la brevedad.</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">Ocurrió un error al enviar el mensaje. Revisa que el backend esté encendido.</span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre y Apellido *</label>
              <input type="text" name="nombre" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="Tu nombre completo" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="tu@correo.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Asunto *</label>
            <input type="text" name="asunto" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" placeholder="Ej. Solicitud de mapa KML" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje o Requerimiento *</label>
            <textarea name="mensaje" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition" rows="5" placeholder="Detalla las coordenadas o el servicio que necesitas..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Adjuntar archivo (Opcional)</label>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-primary px-5 py-3 rounded-lg flex items-center gap-2 font-medium transition shadow-sm">
                <Paperclip className="w-5 h-5 text-secondary" /> Explorar archivos
                <input type="file" name="archivo" className="hidden" />
              </label>
              <span className="text-sm text-gray-500">KML, SHP, PDF (Max 10MB)</span>
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
    </div>
  );
}

function ClientPortal() {
  return (
    <div className="py-20 px-4 container mx-auto text-center min-h-[60vh]">
      <Info className="w-16 h-16 text-secondary mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Portal de Clientes (En Construcción)</h1>
      <p className="text-gray-600 mb-8">Aquí los clientes podrán iniciar sesión para descargar los mapas que solicitaron.</p>
      <Link to="/" className="text-primary font-bold hover:underline">Volver al Inicio</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/portal" element={<ClientPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
