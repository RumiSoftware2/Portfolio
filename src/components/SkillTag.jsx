import { motion } from 'framer-motion';

function SkillTag({ skill, onDragStart, onDragEnd }) {
  const getTextSize = (weight) => {
    switch (weight) {
      case 'xl':
        return 'text-lg md:text-xl px-6 py-3';
      case 'md':
        return 'text-base px-5 py-2.5';
      case 'sm':
        return 'text-sm px-4 py-2';
      default:
        return 'text-base px-4 py-2';
    }
  };

  const getShadow = (weight) => {
    switch (weight) {
      case 'xl':
        return 'shadow-lg';
      case 'md':
        return 'shadow-md';
      case 'sm':
        return 'shadow-sm';
      default:
        return 'shadow-md';
    }
  };

  const getIcon = (icon) => {
    if (!icon) return null;
    
    // Usando simple-icons CDN como fallback
    // En producción, considerar usar local SVGs o una librería específica
    const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`;
    
    return (
      <img 
        src={iconUrl} 
        alt={skill.name}
        className="w-5 h-5"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      whileDrag={{ scale: 1.05, zIndex: 50 }}
      whileHover={{ scale: 1.03 }}
      className={`
        relative cursor-grab active:cursor-grabbing
        inline-flex items-center gap-2.5
        bg-white dark:bg-gray-800
        border-2 border-blue-200 dark:border-blue-700
        rounded-full
        ${getTextSize(skill.weight)}
        ${getShadow(skill.weight)}
        font-semibold
        text-gray-800 dark:text-gray-100
        transition-all duration-200
        hover:border-blue-400 dark:hover:border-blue-500
        select-none
        touch-none
      `}
      aria-label={`Habilidad: ${skill.name}`}
    >
      {/* Icono o fallback */}
      <span className="flex-shrink-0">
        {skill.icon ? (
          getIcon(skill.icon)
        ) : skill.fallback ? (
          <span
            className={`
              inline-flex items-center justify-center
              w-5 h-5 rounded-full
              text-xs font-bold text-white
              ${skill.bgColor || 'bg-gradient-to-r from-blue-500 to-purple-500'}
            `}
          >
            {skill.fallback}
          </span>
        ) : null}
      </span>

      {/* Nombre */}
      <span className="whitespace-nowrap">{skill.name}</span>
    </motion.div>
  );
}

export default SkillTag;
