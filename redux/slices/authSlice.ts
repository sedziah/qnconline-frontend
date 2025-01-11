/**
 * Auth Slice
 *
 * Manages authentication state, including user data, loading state, and error handling.
 * Integrates with Redux Persist to enable persistent authentication.
 * Also works with `authApi` to handle login, logout, and user-fetch processes via RTK Query.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../api/features/authApi"; // Import the RTK Query slice
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage for persistence

// User data structure
interface User {
  id: string;
  name: string;
  email: string;
}

// State structure for authentication
interface AuthState {
  user: User | null; // Current user data
  loading: boolean; // Tracks if an authentication action is in progress
  error: string | null; // Error messages related to authentication
  isAuthenticated: boolean; // Tracks whether the user is authenticated
}

// Initial state for the auth slice
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false, // Initialize as not authenticated
};

// Auth slice definition
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to manually set the user data
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true; // Mark as authenticated when user is set
    },
    // Action to reset the authentication state (e.g., on logout)
    resetAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false; // Mark as not authenticated when user is cleared
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle successful login
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user; // Update the user state
        state.isAuthenticated = true; // Mark as authenticated
        state.loading = false; // Clear loading state
        state.error = null; // Clear errors
      })
      // Handle user fetch success
      .addMatcher(authApi.endpoints.fetchUser.matchFulfilled, (state, action) => {
        state.user = action.payload; // Set user data from fetchUser response
        state.isAuthenticated = true; // Mark as authenticated
        state.loading = false; // Clear loading state
        state.error = null; // Clear errors
      })
      // Handle user fetch failure
      .addMatcher(authApi.endpoints.fetchUser.matchRejected, (state) => {
        state.user = null; // Clear user data
        state.isAuthenticated = false; // Mark as not authenticated
        state.loading = false; // Clear loading state
        state.error = "Failed to fetch user data"; // Set an error message
      })
      // Handle successful logout
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null; // Clear user state
        state.isAuthenticated = false; // Clear authentication state
        state.error = null; // Clear errors
      })
      // Handle loading state during login
      .addMatcher(authApi.endpoints.login.matchPending, (state) => {
        state.loading = true; // Set loading state
      })
      // Handle login errors
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action: any) => {
        state.error = action.error?.data?.message || "Login failed"; // Set error message
        state.loading = false; // Clear loading state
      })
      // Handle token refresh (if needed)
      .addMatcher(authApi.endpoints.tokenRefresh.matchFulfilled, (state) => {
        state.isAuthenticated = true; // Ensure the user remains authenticated
        state.error = null; // Clear any previous error
      })
      // Handle token refresh errors
      .addMatcher(authApi.endpoints.tokenRefresh.matchRejected, (state) => {
        state.isAuthenticated = false; // Mark as not authenticated
        state.user = null; // Clear user data
        state.error = "Session expired. Please log in again."; // Set error message
      });
  },
});

// Export actions to use in components
export const { setUser, resetAuth } = authSlice.actions;

// Redux Persist configuration for the auth slice
const persistConfig = {
  key: "auth", // Key under which the auth slice is stored in LocalStorage
  storage, // Storage engine
  whitelist: ["user", "isAuthenticated"], // Persist user and authentication state
};

// Wrap the reducer with Redux Persist for persistence
export default persistReducer(persistConfig, authSlice.reducer);
