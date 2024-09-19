import Image from 'next/image';
import React from 'react';
import { Product } from '../../library/types';

interface ProductCardProps {
  product: Product;
}

const NewProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculate discount if applicable
  const discount = product.priceAdjustment
    ? `${product.priceAdjustment} off`
    : 'No discount';

  // Handle the image, fallback if no image available
  const imageUrl = (product.images && product.images.length > 0 && product.images[0].image)
    ? product.images[0].image
    : '/placeholder-image.png'; // Use a placeholder image if no images are present or the image URL is invalid

  const darkModeImageUrl = product.images.length > 1 && product.images[1].image 
    ? product.images[1].image 
    : imageUrl; // Fallback to main image if dark mode image is unavailable

  // Handle rating fallback if not available in product
  const rating = product.reviews.length > 0
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow-lg">
      <a href="#">
        <div className="h-40 w-full flex justify-center items-center">
          <Image
            width={150}
            height={150}
            className="object-contain h-full dark:hidden"
            src={imageUrl}  // Main image for light mode
            alt={product.name}
          />
          <Image
            width={150}
            height={150}
            className="object-contain h-full hidden dark:block"
            src={darkModeImageUrl}  // Dark mode image or fallback to main
            alt={product.name}
          />
        </div>
      </a>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {discount}
          </span>
        </div>
      </div>

      {/* Product Name with fixed height */}
      <a
        href="#"
        className="text-sm font-semibold leading-tight text-gray-900 hover:underline flex items-center"
        style={{
          height: '3rem', // Fixed height to ensure uniformity (adjust based on font size)
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2, // Limits to 2 lines
          WebkitBoxOrient: 'vertical',
        }}
      >
        {product.name}
      </a>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
        </div>

        <p className="text-sm font-medium text-gray-900">{rating.toFixed(1)}</p>
        <p className="text-sm font-medium text-gray-500">({product.reviews.length})</p>
      </div>

      <ul className="mt-2 flex items-center gap-4">
        <li className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
          </svg>
          <p className="text-xs font-medium text-gray-500">
            Free Delivery
          </p>
        </li>
      </ul>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-lg font-extrabold leading-tight text-gray-900">
          {`GHS ${product.price}`}
        </p>

        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-xs font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default NewProductCard;
