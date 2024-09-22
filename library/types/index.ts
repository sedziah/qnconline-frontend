// Common Types
type UUID = string
type IMAGE = string
type DATETIME = string
type EMAIL = string

export interface Pagination {
  currentPage: number
  totalPages: number
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
  basePrice: string | number
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
  products: Product[]
  specifications: Record<string, string[]> // Adjust this if needed
  pagination: Pagination
  // Add other fields here if necessary (pagination, etc.)
}

// Interface to handle filters (passed to API calls)
export interface FilterParams {
  [key: string]: string // This handles dynamic filters like color, storage, etc.
}

