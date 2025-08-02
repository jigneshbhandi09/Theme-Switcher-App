import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div className="mt-10 px-4 max-w-6xl mx-auto transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
  key={product.id}
  className={`p-4 rounded-lg text-center transition-transform transform hover:scale-105 shadow-sm ${
    theme === 'theme1'
      ? 'bg-white text-black'
      : theme === 'theme2'
      ? 'bg-gray-800 text-white'
      : 'bg-pink-100 text-pink-900 border-2 border-pink-400'
  }`}
>
  <img
    src={product.image}
    alt={product.title}
    className="w-24 h-24 object-contain mx-auto mb-3"
  />
  <h4 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h4>
  <p className="text-lg font-bold tracking-wide">${product.price}</p>
</div>

        ))}
      </div>
    </div>
  );
};

export default ProductList;
