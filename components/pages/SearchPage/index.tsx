// // Updated SearchPage.tsx using Redux and RTK Query

// "use client";
// import React from "react";
// import { useSearchParams } from "next/navigation";
// import { useSearchProductsQuery } from "../../../redux/api/features/productsApi";
// import { useSelector, useDispatch } from "react-redux";
// import { updateFilters } from "../../../redux/slices/filterSlice";
// import { RootState } from "../../../redux/store/store";
// import NewProductCard from "../../../components/Cards/NewProductCard";
// import FilterSection from "../../components/Filters/NewFilter";
// import FloatingFilter from "../components/FloatingFilter";

// const SearchPage = () => {
//   const searchParams = useSearchParams().get("q") ?? "";
//   const filters = useSelector((state: RootState) => state.filter.filters);
//   const dispatch = useDispatch();

//   // Fetch products using Redux RTK Query
//   const { data, error, isLoading } = useSearchProductsQuery(searchParams);
//   const products = data ?? [];

//   const handleFilterChange = (newFilters: Record<string, string[]>) => {
//     dispatch(updateFilters(newFilters));
//   };

//   return (
//     <div className="px-4 w-full max-w-6xl mx-auto">
//       <header className="mt-10 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Search Results for: {searchParams}</h1>
//       </header>

//       <div className="flex flex-col lg:flex-row my-10 gap-6">
//         <aside className="lg:w-1/4">
//           <FilterSection
//             specifications={{}}
//             onFiltersChange={handleFilterChange}
//           />
//         </aside>

//         <main className="lg:w-3/4">
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p className="text-red-500">Error loading products.</p>
//           ) : products.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {products.map((product) => (
//                 <NewProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           ) : (
//             <p>No products found.</p>
//           )}
//         </main>
//       </div>

//       <FloatingFilter />
//     </div>
//   );
// };

// export default SearchPage;
