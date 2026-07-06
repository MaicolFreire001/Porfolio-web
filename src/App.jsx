import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-950 py-6 text-center text-gray-600 border-t border-gray-900">
        <p>© {new Date().getFullYear()} Maicol Freire - Desarrollador Full-Stack</p>
      </footer>
    </div>
  );
}

export default App;