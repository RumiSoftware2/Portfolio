import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'development', label: 'Desarrollo' },
  { id: 'data', label: 'Datos e IA' },
  { id: 'tools', label: 'Herramientas' },
];

const skillCategories = {
  python: 'data', stats: 'data', sql: 'data', colab: 'data', mongodb: 'data',
  databricks: 'data', numpy: 'data', pandas: 'data', jupyter: 'data',
  react: 'development', java: 'development', javascript: 'development',
  nodejs: 'development', tailwind: 'development', fastapi: 'development',
  framer: 'development', express: 'development', vite: 'development',
  git: 'tools', github: 'tools', vscode: 'tools', codex: 'tools', latex: 'tools',
};

const categoryNames = {
  development: 'Desarrollo',
  data: 'Datos e IA',
  tools: 'Herramientas',
};

const levelNames = {
  xl: 'Dominio experto',
  md: 'Nivel avanzado',
  sm: 'Nivel competente',
};

function SkillsTagCanvas({ skills }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filteredSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return skills.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skillCategories[skill.id] === activeCategory;
      const matchesSearch = !normalizedQuery || skill.name.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query, skills]);

  const getIcon = (skill) => {
    if (skill.icon) {
      return (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${skill.icon}.svg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-5 w-5 opacity-80 transition duration-300 group-hover:opacity-100"
          onError={(event) => { event.currentTarget.style.display = 'none'; }}
        />
      );
    }

    return (
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold text-white ${skill.bgColor || 'bg-gradient-to-br from-blue-500 to-purple-500'}`}>
        {skill.fallback || skill.name.slice(0, 2).toUpperCase()}
      </span>
    );
  };

  return (
    <motion.div
      className="overflow-hidden rounded-3xl border border-blue-100 bg-white/80 shadow-xl shadow-blue-950/5 backdrop-blur dark:border-gray-700 dark:bg-gray-800/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="border-b border-blue-100/80 bg-gradient-to-r from-blue-50/80 via-white/70 to-purple-50/80 p-5 dark:border-gray-700 dark:from-blue-950/30 dark:via-gray-800/50 dark:to-purple-950/30 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Explora mi stack
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Filtra por área o busca una tecnología para conocer mi nivel.
            </p>
          </div>

          <label className="relative block w-full lg:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar tecnología..."
              aria-label="Buscar tecnología"
              className="w-full rounded-xl border border-gray-200 bg-white/90 py-2.5 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-900/70 dark:text-gray-100 dark:focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filtrar tecnologías por área">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 ${isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/20'
                  : 'border border-gray-200 bg-white/80 text-gray-600 hover:border-blue-300 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300'}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400" aria-live="polite">
          <span>{filteredSkills.length} {filteredSkills.length === 1 ? 'tecnología' : 'tecnologías'}</span>
          {query && (
            <button type="button" onClick={() => setQuery('')} className="rounded px-2 py-1 text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-300 dark:hover:bg-gray-700">
              Limpiar búsqueda
            </button>
          )}
        </div>

        {filteredSkills.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.025, 0.2) }}
                className="group flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  {getIcon(skill)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                  <span className="mt-0.5 block truncate text-xs text-gray-500 dark:text-gray-400">
                    {categoryNames[skillCategories[skill.id]]} · {levelNames[skill.weight] || 'Experiencia práctica'}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 px-4 py-10 text-center dark:border-gray-600">
            <p className="font-medium text-gray-700 dark:text-gray-200">No encontramos esa tecnología</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Prueba otro nombre o limpia la búsqueda.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SkillsTagCanvas;
