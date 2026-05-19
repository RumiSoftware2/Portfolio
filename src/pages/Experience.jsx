import { motion } from 'framer-motion';
import { Briefcase, Code } from 'lucide-react';
import ExperienceCarousel from '../components/ExperienceCarousel';
import SkillsTagCanvas from '../components/SkillsTagCanvas';
import { experienceItems } from '../data/experience';
import { skills } from '../data/skills';

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experiencia" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <Briefcase className="w-4 h-4" />
            Trayectoria Profesional
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Experiencia
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Mi recorrido académico y profesional en tecnología y matemáticas.
          </motion.p>
        </motion.div>

        {/* Timeline Section (now Carousel) */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ExperienceCarousel items={experienceItems} />
        </motion.div>

        {/* Separator */}
        <motion.div
          className="my-20 flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-600"></div>
          <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold px-4">Stack Tecnológico</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-600"></div>
        </motion.div>

        {/* Skills Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <Code className="w-4 h-4" />
            Habilidades
          </motion.div>

          <motion.h3
            className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            variants={itemVariants}
          >
            Herramientas y Tecnologías
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Tecnologías que domino y utilizo en mis proyectos, desde frontend hasta data science.
          </motion.p>
        </motion.div>

        {/* Skills Tag Canvas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <SkillsTagCanvas skills={skills} />
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
