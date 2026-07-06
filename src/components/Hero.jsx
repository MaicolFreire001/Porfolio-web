const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Transformo ideas en <span className="text-blue-500">Software Funcional</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Desarrollador Web Full-Stack y Especialista en Automatización. Construyo plataformas escalables, e-commerce rápidos y bots a medida para optimizar el tiempo de tu negocio.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg shadow-blue-500/30">
            Ver mi trabajo
          </a>
          <a href="#contacto" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;