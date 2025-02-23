import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage for persistence
import { productsApi } from "../api/features/productsApi";
import {
  ActiveCategory,
  MobileCardData,
  Product,
  ProductVariation,
  ProductListingResponse
} from "../../library/types/index";

// Define the state structure
interface ProductState {
  activeCategories: ActiveCategory[];
  dailyDeals: MobileCardData[]; // Correct type for daily deals
  newArrivals: MobileCardData[];
  iPhones: Product[];
  featuredProducts: Product[];
  productsByCategory: Product[];
  productsByCategoryAndFilter: ProductVariation[];
  specifications: Record<string, string[]>;
  singleProduct: Product | null;
  sustainableProducts: Product[];
  searchResults: Product[];
  isLoading: boolean;
  error: string | null;
}

// Initial state for the product slice
const initialState: ProductState = {
  activeCategories: [],
  dailyDeals: [], // Initialize dailyDeals with correct structure
  newArrivals: [],
  iPhones: [],
  featuredProducts: [],
  productsByCategory: [],
  productsByCategoryAndFilter: [],
  specifications: {}, // ✅ Correct initialization
  singleProduct: null,
  sustainableProducts: [],
  searchResults: [],
  isLoading: false,
  error: null,
};


// Define the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch active product categories
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchFulfilled,
      (state, action: PayloadAction<ActiveCategory[]>) => {
        state.activeCategories = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch active categories";
        state.isLoading = false;
      }
    );

    // Fetch daily deals
    builder.addMatcher(
      productsApi.endpoints.fetchDailyDeals.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchDailyDeals.matchFulfilled,
      (state, action: PayloadAction<MobileCardData[]>) => {
        state.dailyDeals = action.payload; // Update dailyDeals with correct data
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchDailyDeals.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch daily deals products";
        state.isLoading = false;
      }
    );

    // Fetch New Arrivals
    builder.addMatcher(
      productsApi.endpoints.fetchNewArrivals.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchNewArrivals.matchFulfilled,
      (state, action: PayloadAction<MobileCardData[]>) => {
        state.newArrivals = action.payload; // Update dailyDeals with correct data
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchNewArrivals.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch daily deals products";
        state.isLoading = false;
      }
    );

    // Fetch featured products
    builder.addMatcher(
      productsApi.endpoints.fetchFeaturedProducts.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchFeaturedProducts.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.featuredProducts = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchFeaturedProducts.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch featured products";
        state.isLoading = false;
      }
    );

    // Fetch iPhones
    builder.addMatcher(
      productsApi.endpoints.fetchIPhones.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchIPhones.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        console.log("API Response:", action.payload); // Log the API response
        state.iPhones = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchIPhones.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch iPhone products";
        state.isLoading = false;
      }
    );

    // Fetch products by category
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategory.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategory.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.productsByCategory = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategory.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch products by category";
        state.isLoading = false;
      }
    );

    // Fetch a single product
    builder.addMatcher(
      productsApi.endpoints.fetchProductById.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductById.matchFulfilled,
      (state, action: PayloadAction<Product>) => {
        state.singleProduct = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductById.matchRejected,
      (state, action) => {
        state.error = action.error?.message || "Failed to fetch product by ID";
        state.isLoading = false;
      }
    );

    // Search products
    builder.addMatcher(
      productsApi.endpoints.searchProducts.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.searchProducts.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.searchProducts.matchRejected,
      (state, action) => {
        state.error = action.error?.message || "Failed to search products";
        state.isLoading = false;
      }
    );

    // Fetch sustainable products
    builder.addMatcher(
      productsApi.endpoints.fetchSustainableProducts.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchSustainableProducts.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.sustainableProducts = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchSustainableProducts.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message || "Failed to fetch sustainable products";
        state.isLoading = false;
      }
    );

    // Handle fetchProductsByCategoryAndFilter
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategoryAndFilter.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategoryAndFilter.matchFulfilled,
      (state, action: PayloadAction<ProductListingResponse>) => {
        state.productsByCategoryAndFilter = action.payload.variations; // ✅ Store ProductVariation[]
        state.specifications = action.payload.specifications; // ✅ Store specifications separately
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProductsByCategoryAndFilter.matchRejected,
      (state, action) => {
        state.error =
          action.error?.message ||
          "Failed to fetch products by category and filter.";
        state.isLoading = false;
      }
    );
  },
});

// Configure persistence for desired fields
const persistConfig = {
  key: "product",
  storage,
  whitelist: ["activeCategories", "dailyDeals", "featuredProducts"], // Persist selected fields
};

// Export the persisted reducer
export default persistReducer(persistConfig, productSlice.reducer);
