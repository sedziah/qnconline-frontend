// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { useFetchProductsByCategoryAndFilterQuery } from "@/redux/api/features/productsApi";
// import FilterSection from "./Filters/NewFilter";
// import MobilePhoneCard from "./Cards/MobilePhoneCard";

// type ProductsWrapperProps = {
//   searchQuery?: string; // ✅ Accept searchQuery as a prop
// };

// const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ searchQuery }) => {
//   const searchParams = useSearchParams();
//   const categorySlug = searchParams.get("s") || ""; // Get slug
//   const categoryName = searchParams.get("name") || ""; // Get category name

//   const [filters, setFilters] = useState<Record<string, string[]>>({});

//   // ✅ Fetch products using the search query if available
//   const { data, error, isLoading } = useFetchProductsByCategoryAndFilterQuery({
//     categorySlug: categorySlug,
//     searchQuery: searchQuery, // Pass search query for filtering products
//   });

//   // Log the data to the console
//   console.log("Fetched Products:", data);

//   const handleFilterChange = (newFilters: Record<string, string[]>) => {
//     setFilters(newFilters);
//   };

//   if (!categorySlug && !searchQuery) {
//     return (
//       <p className="text-center text-red-500">
//         Error: No category or search query provided.
//       </p>
//     );
//   }

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold text-center my-10">
//         {searchQuery
//           ? `Search Results for "${searchQuery}"`
//           : categoryName
//           ? `Shop ${categoryName}`
//           : "Shop Products"}
//       </h1>

//       <div className="flex flex-col lg:flex-row my-10 gap-6">
//         {/* Filters Section */}
//         <div className="w-full lg:w-1/4">
//           <FilterSection
//             specifications={data?.product_specifications || {}}
//             onFiltersChange={handleFilterChange}
//           />
//         </div>

//         {/* Products Section */}
//         <div className="w-full lg:w-3/4">
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error: {error.toString()}</p>
//           ) : (
//             <>
//               {/* ✅ Log variations here before rendering */}
//               {console.log("Rendering Variations:", data?.variations)}

//               {data?.variations?.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//                   {data.variations.map((product, index) => {
//                     // ✅ Log each individual product object
//                     console.log(`Product ${index + 1}:`, product);

//                     return (
//                       <MobilePhoneCard key={product.id} product={product} />
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <p>No products found.</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsWrapper;
