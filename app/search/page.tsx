"use client"
import Breadcrumb from '@/components/breadcrumb';
import { CTAOne } from '@/components/CTAS/CTAOne';
import FloatingFilter from '@/components/FloatingFilter';
import ProductsWrapper from '@/components/ProductsWrapper';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const SearchPage = () => {
  return (
    <>
      <Suspense fallback={<div><div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div></div>}>
        <SearchContent />
      </Suspense>
    </>
  );
};

const SearchContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || undefined; // Convert null to undefined

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: searchQuery ? `Search results for "${searchQuery}"` : 'Search Results' }
  ];

  return (
    <div className="container mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <CTAOne />

      {/* Display products using ProductsWrapper, passing the searchQuery */}
      <ProductsWrapper searchQuery={searchQuery} />

      <FloatingFilter />
    </div>
  );
};

export default SearchPage;
