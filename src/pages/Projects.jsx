import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Database, Users, Shield, Zap } from 'lucide-react';

function Projects() {
  const proyectos = [
    {
      titulo: "RUMI Personal",
      descripcion: "Plataforma educativa para facilitar el aprendizaje autodidacta y la gestión de cursos en línea. Permite a estudiantes acceder a lecciones en video, realizar quizzes interactivos y hacer seguimiento de su progreso. Los docentes pueden crear y administrar cursos, agregar lecciones (videos de YouTube) y diseñar evaluaciones personalizadas.",
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
      titulo: "RUMI Enterprise",
      descripcion: "Solución integral de gestión educativa diseñada para instituciones, academias y empresas que requieren control avanzado sobre la formación de sus usuarios. Ofrece todas las funcionalidades de RUMI Personal, ampliadas con gestión de roles administrativos, paneles de control avanzados, reportes de desempeño, y control granular de acceso a contenidos.",
      tecnologias: ["React", "Node.js", "MongoDB Atlas", "Microservicios", "Docker"],
      imagen: "/projects/rumi-enterprise.png",
      link: "https://github.com/RumiSoftware2",
      demo: "#",
      status: "building",
      features: [
        "Gestión de roles administrativos",
        "Paneles de control avanzados",
        "Reportes de desempeño",
        "Control granular de acceso",
        "Arquitectura escalable"
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
    <section id="proyectos" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <Code className="w-4 h-4" />
            Mis Proyectos
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Proyectos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {proyecto.status === 'ready' ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Listo
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <Code className="w-3 h-3" />
                      En Construcción
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {proyecto.titulo}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Características Principales
                  </h4>
                  <ul className="space-y-2">
                    {proyecto.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={proyecto.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Ver Código
                  </a>
                  {proyecto.status === 'ready' && (
                    <a
                      href={proyecto.demo}
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
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
          <p className="text-gray-600 mb-6">
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

