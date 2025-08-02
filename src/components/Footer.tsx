import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center py-4 mt-auto text-sm ${
        theme === 'theme1'
          ? 'bg-gray-100 text-gray-700'
          : theme === 'theme2'
          ? 'bg-gray-900 text-white'
          : 'bg-pink-200 text-pink-900'
      }`}
    >
      <p>&copy; 2025 Multi-Theme Switcher App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
