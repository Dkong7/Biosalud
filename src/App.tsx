import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';

// Importación de Páginas
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Program } from './pages/Program/Program';
import { Calendar } from './pages/Calendar/Calendar';
import { Shop } from './pages/Shop/Shop';
import { Blog } from './pages/Blog/Blog';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="min-h-screen bg-bio-fondo font-cambria text-bio-verde flex flex-col transition-colors duration-300">
          
          <Navbar />

          <main className="flex-grow pt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/program" element={<Program />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
