import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Esencia from './pages/Esencia';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-slate-300 bg-slate-950 selection:bg-emerald-900 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/esencia" element={<Esencia />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
