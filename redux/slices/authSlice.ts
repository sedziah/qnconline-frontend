/**
 * Auth Slice
 *
 * Manages authentication state, including user data, loading state, and error handling.
 * Integrates with Redux Persist to enable persistent authentication.
 * Also works with `authApi` to handle login and logout processes via RTK Query.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../api/features/authApi"; // Import the correct RTK Query slice
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default: localStorage

// Define the User type
interface User {
  id: string;
  name: string;
  email: string;
  // Add more fields based on your API response
}

// Define the state type
interface AuthState {
  user: User | null; // The logged-in user's data
  loading: boolean; // Indicates if an authentication action is in progress
  error: string | null; // Stores error messages related to authentication
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Manually set user data (useful for initial session restoration)
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    // Reset authentication state (used during logout)
    resetAuth: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle successful login
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<{ user: User }>) => {
        console.log(
          "authSlice: matchFulfilled triggered, payload:",
          action.payload.user
        ); // Debugging
        state.user = action.payload.user; // Update user state
        state.loading = false;
        state.error = null;
      }
    );
    // Handle successful logout
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null; // Clear user state
      state.error = null;
    });
    // Handle login pending state
    builder.addMatcher(authApi.endpoints.login.matchPending, (state) => {
      state.loading = true; // Indicate loading during login
    });
    // Handle login errors
    builder.addMatcher(
      authApi.endpoints.login.matchRejected,
      (state, action: any) => {
        state.error = action.error?.data?.message || "Login failed"; // Store error message
        state.loading = false;
      }
    );
    // Handle logout errors
    builder.addMatcher(
      authApi.endpoints.logout.matchRejected,
      (state, action: any) => {
        state.error = action.payload || "Logout failed"; // Store error message for logout
        state.loading = false;
      }
    );
  },
});

// Export the actions for use in components
export const { setUser, resetAuth } = authSlice.actions;

// Redux Persist configuration
const persistConfig = {
  key: "auth", // The key under which the auth slice is stored in local storage
  storage, // Storage engine
  whitelist: ["user"], // Only persist the user state
};

// Wrap the reducer with persistReducer
export default persistReducer(persistConfig, authSlice.reducer);
