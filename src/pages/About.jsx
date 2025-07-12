import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, Heart, Target, Users, Award, BarChart3, Sigma } from 'lucide-react';

function About() {
  const skills = [
    { name: "React", level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
    { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
    { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
    { name: "Git", level: 75, color: "from-orange-500 to-red-500" },
    { name: "Razonamiento Matemático", level: 95, color: "from-purple-500 to-pink-500" },
    { name: "Estadística", level: 85, color: "from-pink-500 to-yellow-500" },
    { name: "Data Science", level: 80, color: "from-green-400 to-blue-400" }
  ];

  const features = [
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsivas con React y Tailwind CSS"
    },
    {
      icon: Database,
      title: "Desarrollo Backend",
      description: "APIs robustas con Node.js, Express y bases de datos NoSQL"
    },
    {
      icon: BarChart3,
      title: "Data Science & Estadística",
      description: "Análisis de datos, visualización y modelado estadístico para la toma de decisiones"
    },
    {
      icon: Sigma,
      title: "Razonamiento Matemático",
      description: "Solución de problemas complejos y pensamiento lógico avanzado"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="sobre-mi" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      
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
            <Heart className="w-4 h-4" />
            Sobre mí
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Pasión por el
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              desarrollo web y el pensamiento analítico
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Soy estudiante de <span className="font-semibold text-blue-600"> Tecnólogo Análisis y Desarrollo de Software (SENA)</span> y de <span className="font-semibold text-purple-600">Licenciatura en Matemáticas (Universidad Pedagógica Nacional)</span>. Me apasiona el desarrollo web, el razonamiento matemático y la ciencia de datos.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Skills Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Mis Habilidades</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {[
              { icon: Target, number: "2", label: "Proyectos Completados" },
              { icon: Users, number: "5+", label: "Tecnologías Dominadas" },
              { icon: Award, number: "100%", label: "Compromiso con la Calidad" },
              { icon: Heart, number: "24/7", label: "Disponibilidad" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
