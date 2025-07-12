import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import fotoPerfil from './assets/foto-perfil.png';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './components/FadeInWhenVisible';
import BackToTop from './components/BackToTop';
import { Code, Database, Globe, Zap } from 'lucide-react';
import DownloadCV from './components/DownloadCV';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section
          id="inicio"
          className="relative overflow-hidden py-20 px-8"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative container mx-auto max-w-6xl">
            <motion.div
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Text Content */}
              <motion.div
                className="flex-1 text-center lg:text-left space-y-6"
                variants={itemVariants}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Code className="w-4 h-4" />
                  Desarrollador Full Stack
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Sebastian Mendoza Duitama
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Desarrollador junior apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y tecnologías modernas del ecosistema JavaScript. Estudiante de Análisis y Desarrollo de Software en el SENA y de Licenciatura en Matemáticas en la Universidad Pedagógica Nacional (actualmente en 7º semestre).
                </p>
                
                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <a
                    href="#proyectos"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Ver Proyectos
                  </a>
                  <a
                    href="#contacto"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Contactar
                  </a>
                </motion.div>
              </motion.div>

              {/* Profile Image + CV Button */}
              <motion.div
                className="flex-1 flex flex-col items-center gap-6 lg:gap-8"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
                  <motion.img
                    src={fotoPerfil}
                    alt="Foto de perfil"
                    className="relative w-80 h-[420px] object-contain border-4 border-white shadow-2xl rounded-2xl bg-white"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  />
                </div>
                {/* CV Button */}
                <div className="w-full flex justify-center">
                  <DownloadCV />
                </div>
              </motion.div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Code, label: "Frontend", color: "text-blue-600" },
                { icon: Database, label: "Backend", color: "text-purple-600" },
                { icon: Globe, label: "Web Apps", color: "text-indigo-600" },
                { icon: Zap, label: "Performance", color: "text-green-600" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 ${tech.color}`}>
                    <tech.icon className="w-8 h-8" />
                  </div>
                  <p className="font-medium text-gray-700">{tech.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects section moved up */}
        <FadeInWhenVisible delay={0.1}>
          <Projects />
        </FadeInWhenVisible>

        {/* About section after projects */}
        <FadeInWhenVisible delay={0.2}>
          <About />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <Contact />
        </FadeInWhenVisible>        
      </main>
      <BackToTop />
    </div>
  );
}

export default App;


