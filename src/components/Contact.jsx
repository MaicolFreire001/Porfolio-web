const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">¿Listo para escalar tu proyecto?</h2>
        <p className="text-gray-400 mb-10">
          Ya sea que necesites una web desde cero, un e-commerce o automatizar procesos con un bot personalizado, estoy disponible para empezar.
        </p>
        
        <a 
          href="mailto:maicolfreire001@gmail.com" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition shadow-lg shadow-blue-500/30"
        >
          Envíame un Email
        </a>
        
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/MaicolFreire001" className="text-gray-500 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/maicol-freire/" className="text-gray-500 hover:text-white transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;