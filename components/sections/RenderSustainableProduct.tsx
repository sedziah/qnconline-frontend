import React, { useEffect, useState } from 'react';
import NewProductCategoryCard from '../Cards/NewProductCategoryCard';
import { apiService } from '../../library/services/apiService';

// Define the Product type
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image_url: string;
}

const RenderSustainableProduct = () => {
  // Specify the type for products as an array of Product
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Handle error as string or null

  useEffect(() => {
    // Fetch sustainable products
    const fetchSustainableProducts = async () => {
      try {
        const data = await apiService.getSustainableProducts();
        setProducts(data);
        setLoading(false);
      } catch (err: unknown) {
        // Handle error as unknown and safely extract the message
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchSustainableProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>
      <h2 className='text-base font-semibold'>Explore Our Eco-Friendly Collection</h2>
      <p className='text-base text-black/50 font-normal'>Browse our Smart Choices for a Sustainable Future</p>

      <div className='mt-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
          {products.slice(0, 2).map((product) => (
            <NewProductCategoryCard
              key={product.id}
              name={product.name}
              description={`Eco-friendly ${product.category}`}  // Fix the interpolation here
              imageUrl={product.image_url}
              linkUrl={`/products/${product.slug}`}
            />
          ))}
        </div>
        <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
          {products.slice(2, 5).map((product) => (
            <NewProductCategoryCard
              key={product.id}
              name={product.name}
              description={`Eco-friendly ${product.category}`}  // Fix the interpolation here
              imageUrl={product.image_url}
              linkUrl={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderSustainableProduct;
