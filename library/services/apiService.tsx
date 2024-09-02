const API_BASE_URL = "https://api.qnconline.com";

export interface ProductCategory {
  id: string;  
  name: string;
  slug: string;
}


export const apiService = {
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

      const data: ProductCategory[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      throw error;
    }
  },
};

apiService.getProductCategories().then((categories) => {
}).catch((error) => {
  console.error("Error:", error);
});
