import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const themes = [
  { value: 'theme1', label: '🧘 Theme 1 - Minimal' },
  { value: 'theme2', label: '🌙 Theme 2 - Dark' },
  { value: 'theme3', label: '🎨 Theme 3 - Colorful' },
];

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentThemeLabel = themes.find(t => t.value === theme)?.label || 'Select Theme';
  const isActive = (path: string) => location.pathname === path;

  const headerBg =
    theme === 'theme2' ? 'bg-gray-900'
    : theme === 'theme3' ? 'bg-pink-100'
    : 'bg-gray-100';

  const navColor =
    theme === 'theme2' ? 'text-white'
    : theme === 'theme3' ? 'text-pink-900'
    : 'text-gray-800';

  const navActiveBorder =
    theme === 'theme2' ? 'border-white'
    : theme === 'theme3' ? 'border-pink-500'
    : 'border-blue-600';

  const dropdownBg =
    theme === 'theme2' ? 'bg-gray-800 text-white border-gray-600'
    : theme === 'theme3' ? 'bg-pink-50 text-pink-900 border-pink-300'
    : 'bg-white text-gray-800 border-gray-300';

  return (
    <header className={`flex flex-wrap justify-between items-center gap-4 px-4 py-4 shadow sticky top-0 z-50 ${headerBg}`}>
      
      {/* === LEFT === */}
      <div className="flex items-center gap-3">
        {theme === 'theme2' ? (
          <div className="flex items-center gap-2">
            <button onClick={onToggleSidebar} className="text-2xl text-white focus:outline-none">☰</button>
            <h1 className="text-lg font-bold text-white">Theme Switcher App</h1>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <img
              src="/themeapplogo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md bg-white"
            />
            <h1 className={`text-xl font-bold ${
              theme === 'theme1' ? 'text-black font-sans'
              : theme === 'theme2' ? 'text-white font-serif'
              : 'text-pink-600 font-[Pacifico]'
            }`}>
              Theme Switcher App
            </h1>
          </div>
        )}
      </div>

      {/* === RIGHT === */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto sm:justify-end">

        {/* Nav Tabs */}
        <nav className="flex gap-3 justify-center sm:justify-start text-sm font-medium tracking-wide">
          {['Home', 'About', 'Contact'].map(label => {
            const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
            const isActiveTab = isActive(path);
            return (
              <Link
                key={label}
                to={path}
                className={`px-4 py-1 rounded-full transition-all duration-200 ease-in-out border-2 ${
                  isActiveTab ? `font-bold ${navActiveBorder}` : 'border-transparent'
                } ${navColor} hover:border-opacity-60 hover:scale-105`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Theme Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full sm:w-[200px] flex items-center justify-between px-3 py-2 border rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'theme2'
                ? 'bg-gray-800 text-white border-gray-600 focus:ring-gray-500'
                : theme === 'theme3'
                ? 'bg-pink-50 text-pink-900 border-pink-300 focus:ring-pink-300'
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-300'
            }`}
          >
            {currentThemeLabel}
            <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
          </button>

          {isOpen && (
            <ul className={`absolute left-0 w-full sm:w-[200px] mt-1 border rounded shadow z-50 ${dropdownBg}`}>
              {themes.map(({ value, label }) => (
                <li
                  key={value}
                  onClick={() => { setTheme(value); setIsOpen(false); }}
                  className={`px-4 py-2 cursor-pointer transition truncate ${
                    theme === 'theme2' ? 'hover:bg-gray-700'
                    : theme === 'theme3' ? 'hover:bg-pink-200'
                    : 'hover:bg-blue-100'
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
