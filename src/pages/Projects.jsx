import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Users, Shield, Zap } from 'lucide-react';

function Projects() {
  const proyectos = [
    {
      titulo: "RUMI Personal",
      descripcion: "Plataforma educativa para facilitar el aprendizaje autodidacta y la gestión de cursos en línea. Permite a estudiantes acceder a lecciones en video, realizar quizzes interactivos y hacer seguimiento de su progreso.",
      tecnologias: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      imagen: "/projects/rumi.png",
      link: "https://github.com/RumiSoftware2/RUMI-educational-platform",
      demo: "https://rumieducation.vercel.app/",
      status: "ready",
      features: [
        "Autenticación segura con JWT",
        "Control de roles (estudiante/docente)",
        "Gestión de cursos y lecciones",
        "Quizzes interactivos",
        "Seguimiento de progreso"
      ]
    },
    {
      titulo: "Lila - Laboratorio de Álgebra Lineal",
      descripcion: "Interfaz educativa que combina animaciones realizadas en Unity con frontend en React. Nueva sección dentro de Rumi; desarrollo colaborativo desde Linux con Git Actions para simular y practicar trabajo en equipo.",
      tecnologias: ["React", "Unity", "Git Actions", "Animaciones 3D"],
      imagen: "/projects/lila.png",
      
      link: "https://github.com/smendozawork314-arch/lila-react",
      demo: "https://rumieducation.vercel.app/lila",
      status: "building",
      features: [
        "Animaciones interactivas con Unity",
        "Frontend React integrado",
        "Git Actions para CI/CD y trabajo en equipo",
        "Laboratorio de álgebra lineal"
      ]
    },
    {
      titulo: "Wizard Studios Academy - E-commerce",
      descripcion: "E-commerce para vender plugins, cursos, clases y servicios de Wizard Studios Academy. Frontend con React y Tailwind; backend independiente como microservicio (recomendación: Node.js + PostgreSQL o FastAPI + PostgreSQL para integración con el asistente IA en Python).",
      tecnologias: ["React", "Tailwind CSS", "Microservicios", "Backend por definir"],
      imagen: "/projects/wizard.png",
      link: "#",
      demo: "https://wizard-studios-academy.vercel.app",
      status: "building",
      features: [
        "Venta de plugins, cursos y clases",
        "Frontend React + Tailwind",
        "Backend microservicio (Node.js o FastAPI recomendado)",
        "Escalable para múltiples servicios"
      ]
    },
    {
      titulo: "Asistente IA (Python)",
      descripcion: "Microservicio de asistente con IA desarrollado en Python. Pensado para integrarse con el e-commerce de Wizard Studios Academy y con Lila (laboratorio de álgebra lineal) para soporte y experiencia educativa.",
      tecnologias: ["Python", "IA/ML", "Microservicios", "APIs"],
      imagen: "/projects/zeusIA.png",
      
      link: "#",
      demo: null,
      status: "building",
      features: [
        "Microservicio en Python",
        "Integración con e-commerce y Lila",
        "Soporte y experiencia educativa",
        "APIs para múltiples clientes"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl dark:bg-blue-600/10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl dark:bg-purple-600/10"></div>
      
      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <Code className="w-4 h-4" />
            Mis Proyectos
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            variants={itemVariants}
          >
            Proyectos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Aquí puedes ver algunos de mis proyectos más importantes, 
            desarrollados con las tecnologías más modernas del ecosistema web.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${proyecto.imagenContain ? 'h-52 py-5 px-4 flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200/80 dark:from-slate-800 dark:to-slate-900/90' : 'h-48'}`}>
                {!proyecto.imagenContain && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-600/10" />
                )}
                {proyecto.imagenContain ? (
                  <div className="relative w-full h-full flex items-center justify-center rounded-xl bg-white/80 dark:bg-slate-800/80 shadow-inner border border-slate-200/80 dark:border-slate-600/50 overflow-hidden">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="max-w-full max-h-full w-auto h-auto object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  {proyecto.status === 'ready' ? (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
                      <Play className="w-3 h-3" />
                      Listo
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
                      <Code className="w-3 h-3" />
                      En Construcción
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {proyecto.descripcion}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features - Compact */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    Características
                  </h4>
                  <ul className="space-y-1">
                    {proyecto.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={proyecto.link}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3 h-3" />
                    Código
                  </a>
                  {proyecto.status === 'ready' && (
                    <a
                      href={proyecto.demo}
                      className="flex items-center justify-center gap-2 px-3 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  )}
                  {proyecto.status === 'building' && proyecto.demo && (
                    <a
                      href={proyecto.demo}
                      className="flex items-center justify-center gap-2 px-3 py-2 border-2 border-yellow-600 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 rounded-lg font-medium hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-white transition-all duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo (en construcción)
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Te interesa alguno de estos proyectos o quieres colaborar en algo nuevo?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

