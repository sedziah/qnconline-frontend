// Common Types
type UUID = string
type IMAGE = string
type DATETIME = string
type EMAIL = string

export interface Pagination {
  current_page: number
  total_pages: number
  totalProducts: number
  pageSize: number
}

// Category Table
export interface Category {
  id: UUID // Primary Key
  name: string
  parent?: UUID // Foreign Key to Category (optional)
  slug: string
  metaTitle?: string
  metaDesc?: string
  icon?: IMAGE
  isActive: boolean
  isVisible: boolean
  createdAt: DATETIME
  updatedAt: DATETIME
}

export interface ActiveCategory {
  id: string;   // UUID
  name: string; // Category name
  slug: string; // Unique slug for the active category
}

// CategoryImage Table
export interface CategoryImage {
  id: UUID // Primary Key
  categoryId: UUID // Foreign Key to Category
  image: IMAGE
  imageType: string
  altText?: string
}

// Brand Table
export interface Brand {
  id: UUID // Primary Key
  name: string
  description?: string
  slug: string
  websiteUrl?: string
  isActive: boolean
  isVisible: boolean
  createdAt: DATETIME
  updatedAt: DATETIME
}

// BrandImage Table
export interface BrandImage {
  id: UUID // Primary Key
  brandId: UUID // Foreign Key to Brand
  image: IMAGE
  altText?: string
}

// ProductImage Table
export interface ProductImage {
  id: UUID // Primary Key
  productId: UUID // Foreign Key to Product
  isMainImage: boolean
  image: string
  altText?: string
  createdAt: DATETIME
  updatedAt: DATETIME
}

// Condition Table
export interface Condition {
  id: UUID // Primary Key
  condition: string
  description?: string
}

// Catalogue Table
export interface Catalogue {
  id: UUID // Primary Key
  categoryId: UUID // Foreign Key to Category
  brandId: UUID // Foreign Key to Brand
  name: string
  description?: string
  slug: string
  createdAt: DATETIME
  updatedAt: DATETIME
}

// Product Table
export interface Product {
  id: UUID // Primary Key
  name: string
  slug: string
  brand:Brand
  category: ProductCategory
  base_price: string | number
  description?: string
  currency: string
  priceAdjustment: string
  price: number
  inventoryQuantity: number
  condition: string
  images: ProductImage[]
  reviews: any[]
  specifications: ProductSpecification[]
  deals: Deals[]
  catalogueId?: UUID // Optional field
  actualPrice?: number // Optional custom fields
  isFeatured?: boolean
  freeDelivery?: boolean
  pagination: Pagination
  variations: any[]
  
}

// Feature Table
export interface Feature {
  id: UUID // Primary Key
  name: string
  description?: string
}

// Specification Table (for defining the types of specifications like "Color", "Storage")
export interface Specification {
  id: UUID // Primary Key
  name: string
}

// ProductSpecification Interface (holds product-specific specification values)
export interface ProductSpecification {
  specificationName: string
  value: string
}

// Deals Table
export interface Deals {
  id: UUID // Primary Key
  deal: string
  description?: string
  discount: number
  startDate: DATETIME
  endDate: DATETIME
  isActive: boolean
}

// DailyDeals Interface (for the provided response format)
export interface DailyDeal {
  id: UUID; // Primary Key
  full_name: string; // Concatenated product and variation name
  price: number; // Price of the product variation
  product_slug: string; // Slug from the Product model
  condition: string; // Condition of the product variation (e.g., "new", "used")
  inventory_quantity: number; // Available stock
  image_url: IMAGE; // URL of the primary image for the product variation
  discount: number;
  reviews: string;
}

export interface DailyDeal {
  id: UUID; // Primary Key
  full_name: string; // Concatenated product and variation name
  price: number; // Price of the product variation
  product_slug: string; // Slug from the Product model
  condition: string; // Condition of the product variation (e.g., "new", "used")
  inventory_quantity: number; // Available stock
  image_url: IMAGE; // URL of the primary image for the product variation
  discount: number;
  reviews: string;
}

export interface MobileCardData {
  id: string;
  product_slug: string;
  full_name: string;
  name: string;
  price: number | string;
  discounted_price?: number | string;
  inventory_quantity?: number;
  condition: string;
  image_url?: string; // ✅ Add this line for direct image URL
  variation_specifications?: { specification_name: string; value: string }[];
  images?: { image: string; alt_text?: string; image_type?: string }[];
  reviews?: { rating: number }[];
  discount?: number;
  free_delivery?: boolean;
  deals?: { id: string; description: string }[];
}



// Supplier Table
export interface Supplier {
  id: UUID // Primary Key
  name: string
  website?: string
  websiteUrl?: string
  email?: EMAIL
  phone?: string
}

// ProductCategory Interface (Used for product categories)
export interface ProductCategory {
  id: UUID
  name: string
  slug: string
}

// ProductFeature Table
export interface ProductFeature {
  id: UUID // Primary Key
  productId: UUID // Foreign Key to Product
  featureId: UUID // Foreign Key to Feature
  value: string
}

// ProductDeals Table
export interface ProductDeals {
  id: UUID // Primary Key
  productId: UUID // Foreign Key to Product
  dealsId: UUID // Foreign Key to Deals
  description?: string
}

// ProductSupplier Table
export interface ProductSupplier {
  id: UUID // Primary Key
  productId: UUID // Foreign Key to Product
  supplierId: UUID // Foreign Key to Supplier
}

// CatalogueSpecification Table (For specifications assigned to a catalogue)
export interface CatalogueSpecification {
  id: UUID
  catalogueId: UUID
  specificationId: UUID
  value: string
}

export interface ProductDetailsResponse {
  id: string;
  product_name: string; // `product_name` from the response
  slug: string;
  brand: string;
  base_price: string;
  currency: string;
  description: string;
  images: Array<{ url: string }>;
  specifications: Array<{ name: string; value: string }>;
  // Add any other fields that the API returns
}

// Define the type for Product Variation
export interface ProductVariation {
  id: string;
  product: {
    id: string;
    slug: string;
    name: string;
    base_price?: string;
    currency?: string;
  };
  name: string;
  price: string;
  discounted_price: string;
  inventory_quantity?: number;
  condition: string;
  variation_specifications?: { specification_name: string; value: string }[];
  images?: { image: string; alt_text?: string; image_type?: string }[];
  reviews?: { rating: number }[];
  free_delivery: boolean;
  deals?: { id: string; description: string }[];
}

// Define the type for API Response
export interface ProductsApiResponse {
  variations: ProductVariation[];
  specifications: Record<string, string[]>;
  pagination: {
    current_page: number;
    total_pages: number;
    total_products: number;
    page_size: number;
  };
}

// ProductCondition Table
export interface ProductCondition {
  id: UUID // Primary Key
  productId: UUID // Foreign Key to Product
  conditionId: UUID // Foreign Key to Condition
  description?: string
}

// Dynamic Filtering Specifications (This structure handles dynamic filters)
export interface SpecificationOptions {
  [specificationName: string]: string[] // e.g., "Color": ["Graphite", "Gold"]
}

// API response for the product listing with dynamic specifications
export interface ProductListingResponse {
  variations: Product[]; // ✅ Add this line
  specifications: Record<string, string[]> // Adjust this if needed
  pagination: Pagination
  // Add other fields here if necessary (pagination, etc.)
}

// Interface to handle filters (passed to API calls)
export interface FilterParams {
  [key: string]: string // This handles dynamic filters like color, storage, etc.
}

export enum DashboardFilter {
  "profile",
  "orders",
  "favorites",
  "trade-ins",
  "credit"
}

type Model = {
  model: string;
  storage: string[];
};
