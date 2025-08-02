import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  const cardStyle =
    theme === 'theme2'
      ? 'bg-gray-800 text-white border-gray-700'
      : theme === 'theme3'
      ? 'bg-pink-50 text-pink-900 border-pink-300'
      : 'bg-white text-gray-800 border-gray-300';

  const inputStyle =
    theme === 'theme2'
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
      : theme === 'theme3'
      ? 'bg-pink-100 border-pink-300 text-pink-900 placeholder-pink-700'
      : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500';

  const buttonStyle =
    theme === 'theme1'
      ? 'bg-black text-white hover:bg-gray-800'
      : theme === 'theme2'
      ? 'bg-white text-black hover:bg-gray-300'
      : 'bg-pink-600 text-white hover:bg-pink-700';

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
      <h2 className="text-3xl font-bold mb-10 text-center">📞 Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Info Card */}
        <div className={`p-6 rounded-lg shadow border ${cardStyle}`}>
          <h3 className="text-xl font-semibold mb-4">📬 Get in Touch</h3>
          <p className="mb-4 text-sm leading-relaxed">
            We’re here to help! Whether you have questions, feedback, or suggestions, feel free to contact us.
          </p>
          <ul className="space-y-3 text-sm">
            <li><strong>Email:</strong> jigneshbhandi18@gmail.com</li>
            <li><strong>Phone:</strong> +91 8104803669</li>
            <li><strong>Address:</strong> Mumbai, India</li>
          </ul>
        </div>

        {/* Right Form Card */}
        <div className={`p-6 rounded-lg shadow border ${cardStyle}`}>
          <h3 className="text-xl font-semibold mb-4">✉️ Send a Message</h3>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-2 rounded border ${inputStyle}`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full px-4 py-2 rounded border ${inputStyle}`}
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className={`w-full px-4 py-2 rounded border resize-none ${inputStyle}`}
            />
            <button
              type="submit"
              className={`mt-2 px-6 py-2 rounded font-semibold transition ${buttonStyle}`}
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
