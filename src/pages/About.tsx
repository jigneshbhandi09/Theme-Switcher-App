import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  const themeTextColor = theme === 'theme2' ? 'text-white' : 'text-gray-800';

  return (
    <section className={`animate-fade-in px-6 py-12 ${themeTextColor}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Mission Card */}
          <div
            className={`rounded-lg p-6 shadow-md transition ${
              theme === 'theme1'
                ? 'bg-white'
                : theme === 'theme2'
                ? 'bg-gray-800'
                : 'bg-pink-100 text-pink-900'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">🎯 Our Mission</h2>
            <p>
              We aim to build efficient and elegant applications with smooth UI/UX for real-world users.
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className={`rounded-lg p-6 shadow-md transition ${
              theme === 'theme1'
                ? 'bg-white'
                : theme === 'theme2'
                ? 'bg-gray-800'
                : 'bg-pink-100 text-pink-900'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">🛠 Tech Stack</h2>
            <ul className="list-disc pl-4 space-y-1">
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>FakeStore API</li>
            </ul>
          </div>

          {/* Vision */}
          <div
            className={`rounded-lg p-6 shadow-md transition ${
              theme === 'theme1'
                ? 'bg-white'
                : theme === 'theme2'
                ? 'bg-gray-800'
                : 'bg-pink-100 text-pink-900'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">🚀 Vision</h2>
            <p>
              Empower developers and companies with flexible, reusable, and beautiful UI components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
