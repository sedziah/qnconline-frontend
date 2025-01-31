import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface MobilePhoneCardProps {
  product: {
    id: string;
    full_name: string;
    price: number;
    product_slug: string;
    condition: string;
    inventory_quantity: number;
    memory: string;
    sim: string;
    image_url: string;
    reviews?: { rating: number }[]; // Optional reviews array
    discount: number;
    free_delivery: boolean;
  };
}

const MobilePhoneCard: React.FC<MobilePhoneCardProps> = ({ product }) => {
  // Default "No discount" for now
  const discount = "No discount";

  // Calculate the average rating if reviews exist
  const rating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
      : 0;

  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow-lg">
      <Link href={`/products/${product.product_slug}`} passHref>
        <div className="h-40 w-full flex justify-center items-center">
          <Image
            width={150}
            height={150}
            className="object-contain h-full"
            src={product.image_url || '/placeholder-image.png'}
            alt={product.full_name}
          />
        </div>
      </Link>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className={`me-2 rounded py-0.5 text-xs font-medium ${
              discount !== "No discount"
                ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {discount}
          </span>
        </div>
      </div>

      <Link href={`/products/${product.product_slug}`} passHref>
        <span
          className="text-sm font-semibold leading-tight text-gray-900 hover:underline flex items-center"
          style={{
            height: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.full_name}
        </span>
      </Link>
      <div className="mt-4">
        <ul className="text-sm text-gray-500">
          <li>{product.condition} - {product.memory} - ({product.sim})</li>
        </ul>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-900">
          {rating > 0 ? rating.toFixed(1) : "No reviews yet"}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-lg font-extrabold leading-tight text-gray-900">
          {`₵ ${product.price}`}
        </p>

        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-primary px-3 py-2.5 text-xs font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            className="h-5 w-5"
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
        </button>
      </div>
    </div>
  );
};

export default MobilePhoneCard;
