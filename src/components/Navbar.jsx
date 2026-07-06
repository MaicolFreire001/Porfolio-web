const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-400">MaicolFreire<span className="text-white">Dev</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white transition">Inicio</a>
              <a href="#proyectos" className="text-gray-300 hover:text-white transition">Proyectos</a>
              <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;