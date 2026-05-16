import { useState } from 'react';
import { Mail, CheckCircle, Paperclip, ChevronRight, Loader2, Send } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Ahora guardará un objeto { type, message }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);

    // Web3Forms access key
    object.access_key = "b0e27955-da6f-4069-bca3-8f990ef84194";

    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo súper rápido.' });
        form.reset();
      } else {
        setSubmitStatus({ type: 'error', message: `Error de Web3Forms: ${data.message}` });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Hubo un error de conexión al enviar el formulario.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative border-t border-slate-900 min-h-[70vh] flex items-center">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> Conversemos
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-md">Hablemos sobre tu idea.</h3>

          <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 inline-block text-left mb-10 max-w-2xl mx-auto shadow-lg">
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500" /></span> Describe lo que necesitas representar.</li>
              <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500" /></span> Pega un enlace de referencia si tus archivos son pesados.</li>
              <li className="flex items-start gap-3"><span className="bg-slate-950 border border-slate-800 p-1 rounded-full shadow-sm"><CheckCircle className="w-5 h-5 text-emerald-500" /></span> Te responderé en <strong>menos de 24 horas</strong>.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-800 space-y-6">
          {submitStatus?.type === 'success' && (
            <div className="bg-emerald-900/40 border border-emerald-800 text-emerald-100 px-6 py-5 rounded-2xl flex items-center gap-4 shadow-inner">
              <CheckCircle className="w-8 h-8 flex-shrink-0 text-emerald-400" />
              <span className="font-semibold text-lg">{submitStatus.message}</span>
            </div>
          )}
          {submitStatus?.type === 'error' && (
            <div className="bg-red-900/40 border border-red-800 text-red-100 px-6 py-5 rounded-2xl shadow-inner">
              <span className="font-semibold">{submitStatus.message}</span>
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

          <div className="pt-6">
            <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 px-6 rounded-2xl transition shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-1 flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg border border-emerald-500">
              {isSubmitting ? (
                <><Loader2 className="w-6 h-6 animate-spin" /> Enviando...</>
              ) : (
                <><Send className="w-6 h-6" /> Enviar Mensaje</>
              )}
            </button>
          </div>
        </form>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8 w-full max-w-2xl">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">O también puedes</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="bg-slate-900/60 p-8 md:p-10 rounded-[3rem] border border-emerald-900/30 flex flex-col items-center text-center w-full max-w-2xl shadow-xl hover:shadow-emerald-900/10 transition-shadow">
            <h4 className="text-2xl font-extrabold text-white mb-3">Opción 2: Trato Directo</h4>
            <p className="text-slate-400 font-medium mb-8 max-w-md">
              Si prefieres no llenar formularios o necesitas enviarme archivos pesados (cartografías, ZIPs, fotos), hablemos directamente por WhatsApp.
            </p>
            <a href="https://wa.me/56971640168" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 transition shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 w-full sm:w-auto justify-center text-lg">
              <WhatsAppIcon className="w-7 h-7" /> Ir a WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}