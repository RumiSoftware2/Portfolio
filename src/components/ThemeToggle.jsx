import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-1/2 left-8 transform translate-y-1/2 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 transition-all duration-300 z-50 hover:scale-110 hover:shadow-xl"
      aria-label="Alternar modo oscuro"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}

export default ThemeToggle;
