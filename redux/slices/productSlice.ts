import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage for persistence
import { productsApi } from "../api/features/productsApi";
import { ActiveCategory } from "../../library/types/index";

// Define the state structure
interface ProductState {
  activeCategories: ActiveCategory[];
  isLoading: boolean;
  error: string | null;
}

// Initial state for the product slice
const initialState: ProductState = {
  activeCategories: [],
  isLoading: false,
  error: null,
};

// Define the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchPending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    // Handle fulfilled state
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchFulfilled,
      (state, action: PayloadAction<ActiveCategory[]>) => {
        state.activeCategories = action.payload;
        state.isLoading = false;
      }
    );

    // Handle rejected state
    builder.addMatcher(
      productsApi.endpoints.fetchActiveProductCategories.matchRejected,
      (state, action) => {
        state.error = action.error?.message || "Failed to fetch active categories";
        state.isLoading = false;
      }
    );
  },
});

// Configure persistence for `activeCategories`
const persistConfig = {
  key: "product",
  storage,
  whitelist: ["activeCategories"], // Only persist activeCategories
};

// Export the persisted reducer
export default persistReducer(persistConfig, productSlice.reducer);
