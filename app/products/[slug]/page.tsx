"use client";
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

const ProductListingDetail: React.FC = () => {
  const params = useParams(); // Retrieve all route parameters
  const slug = params.slug; // Access the 'slug' directly

  useEffect(() => {
    console.log('Product Slug:', slug); // Log the product slug to confirm it's being received
  }, [slug]);

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product Slug: {slug}</p> {/* Display the slug directly */}
    </div>
  );
};

export default ProductListingDetail;
