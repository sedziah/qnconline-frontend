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
  storage,
  whitelist: ["user"], // Persist only the 'user' field in the auth state
};

// Apply persistence to the auth reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted local state for authentication
    [authApi.reducerPath]: authApi.reducer, // RTK Query reducer for authentication API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for Redux Persist
    }).concat(authApi.middleware), // RTK Query middleware for authentication API
});

// Export persisted store
export const persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
