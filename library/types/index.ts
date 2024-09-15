// Common Types
type UUID = string
type IMAGE = string
type DATETIME = string
type EMAIL = string

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

// Feature Table
export interface Feature {
  id: UUID // Primary Key
  name: string
  description?: string
}

// Specification Table
export interface Specification {
  id: UUID // Primary Key
  name: string
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

// ProdctCategory Table
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
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
