import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Program } from './pages/Program/Program';
import { Calendar } from './pages/Calendar/Calendar';
import { Shop } from './pages/Shop/Shop';
import { Blog } from './pages/Blog/Blog';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
