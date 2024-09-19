"use client";
import Breadcrumb from '@/components/breadcrumb';
import { CTAOne } from '@/components/CTAS/CTAOne';
import ProductsWrapper from '@/components/ProductsWrapper';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';  
import { BiSortAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";

const ProductListingPage = () => {
  return (
    <>
      {/* Loading indicator while waiting for the content */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProductContent />
      </Suspense>
    </>
  );
};

const ProductContent = () => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('s'); // Extract the slug from the URL
  const categoryName = searchParams.get('name') || 'All Products'; // Extract the name from the URL

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryName },  // Display the category name in the breadcrumb
  ];

  return (
    <>
      <Breadcrumb items={categoryName ? breadcrumbItems : breadcrumbItems.slice(0, 1)} />
      <CTAOne />

      {/* Pass both categorySlug and categoryName to ProductsWrapper */}
      {categorySlug && (
        <ProductsWrapper categorySlug={categorySlug} categoryName={categoryName} />
      )}

      <div className='block lg:hidden md:hidden bg-white shadow-md transition-all border-t-2 border-lightGray/20 px-4 py-3 w-full fixed bottom-0 '>
        <div className='flex flex-row items-center justify-center w-full'>
          <button className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Filters</p>
            <FaFilter />
          </button>
          <div className='h-8 w-0.5 border bg-lightGray/20'></div>
          <button className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Sort</p>
            <BiSortAlt2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListingPage;
