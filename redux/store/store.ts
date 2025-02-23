/**
 * Store Configuration
 *
 * Configures the Redux store with authentication, patient management, consultation, and other modules using RTK Query and persistence.
 */

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { authApi } from "../api/features/authApi"; // Authentication API slice
import { newsletterApi } from "../api/features/newsletterApi";
import newsletterReducer from "../slices/newsletterSlice";
import authReducer from "../slices/authSlice"; // Authentication state slice
import productReducer from "../slices/productSlice"; // Product state slice
import filterReducer from  "../slices/filterSlice"
import cartReducer  from  "../slices/cartSlice"
import apiClient from "../api/api_client/apiClient";

// Persistence configuration for the auth slice
const authPersistConfig = {
  key: "auth", // Key to store auth state in localStorage
  storage, // Use LocalStorage for persisting state
  whitelist: ["user", "isAuthenticated"], // Persist 'user' and 'isAuthenticated' fields
};

// Persistence configuration for the product slice
const productPersistConfig = {
  key: "product", // Key to store product state in localStorage
  storage, // Use LocalStorage for persisting state
  whitelist: ["activeCategories"], // Persist only 'activeCategories'
};

// Wrap the reducers with persistence
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);

// Store configuration
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted authentication state
    product: persistedProductReducer, // Persisted product state
    newsletter: newsletterReducer, // Newsletter state slice
    filter: filterReducer,
    cart: cartReducer,

    [apiClient.reducerPath]: apiClient.reducer,// RTK Query reducer for authentication API

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check due to redux-persist usage
    }).concat(authApi.middleware, newsletterApi.middleware), // Include RTK Query middleware
});

// Create the persistor to persist the store
export const persistor = persistStore(store);

// Define RootState and AppDispatch types for type safety in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
