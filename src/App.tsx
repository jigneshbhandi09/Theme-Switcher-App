import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';
import { useState } from 'react';

// Separate component to allow useLocation within Router
const AppContent = () => {
  const { theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/*  Header */}
      <Header onToggleSidebar={() => setShowSidebar((prev) => !prev)} />

      {/*  Layout */}
      <div className={`flex flex-1 ${theme === 'theme2' ? '' : 'flex-col'}`}>
        {/*  Sidebar only for theme2 */}
        {theme === 'theme2' && showSidebar && (
          <aside className="w-52 bg-gray-800 text-white p-4 min-h-screen">
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/', icon: '🏠' },
                { label: 'About', to: '/about', icon: 'ℹ️' },
                { label: 'Contact', to: '/contact', icon: '📞' },
              ].map(({ label, to, icon }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                      isActive(to) ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'
                    }`}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/*  Main content area */}
        <main
          className={`flex-1 p-6 sm:px-10 sm:py-8 animate-fade-in ${
            theme === 'theme2' ? 'bg-[#1a1a1a]' : theme === 'theme1' ? 'bg-white' : 'bg-pink-50'
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      {/*  Footer */}
      <Footer />
    </div>
  );
};

// Final export with Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
