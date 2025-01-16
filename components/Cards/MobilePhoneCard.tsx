import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { DailyDeal } from '../../library/types';

interface ProductCardProps {
  product: DailyDeal;
}

const MobilePhoneCard: React.FC<ProductCardProps> = ({ product }) => {
  // Fallback image if no image URL is available
  const imageUrl = product?.image_url || '/placeholder-image.png';

  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow-lg">
      {/* Product Image */}
      <div className="h-40 w-full flex justify-center items-center">
        <Image
          width={150}
          height={150}
          className="object-contain h-full"
          src={imageUrl}
          alt={product.full_name || 'Product Image'}
        />
      </div>

      {/* Product Information */}
      <div className="pt-6">
        {/* Product Name */}
        <span
          className="text-sm font-semibold leading-tight text-gray-900 hover:underline flex items-center"
          style={{
            height: '3rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.full_name}
        </span>

        {/* Inventory and Condition */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            {`Condition: ${product.condition}`}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {`Stock: ${product.inventory_quantity}`}
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-extrabold text-gray-900">
            {`₵ ${product.price}`}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary px-3 py-2.5 text-xs font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300"
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
    </div>
  );
};

export default MobilePhoneCard;
