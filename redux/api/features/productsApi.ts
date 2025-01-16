import { apiClient } from "../api_client/apiClient";
import {
  fetchactiveProductCategoriesUrl,
  fetchdDailyDealsUrl,
  featuredProductsUrl,
  productsByCategoryUrl,
  productSearchUrl,
  sustainableProductsUrl,
  fetchSingleProductUrl,
  categorySearchUrl,
} from "../endpoints/endpoints"; // Import your endpoint constants
import { Product, DailyDeal, Category, ActiveCategory } from "../../../library/types/index";

export const productsApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch active product categories
    fetchActiveProductCategories: builder.query<ActiveCategory[], void>({
      query: () => ({
        url: fetchactiveProductCategoriesUrl,
        method: "GET",
      }),
    }),

    // Fetch daily deals
    fetchDailyDeals: builder.query<DailyDeal[], void>({
      query: () => ({
        url: fetchdDailyDealsUrl,
        method: "GET",
      }),
    }),

    // Fetch featured products
    fetchFeaturedProducts: builder.query<Product[], void>({
      query: () => ({
        url: featuredProductsUrl,
        method: "GET",
      }),
    }),

    // Fetch products by category
    fetchProductsByCategory: builder.query<Product[], string>({
      query: (categorySlug) => ({
        url: productsByCategoryUrl(categorySlug),
        method: "GET",
      }),
    }),

    // Fetch a single product by ID
    fetchProductById: builder.query<Product, string>({
      query: (productId) => ({
        url: fetchSingleProductUrl(productId),
        method: "GET",
      }),
    }),

    // Search for products
    searchProducts: builder.query<Product[], string>({
      query: (searchQuery) => ({
        url: productSearchUrl,
        method: "GET",
        params: { q: searchQuery },
      }),
    }),

    // Fetch sustainable products
    fetchSustainableProducts: builder.query<Product[], void>({
      query: () => ({
        url: sustainableProductsUrl,
        method: "GET",
      }),
    }),

    // Search by category slug
    categorySearch: builder.query<Product[], string>({
      query: (categorySlug) => ({
        url: categorySearchUrl(categorySlug),
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false, // Ensures existing endpoints are not overridden
});

// Export hooks for the endpoints
export const {
  useFetchActiveProductCategoriesQuery,
  useFetchDailyDealsQuery,
  useFetchFeaturedProductsQuery,
  useFetchProductsByCategoryQuery,
  useFetchProductByIdQuery,
  useSearchProductsQuery,
  useFetchSustainableProductsQuery,
  useCategorySearchQuery,
} = productsApi;
