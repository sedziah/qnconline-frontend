// "use client";
// import React, { useEffect, useState } from 'react';
// import Breadcrumb from '@/components/breadcrumb';
// import { CTAOne } from '@/components/CTAS/CTAOne';
// import CTATwo from '@/components/CTAS/CTATwo';
// import FloatingInfo from '@/components/Navbars/FloatingInfo';
// import RenderAppearanceControl from '@/components/sections/RenderAppearanceControl';
// import RenderBatteryControl from '@/components/sections/RenderBatteryControl';
// import RenderCarousel from '@/components/sections/RenderCarousel';
// import { RenderColorSelector } from '@/components/sections/RenderColorSelector';
// import RenderProductSummary from '@/components/sections/RenderProductSummary';
// import RenderReviews from '@/components/sections/RenderReviews';
// import RenderStorageControl from '@/components/sections/RenderStorageControl';
// import RenderTradeInPromo from '@/components/sections/RenderTradeInPromo';
// // import { apiService } from '@/library/services/apiService';

// interface ProductVariation {
//   id: string;
//   name: string;
//   sku: string;
//   // Include other fields if necessary for main_variation
// }

// interface ProductDetailsResponse {
//   main_variation: ProductVariation;
//   related_variations: Array<ProductVariation>; // Adjust the type based on your related variations structure
//   specifications: {
//     Color?: Array<string>;
//     Storage?: Array<string>;
//     Memory?: Array<string>;
//     // Add other specification categories as needed
//   };
// }

// interface ProductListingDetailProps {
//   slug: string;
// }

// const ProductListingDetail: React.FC<ProductListingDetailProps> = ({ slug }) => {
//   const [productDetails, setProductDetails] = useState<ProductDetailsResponse | null>(null);
//   const [mostWantedProducts, setMostWantedProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const breadcrumbItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Products', href: '/products' },
//     { label: productDetails?.main_variation.name || 'Loading...' },
//   ];

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       if (!slug) return;

//       try {
//         // Fetch product details using the slug
//         // const response = await apiService.getProductDetails(slug);

//         // Log the fetched product details for debugging
//         console.log('Fetched product details:', response);

//         // Ensure response structure matches ProductDetailsResponse
//         const productDetails: ProductDetailsResponse = {
//           main_variation: response.main_variation || { id: '', name: 'Unnamed Product', sku: '' },
//           related_variations: response.related_variations || [],
//           specifications: response.specifications || {},
//         };

//         setProductDetails(productDetails);
//       } catch (error) {
//         console.error('Failed to fetch product details:', error);
//       }
//     };

//     const fetchMostWantedProducts = async () => {
//       try {
//         const products = await apiService.getDailyDeals();
//         setMostWantedProducts(products);
//       } catch (err) {
//         console.error('Failed to fetch most wanted products', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//     fetchMostWantedProducts();
//   }, [slug]);

//   if (!productDetails) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div>
//       <FloatingInfo product={productDetails.main_variation} />

//       <Breadcrumb items={breadcrumbItems} />

//       <RenderProductSummary product={productDetails.main_variation} />

//       {/* <RenderAppearanceControl specifications={productDetails.specifications} />

//       <RenderBatteryControl />

//       <RenderStorageControl storageOptions={productDetails.specifications.Storage || []} />

//       <RenderColorSelector colorOptions={productDetails.specifications.Color || []} /> */}

//       {/* <RenderTradeInPromo />

//       <RenderCarousel
//         title="You may also like"
//         subtitle="Related Products"
//         payload={mostWantedProducts}
//         loading={loading}
//       />

//       <RenderCarousel
//         title="Pairs well with"
//         payload={mostWantedProducts}
//         loading={loading}
//       /> */}

//       <RenderReviews productId={productDetails.main_variation.id} />

//       <CTATwo />

//       <CTAOne />

//       <div className="my-10"></div>
//     </div>
//   );
// };

// export default ProductListingDetail;
