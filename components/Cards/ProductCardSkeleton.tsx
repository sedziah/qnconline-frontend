// components/Cards/ProductCardSkeleton.tsx
import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow-lg animate-pulse">
      <div className="h-40 w-full bg-gray-300 rounded-md"></div>
      <div className="pt-6">
        <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
      </div>

      <div className="h-6 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="h-6 bg-gray-300 rounded-md w-1/3"></div>
        <div className="h-8 bg-primary-100 rounded-md w-1/3"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
