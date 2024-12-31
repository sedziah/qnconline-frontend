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

export const loginUrl = "accounts/login/";
export const logoutUrl = "accounts/logout/";
export const checkSessionUrl = "accounts/check-session/";
export const registerUrl = "accounts/register/";
export const verifyEmailUrl = "accounts/verify-email/:token/";
export const resendVerificationUrl = "accounts/resend-verification/";
export const resetPasswordRequestUrl = "accounts/reset-password-request/";
export const changePasswordUrl = "accounts/change-password/";
export const passwordResetConfirmUrl = "accounts/password-reset-confirm/:uidb64/:token/";
export const guestUserCreateUrl = "accounts/guest-user/";
export const subscribeEmailUrl = "accounts/subscribe/";
export const uploadDocumentsUrl = "accounts/upload-documents/";
export const tokenObtainPairUrl = "accounts/token/";
export const tokenRefreshUrl = "accounts/token/refresh/";


/////////////////////////
// Products
/////////////////////////

export const activeProductCategoriesUrl = "products/categories/active-product-categories/";
export const dailyDealsUrl = "products/daily-deals/";
export const featuredProductsUrl = "products/featured-products/";
export const productsByCategoryUrl = (categorySlug: string) => `products/category/${categorySlug}/`;
export const productSearchUrl = "products/search/";
export const sustainableProductsUrl = "products/sustainable-products/";
export const fetchSingleProductUrl = (productId: string) => `products/product/${productId}/`;
export const categorySearchUrl = (categorySlug: string) => `products/${categorySlug}/`;

