import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ExperienceCarousel({ items }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [reduceMotion, setReduceMotion] = useState(false);

  const activeIndex = page;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const listener = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const paginate = (newDirection) => {
    const nextIndex = activeIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < items.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const jumpTo = (newIndex) => {
    const dir = newIndex > activeIndex ? 1 : -1;
    setPage([newIndex, dir]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      paginate(-1);
    } else if (e.key === 'ArrowRight') {
      paginate(1);
    }
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      paginate(1);
    } else if (info.offset.x > threshold) {
      paginate(-1);
    }
  };

  const slideVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : {
        enter: (dir) => ({
          x: dir > 0 ? 100 : -100,
          opacity: 0,
          scale: 0.98,
        }),
        center: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            x: { type: 'spring', stiffness: 350, damping: 35 },
            opacity: { duration: 0.25 },
            scale: { duration: 0.25 },
          },
        },
        exit: (dir) => ({
          x: dir < 0 ? 100 : -100,
          opacity: 0,
          scale: 0.98,
          transition: {
            x: { type: 'spring', stiffness: 350, damping: 35 },
            opacity: { duration: 0.25 },
            scale: { duration: 0.25 },
          },
        }),
      };

  const currentItem = items[activeIndex];

  return (
    <div
      className="w-full max-w-4xl mx-auto flex flex-col items-center outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Carrusel de experiencia. Usa las flechas del teclado izquierda y derecha para navegar."
    >
      {/* 1. Línea Horizontal y Nodos */}
      <div className="relative w-full max-w-xl mx-auto mb-12 px-6">
        {/* Línea base gris */}
        <div className="absolute top-4 left-6 right-6 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />

        {/* Línea de progreso coloreada */}
        <div
          className="absolute top-4 left-6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 -z-10 transition-all duration-300 ease-out"
          style={{
            width: `${(activeIndex / (items.length - 1)) * 100}%`,
            maxWidth: 'calc(100% - 3rem)',
          }}
        />

        {/* Nodos */}
        <div className="flex justify-between items-center relative z-10">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => jumpTo(index)}
                className="flex flex-col items-center focus:outline-none group"
                aria-label={`Ver: ${item.title}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-125 ring-4 ring-blue-500/20 dark:ring-blue-400/30'
                      : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:scale-105'
                  }`}
                >
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <span
                  className={`text-xs mt-2 font-semibold absolute top-8 transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {item.period}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Tarjeta del Slide Activo */}
      <div className="relative w-full min-h-[180px] md:min-h-[200px] flex items-center justify-center px-4 overflow-hidden py-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentItem && (
            <motion.div
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={handleDragEnd}
              className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-grab active:cursor-grabbing select-none"
              aria-live="polite"
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-snug">
                {currentItem.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed font-normal">
                {currentItem.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Controles Inferiores (Flechas + Puntos) */}
      <div className="flex items-center gap-6 mt-6">
        {/* Botón Anterior */}
        <button
          onClick={() => paginate(-1)}
          disabled={activeIndex === 0}
          className={`w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-200 ${
            activeIndex === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105 active:scale-95'
          }`}
          aria-label="Experiencia anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Puntos Indicadores */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={() => paginate(1)}
          disabled={activeIndex === items.length - 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-200 ${
            activeIndex === items.length - 1
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105 active:scale-95'
          }`}
          aria-label="Experiencia siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default ExperienceCarousel;
