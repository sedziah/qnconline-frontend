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

  // API function to fetch product categories by slug
  getProductCategories: async (): Promise<ProductCategory[]> => {
    try {
      const response = await api.get<ProductCategory[]>('/products/categories/active-product-categories/');
      return response.data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      throw error;
    }
  },

  // API function to fetch daily deals
  getDailyDeals: async (): Promise<Product[]> => {
    try {
      const response = await api.get<Product[]>('/products/daily-deals');
      return response.data;
    } catch (error) {
      console.error("Error fetching daily deals:", error);
      throw error;
    }
  },


  // Updated API function to fetch products by category slug
  getProductsByCategory: async (
    categorySlug: string,
    filters: { [key: string]: string[] } // Accept dynamic filters
  ): Promise<any> => {
    // Construct query parameters for filters
    const params = new URLSearchParams();

    // Add filters to query parameters
    Object.keys(filters).forEach((filterKey: string) => {
      const filterValues: string[] = filters[filterKey];
      filterValues.forEach((filterValue: string) => {
        params.append(filterKey, filterValue); // Add each filter value to the query string
      });
    });

    try {
      // Log the constructed query string for debugging
      console.log('Constructed Query Params:', params.toString());

      // Make the GET request to the category products endpoint with filters
      const response = await axios.get<any>(
        `https://api.qnconline.com/products/category/${categorySlug}/?${params.toString()}`
      );

      // Log the API response for debugging
      console.log('API Response:', response.data);

      return response.data; // Return the response data
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error; // Throw error to handle it properly in calling code
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

  getSustainableProducts: async () => {
    try {
      const response = await api.get('/products/sustainable-products/');
      return response.data;
    } catch (error) {
      console.error("Error fetching sustainable products:", error);
      throw error;
    }
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    try {
      const response = await api.get<Product[]>(`/products/search/?q=${encodeURIComponent(query)}`);
      return response.data; // Return the search results
    } catch (error) {
      console.error("Error searching for products:", error);
      throw error; // Throw error to handle it properly in calling code
    }
  },

    // Login function
    login: async (email: string, password: string): Promise<any> => {
      try {
        const response = await api.post('/accounts/login/', { email, password }, { withCredentials: true });
        return response.data; // Return user data
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
  
    // Logout function
    logout: async () => {
      try {
        await api.post('/accounts/logout/', {}, { withCredentials: true });
      } catch (error) {
        console.error("Logout error:", error);
        throw error;
      }
    },
  
    // Check if the user is authenticated
    isAuthenticated: async () => {
      try {
        const response = await api.get('/accounts/status/', { withCredentials: true });
        return response.data.isAuthenticated; // Assumes the API returns an isAuthenticated flag
      } catch (error) {
        console.error("Error checking authentication status:", error);
        return false; // Default to not authenticated on error
      }
    },
  
};