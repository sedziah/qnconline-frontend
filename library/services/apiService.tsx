const API_BASE_URL = "https://api.qnconline.com";

// Define the interface for a single product category
export interface ProductCategory {
  id: string;   // UUID as a string
  name: string; // Name of the category
  slug: string; // Slug of the category
}

// API service object
export const apiService = {
  // Method to fetch product categories
  getProductCategories: async (): Promise<ProductCategory[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/product-categories/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product categories.");
      }

      // Parse the response as JSON and return it
      const data: ProductCategory[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      throw error;
    }
  },
};

// Example usage
// (You can call this method wherever you need to fetch the categories)
apiService.getProductCategories().then((categories) => {
  console.log("Fetched product categories:", categories);
}).catch((error) => {
  console.error("Error:", error);
});
