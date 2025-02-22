"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFetchProductsByCategoryAndFilterQuery } from "@/redux/api/features/productsApi";
import FilterSection from "../components/Filters/Filters";
import MobilePhoneCard from "./Cards/MobilePhoneCard";
import { ProductsApiResponse, ProductVariation } from "../library/types/index";

type ProductsWrapperProps = {
  searchQuery?: string; // ✅ Accept searchQuery as a prop
  categorySlug?: string; // ✅ Add this
  categoryName?: string; // ✅ Add this
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ searchQuery }) => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("s") || ""; // Get slug
  const categoryName = searchParams.get("name") || ""; // Get category name

  const [filters, setFilters] = useState<Record<string, string[]>>({});

  // ✅ Fetch products using categorySlug, searchQuery, and selected filters
  const { data, error, isLoading } = useFetchProductsByCategoryAndFilterQuery({
    categorySlug,
    searchQuery,
    filters, // ✅ Pass filters to the API request
  }) as { data?: ProductsApiResponse; error?: Error; isLoading: boolean };

  // Log the data to the console
  console.log("Fetched Products:", data);

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
            specifications={data?.specifications || {}}
            onFiltersChange={handleFilterChange}
          />
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-3/4">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.toString()}</p>
          ) : (
            <>
              {/* ✅ Log variations here before rendering */}
              {console.log("Rendering Variations:", data?.variations)}

              {data?.variations?.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {data.variations.map((variation: ProductVariation, index) => (
                    <MobilePhoneCard
                      key={variation.id}
                      product={{
                        id: variation.id,
                        product_slug: categorySlug, // ✅ Use categorySlug from URL since product slug is gone
                        full_name: `${variation.name}`, // ✅ Combine name for clarity
                        name: variation.name,
                        price: variation.price,
                        discounted_price: variation.discounted_price,
                        inventory_quantity: variation.inventory_quantity,
                        condition: variation.condition,
                        variation_specifications:
                          variation.variation_specifications ?? [],
                        images: variation.images ?? [],
                        reviews: variation.reviews ?? [],
                        deals: variation.deals ?? [],
                      }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center">No products found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsWrapper;