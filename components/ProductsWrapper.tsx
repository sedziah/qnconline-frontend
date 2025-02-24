"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  useFetchProductsByCategoryAndFilterQuery,
  useSearchProductsQuery,
} from "@/redux/api/features/productsApi";
import FilterSection from "../components/Filters/Filters";
import MobilePhoneCard from "./Cards/MobilePhoneCard";
import FloatingFilter from "./FloatingFilter";
import {
  ProductListingResponse,
  ProductVariation,
} from "../library/types/index";

type ProductsWrapperProps = {
  searchQuery?: string;
  categorySlug?: string;
  categoryName?: string;
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ searchQuery }) => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("s") || ""; // Get slug
  const categoryName = searchParams.get("name") || ""; // Get category name

  const [filters, setFilters] = useState<Record<string, string[]>>({});

  // ✅ Call both hooks unconditionally but use `skip` to prevent unnecessary API calls
  const searchResults = useSearchProductsQuery(searchQuery || "", {
    skip: !searchQuery,
  });
  const categoryResults = useFetchProductsByCategoryAndFilterQuery(
    { categorySlug, filters },
    { skip: !!searchQuery } // Skip category fetch when searching
  );

  // ✅ Decide which data to use
  const { data, error, isLoading } = searchQuery
    ? searchResults
    : categoryResults;

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
  };

  if (!categorySlug && !searchQuery) {
    return (
      <p className="text-center text-red-500">
        Error: No category or search query provided.
      </p>
    );
  }

  // ✅ Ensure data is treated as ProductListingResponse
  const productData: ProductListingResponse | null = !Array.isArray(data)
    ? (data as ProductListingResponse)
    : null;

  console.log("API Response:", productData);
  console.log("Variations:", productData?.variations);
  console.log("Specifications:", productData?.specifications);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-10">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : categoryName
          ? `Shop ${categoryName}`
          : "Shop Products"}
      </h1>

      <div className="flex flex-col lg:flex-row my-10 gap-6">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4">
          <FilterSection
            specifications={productData?.specifications || {}}
            onFiltersChange={handleFilterChange}
          />
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-3/4">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.toString()}</p>
          ) : productData?.variations?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {productData.variations.map((variation: ProductVariation) => (
                <MobilePhoneCard
                  key={variation.id}
                  product={{
                    id: variation.id,
                    product_slug: categorySlug,
                    full_name: `${variation.name}`,
                    name: variation.name,
                    price: variation.price,
                    discounted_price: variation.discounted_price,
                    inventory_quantity: variation.inventory_quantity,
                    condition: variation.condition,
                    variation_specifications:
                      variation.variation_specifications ?? [],
                    images: variation.images ?? [],
                    reviews: variation.reviews ?? [],
                    free_delivery: variation.free_delivery ?? false,
                    deals: variation.deals ?? [],
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </div>

      {/* ✅ Move Floating Filter here, using specifications directly */}
      <FloatingFilter
        specifications={productData?.specifications || {}}
        onFiltersChange={handleFilterChange}
      />
    </div>
  );
};

export default ProductsWrapper;
