const Projects = () => {
  const portfolioProjects = [
    {
      title: "B2B Analytics Dashboard",
      description: "Panel administrativo corporativo con tablas dinámicas, gráficos de rendimiento y renderizado diferido. Optimizado con arquitectura moderna para alcanzar un Lighthouse de 100/100.",
      tech: ["Next.js", "Tailwind v4", "shadcn/ui", "Recharts"],
      status: "Completado"
    },
    {
      title: "E-commerce de Hardware IT",
      description: "Catálogo de tienda online enfocado en componentes de PC. Diseño limpio, rápido y completamente adaptable a dispositivos móviles, destacando una maquetación avanzada y modular.",
      tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      status: "En Desarrollo (Ajustando rendimiento)"
    },
    {
      title: "Sistema de Gestión de Certificados",
      description: "Plataforma Full-Stack en producción para la generación dinámica de PDFs, administración y verificación segura de certificados online con códigos QR para clientes reales.",
      tech: ["React", "Node.js", "MongoDB", "PDFKit"],
      status: "Completado"
    },
    {
      title: "Bot Traductor de Discord",
      description: "Herramienta de automatización modular con persistencia de datos. Permite traducción contextual en tiempo real consumiendo la API de Deep Translator mediante interacciones de usuario.",
      tech: ["Python", "discord.py", "SQLite", "Deep Translator"],
      status: "Completado"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-800/50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Catálogo de Proyectos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap
                  ${project.status === 'Completado' ? 'bg-green-500/20 text-green-400' : 
                    project.status === 'En Desarrollo' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-gray-700 text-gray-300'}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm bg-gray-800 text-blue-300 px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;