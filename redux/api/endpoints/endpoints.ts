/**
 * API Endpoints
 *
 * This file contains all API endpoint URLs for Authentication, Dashboard,
 * Patients, Appointments, and Examinations. Each section is modularized
 * for better maintainability and scalability.
 *
 */

/////////////////////////
// Authentication
/////////////////////////

export const loginUrl = "accounts/auth/jwt/create/";
export const fetchUserUrl = "accounts/auth/user/";
export const logoutUrl = "accounts/auth/logout/";
export const registerUrl = "accounts/auth/users/";
export const resetPasswordRequestUrl = "accounts/auth/users/reset_password/";
export const passwordResetConfirmUrl =
  "accounts/auth/users/reset_password_confirm/";
export const changePasswordUrl = "accounts/auth/users/set_password/";
export const resendActivationUrl = "accounts/auth/users/resend_activation/";
export const verifyEmailUrl = "accounts/auth/users/activation/";
export const tokenRefreshUrl = "accounts/auth/jwt/refresh/";

/////////////////////////
// Products
/////////////////////////

export const fetchactiveProductCategoriesUrl =
  "products/categories/active-product-categories/";
export const fetchdDailyDealsUrl = "products/daily-deals/";
export const fetchdNewArrivalsUrl = "products/new-arrivals/";
export const featuredProductsUrl = "products/featured-products/";
export const fetchIphonesUrl = "products/product-category/iphones/";
export const productsByCategoryUrl = (categorySlug: string) =>
  `products/category/${categorySlug}/`;
export const productSearchUrl = "products/search/";
export const sustainableProductsUrl = "products/sustainable-products/";
export const fetchSingleProductUrl = (productId: string) =>
  `products/product/${productId}/`;
export const categorySearchUrl = (categorySlug: string) =>
  `products/${categorySlug}/`;
export const categoryAndFilterUrl = (categorySlug: string) =>
  `products/category/${categorySlug}/`;
