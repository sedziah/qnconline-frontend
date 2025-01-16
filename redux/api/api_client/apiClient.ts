/**
 * apiClient.js
 *
 * Base configuration for API interactions using RTK Query.
 * This handles the base URL, credentials, and headers for all API calls.
 */

import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { baseURL } from "../base_url/baseurl";
import { resetAuth, setUser } from "../../slices/authSlice";

// Define a custom base query with token refresh logic
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Define the base query
  const baseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include", // Ensures cookies (HTTP-only tokens) are sent
    prepareHeaders: (headers) => {
      // Add CSRF token to headers
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1];
      if (csrfToken) {
        headers.set("X-CSRFToken", csrfToken);
      }
      return headers;
    },
  });

  // Execute the initial query
  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 Unauthorized errors by attempting to refresh the token
  if (result?.error?.status === 401) {
    console.warn("Access token expired. Attempting refresh...");

    // Attempt to refresh the token
    const refreshResult = await baseQuery(
      {
        url: "/accounts/auth/jwt/refresh/", // Adjust this URL if needed
        method: "POST",
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      console.log("Token refreshed successfully.");

      // Retry the original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.error("Token refresh failed. Logging out user.");

      // Dispatch logout action if token refresh fails
      api.dispatch(resetAuth());
    }
  }

  return result;
};

// Create the API client
export const apiClient = createApi({
  reducerPath: "apiClient",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}), // Endpoints will be injected by features
});

export default apiClient;
