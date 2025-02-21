// redux/api/apiClient.ts

import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { baseURL } from "../base_url/baseurl";
import { resetAuth } from "../../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || baseURL,
  credentials: "include",
  prepareHeaders: (headers) => {
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

// Create the RTK Query API Client
const apiClient = createApi({
  reducerPath: "apiClient",
  baseQuery,
  tagTypes: ["Products", "Users", "Newsletter"], // Add common tag types here
  endpoints: () => ({}), // Endpoints will be injected later
});

export default apiClient;
