import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import fotoPerfil from './assets/foto-perfil.png';
import { motion } from 'framer-motion';
import { Github, Youtube, Linkedin } from 'lucide-react';
import BackToTop from './components/BackToTop';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/RumiSoftware2',
    icon: Github,
    color: 'hover:bg-gray-900 hover:text-white',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@MAP_314',
    icon: Youtube,
    color: 'hover:bg-red-600 hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebastian-mendoza-duitama-694845203',
    icon: Linkedin,
    color: 'hover:bg-blue-600 hover:text-white',
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-10 px-2 md:py-16 md:px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Foto */}
            <motion.div
              className="flex-1 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              custom={1}
            >
              <img
                src={fotoPerfil}
                alt="Foto de perfil"
                className="w-40 h-48 md:w-72 md:h-[400px] object-contain border-4 border-white shadow-2xl rounded-2xl bg-white"
              />
            </motion.div>
            {/* Info */}
            <motion.div
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              custom={2}
            >
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
                variants={heroVariants}
                custom={2.2}
              >
                Sebastian Mendoza Duitama
              </motion.h1>
              <motion.p
                className="text-base xs:text-lg md:text-xl text-gray-700 max-w-xs md:max-w-xl"
                variants={heroVariants}
                custom={2.4}
              >
                Desarrollador junior apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y tecnologías modernas. Estudiante de Análisis y Desarrollo de Software (SENA) y Licenciatura en Matemáticas (Universidad Pedagógica Nacional).
              </motion.p>
              {/* Redes sociales grandes */}
              <motion.div
                className="flex gap-4 md:gap-6 mt-2"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                custom={2.6}
              >
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-700 text-2xl md:text-3xl transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                    style={{ outline: 'none' }}
                  >
                    <social.icon className="w-7 h-7 md:w-9 md:h-9" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROYECTOS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Projects />
        </motion.div>

        {/* CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Contact />
        </motion.div>
      </main>
      <BackToTop />
    </div>
  );
}

export default App;


