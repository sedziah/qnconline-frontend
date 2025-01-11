/**
 * Store Configuration
 *
 * Configures the Redux store with authentication, patient management, consultation, and other modules using RTK Query and persistence.
 */

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { authApi } from "../api/features/authApi"; // Authentication API slice
import authReducer from "../slices/authSlice"; // Authentication state slice

// Persistence configuration for the auth slice
const persistConfig = {
  key: "auth", // Key to store auth state in localStorage
  storage, // Use LocalStorage for persisting state
  whitelist: ["user", "isAuthenticated"], // Persist 'user' and 'isAuthenticated' fields
};

// Wrap the auth reducer with persistence
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Store configuration
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted authentication state
    [authApi.reducerPath]: authApi.reducer, // RTK Query reducer for authentication API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check due to redux-persist usage
    }).concat(authApi.middleware), // Include RTK Query middleware
});

// Create the persistor to persist the store
export const persistor = persistStore(store);

// Define RootState and AppDispatch types for type safety in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
