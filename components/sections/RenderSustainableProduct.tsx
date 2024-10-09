import React from 'react';
import NewProductCategoryCard from '../Cards/NewProductCategoryCard';
import ProductCardSkeleton from '../Cards/ProductCardSkeleton'; // Add skeleton loader

interface SustainableProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  image_url: string;
}

interface RenderSustainableProductProps {
  products: SustainableProduct[];
  loading: boolean;
}

const RenderSustainableProduct: React.FC<RenderSustainableProductProps> = ({ products, loading }) => {
  return (
    <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
      <h2 className='text-base font-semibold'>Explore Our Eco-Friendly Collection</h2>
      <p className='text-base text-black/50 font-normal'>Browse our Smart Choices for a Sustainable Future</p>

      <div className='mt-5'>
        {loading ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
            {[...Array(2)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
              {products.slice(0, 2).map((product) => (
                <NewProductCategoryCard
                  key={product.id}
                  name={product.name}
                  description={`Eco-friendly ${product.category}`}
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
                  description={`Eco-friendly ${product.category}`}
                  imageUrl={product.image_url}
                  linkUrl={`/products/${product.slug}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RenderSustainableProduct;
