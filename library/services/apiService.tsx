import axios from 'axios';
import { Product, ProductCategory, ProductListingResponse, FilterParams } from '../types';

const API_BASE_URL = "https://api.qnconline.com";


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper function to build query parameters for filters
const buildFilterParams = (filters: FilterParams): string => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      value.forEach((val) => params.append(key, val.toString()));
    } else {
      params.append(key, value.toString());
    }
  }

  return params.toString();
};


export const apiService = {
  getProductCategories: async (): Promise<ProductCategory[]> => {
    try {
      const response = await api.get<ProductCategory[]>('/products/categories/active-product-categories/');
      return response.data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      throw error;
    }
  },
  getDailyDeals: async (): Promise<Product[]> => {
    try {
      const response = await api.get<Product[]>('/products/daily-deals');
      return response.data;
    } catch (error) {
      console.error("Error fetching daily deals:", error);
      throw error;
    }
  },


  // API function to fetch products by category and filter based on specifications
  getProductsByCategory: async (categorySlug: string, filters: Record<string, string[]>): Promise<ProductListingResponse> => {
    const params = new URLSearchParams();

    // Add filters to the URL search params
    Object.keys(filters).forEach(filterKey => {
      filters[filterKey].forEach(value => {
        params.append(filterKey, value);  // Append multiple values for each filter
      });
    });

    try {
      const response = await api.get<ProductListingResponse>(`/products/category/${categorySlug}/?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  },

  // New subscribe function
  subscribe: async (email: string): Promise<void> => {
    try {
      const response = await api.post('/accounts/subscribe/', { email });
      console.log("Subscription successful:", response.data);
    } catch (error) {
      console.error("Error subscribing:", error);
      throw error;
    }
  },
  
};