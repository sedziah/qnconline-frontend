import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCategoryCardProps {
  name: string;
  description: string;
  imageUrl: string;
  darkModeImageUrl?: string; // Optional dark mode image
  linkUrl: string;
}

const NewProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  name,
  description,
  imageUrl,
  darkModeImageUrl,
  linkUrl,
}) => {
  return (
    <div className='rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow'>
      <Link href={linkUrl}>
        <div className="h-56 w-full">
          <a href="#">
            <Image
              width={100}
              height={200}
              className="mx-auto h-full dark:hidden"
              src={imageUrl} // Light mode image
              alt={name}
            />
            <Image
              width={200}
              height={100}
              className="mx-auto hidden h-full dark:block"
              src={darkModeImageUrl || imageUrl} // Dark mode image or fallback to light mode image
              alt={name}
            />
          </a>
        </div>
        <div className='pt-6'>
          <h1 className="text-sm font-medium leading-tight text-gray-900 hover:underline">
            {name}
          </h1>
          <p className="text-sm font-medium text-gray-500">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewProductCategoryCard;
