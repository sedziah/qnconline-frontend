"use client";

import Breadcrumb from "@/components/breadcrumb";
import { CTAOne } from "@/components/CTAS/CTAOne";
import ProductsWrapper from "@/components/ProductsWrapper";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import RenderReviews from "@/components/sections/RenderReviews";

const ProductListingPage = () => {
  return (
    <>
      {/* Suspense: Show loading UI while fetching products */}
      <Suspense
        fallback={
          <div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div>
        }
      >
        <ProductContent />
      </Suspense>
    </>
  );
};

const ProductContent = () => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("s"); // Extract the category slug
  const categoryName = searchParams.get("name") || "All Products"; // Get category name
  const filters = Object.fromEntries(searchParams.entries()); // Extract filters from URL

  // Remove category-related parameters from filters
  delete filters["s"];
  delete filters["name"];

  console.log("Category Slug:", categorySlug);
  console.log("Filters:", filters);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: categoryName },
  ];

  return (
    <>
      <Breadcrumb
        items={categoryName ? breadcrumbItems : breadcrumbItems.slice(0, 1)}
      />
      <CTAOne />

      {/* Pass category & filters to ProductsWrapper */}
      {categorySlug && (
        <ProductsWrapper
          categorySlug={categorySlug}
          categoryName={categoryName}
          filters={filters} // Pass filters dynamically
        />
      )}

      {/* Reviews section */}
      {/* {categorySlug && <RenderReviews />} */}
    </>
  );
};

export default ProductListingPage;
