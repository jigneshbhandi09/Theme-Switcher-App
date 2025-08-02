import { useTheme } from '../context/ThemeContext';
import ProductList from '../components/ProductList';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        className={`max-w-5xl mx-auto px-4 py-8 ${
          theme === 'theme2' ? 'text-white' : 'text-gray-800'
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-4 ${
            theme === 'theme3' ? 'text-pink-600' : 'text-inherit'
          }`}
        >
          Welcome to the Home Page
        </h1>

       <p className="mb-6 leading-relaxed">
  This project demonstrates a responsive React interface with real-time theme switching and dynamic product loading from an API. Explore light, dark, and colorful themes — all designed to change the layout, fonts, and structure.
</p>



        <button
          className={`px-6 py-2 rounded font-semibold shadow transition ${
            theme === 'theme1'
              ? 'bg-black text-white hover:bg-gray-800'
              : theme === 'theme2'
              ? 'bg-white text-black hover:bg-gray-300'
              : 'bg-pink-600 text-white hover:bg-pink-700'
          }`}
        >
          Explore More
        </button>
      </section>

      {/* 🧩 Feature Cards Section with Animation */}
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '⚡ Fast Switching',
              desc: 'Switch between 3 complete themes instantly and intuitively.'
            },
            {
              title: '💡 Real Product API',
              desc: 'Uses fakestoreapi.com to load and display real-time data.'
            },
            {
              title: '🎨 Layout Variations',
              desc: 'Each theme changes layout, structure, fonts, and colors.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded shadow animate-fade-up delay-${index * 100} ${
                theme === 'theme2'
                  ? 'bg-gray-800 text-white'
                  : theme === 'theme3'
                  ? 'bg-pink-100 text-pink-900'
                  : 'bg-white text-black'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductList />
    </>
  );
};

export default Home;
