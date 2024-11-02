"use client"
import React, { useEffect } from 'react';

interface ProductListingDetailProps {
  id: string; // Specify `id` as a string
}

const ProductListingDetail: React.FC<ProductListingDetailProps> = ({ id }) => {
  useEffect(() => {
    console.log('Product ID:', id); // Log the product ID to confirm it's being received
  }, [id]);

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product ID: {id}</p> {/* Display the product ID on the page */}
    </div>
  );
};

export default ProductListingDetail;
