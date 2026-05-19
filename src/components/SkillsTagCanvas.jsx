import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SkillTag from './SkillTag';
import { Hand } from 'lucide-react';

function SkillsTagCanvas({ skills }) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});

  // Generar posiciones iniciales aleatorias en espiral
  useEffect(() => {
    if (containerRef.current && skills.length > 0) {
      const newPositions = {};
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight || 400;

      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 80 + (index % 3) * 40;
        
        newPositions[skill.id] = {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      });

      setPositions(newPositions);
    }
  }, [skills.length]);

  const handleDragEnd = (skillId, info) => {
    setPositions((prev) => ({
      ...prev,
      [skillId]: {
        x: info.offset.x,
        y: info.offset.y,
      },
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[420px] md:min-h-[520px] bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 border-2 border-blue-200 dark:border-gray-700 rounded-2xl overflow-hidden backdrop-blur-sm"
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

        {/* Tags container */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-6 md:p-8 content-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              onDragEnd={(event, info) => handleDragEnd(skill.id, info)}
              initial={positions[skill.id] || { x: 0, y: 0 }}
              animate={positions[skill.id] || { x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <SkillTag skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hint */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-4 text-gray-600 dark:text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Hand className="w-4 h-4" />
        <span>Arrastra las etiquetas para explorar el stack</span>
      </motion.div>
    </motion.div>
  );
}

export default SkillsTagCanvas;
