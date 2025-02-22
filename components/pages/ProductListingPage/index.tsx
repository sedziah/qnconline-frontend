"use client";
import Breadcrumb from "@/components/breadcrumb";
import { CTAOne } from "@/components/CTAS/CTAOne";
import FloatingFilter from "@/components/FloatingFilter";
import ProductsWrapper from "@/components/ProductsWrapper";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import RenderReviews from "@/components/sections/RenderReviews";

const ProductListingPage = () => {
  return (
    <>
      {/* Loading indicator while waiting for the content */}
      <Suspense
        fallback={
          <div>
            <div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
        }
      >
        <ProductContent />
      </Suspense>
    </>
  );
};

const ProductContent = () => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("s"); // Extract the slug from the URL
  const categoryName = searchParams.get("name") || "All Products"; // Extract the name from the URL

  console.log(categorySlug);

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

      {/* Pass both categorySlug and categoryName to ProductsWrapper */}
      {categorySlug && (
        <ProductsWrapper
          categorySlug={categorySlug}
          categoryName={categoryName}
        />
      )}

      <FloatingFilter />

      {/* {categorySlug && <RenderReviews />} */}
    </>
  );
};

export default ProductListingPage;
