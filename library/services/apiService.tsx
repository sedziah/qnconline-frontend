import axios from 'axios';

const API_BASE_URL = "https://api.qnconline.com";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  base_price: string | number;
  currency: string;
  price_adjustment: string;
  inventory_quantity: number;
  condition: string;
  images: any[];
  reviews: any[];
  specifications: { specification_name: string; value: string }[];
  deals: any[];
  catalogueId?: string; // Optional field
  actualPrice?: number; // Optional custom fields
  isFeatured?: boolean;
  freeDelivery?: boolean;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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