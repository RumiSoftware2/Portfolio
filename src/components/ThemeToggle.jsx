import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 px-4 py-2 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 transition-colors duration-300 z-50"
      aria-label="Alternar modo oscuro"
    >
      {isDark ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}

export default ThemeToggle;
