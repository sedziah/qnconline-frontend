// "use client"
// import Breadcrumb from '@/components/breadcrumb'
// import { CTAOne } from '@/components/CTAS/CTAOne'
// import CTATwo from '@/components/CTAS/CTATwo'
// import FloatingInfo from '@/components/Navbars/FloatingInfo'
// import RenderAppearanceControl from '@/components/sections/RenderAppearanceControl'
// import RenderBatteryControl from '@/components/sections/RenderBatteryControl'
// import RenderCarousel from '@/components/sections/RenderCarousel'
// import { RenderColorSelector } from '@/components/sections/RenderColorSelector'
// import RenderProductSummary from '@/components/sections/RenderProductSummary'
// import RenderReviews from '@/components/sections/RenderReviews'
// import RenderStorageControl from '@/components/sections/RenderStorageControl'
// import RenderTradeInPromo from '@/components/sections/RenderTradeInPromo'
// import { apiService } from '@/library/services/apiService'
// import { Product } from '@/library/types'
// import { useSearchParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// export const ProductListingDetail = () => {
//   const searchParams = useSearchParams()
//   const productName = searchParams.get('name')
//   const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
//   const [product, setProduct] = useState<Product | null>(null)

//   const breadcrumbItems = [
//     { label: 'Home', href: '/' },
//     { label: 'products', href: '/products' },
//     { label: productName! },
//   ]

//   useEffect(() => {
//     // Fetch actual related products
//     const fetchMostWantedProducts = async () => {
//       try {
//         const products = await apiService.getDailyDeals()
//         setMostWantedProducts(products)
//       } catch (err) {
//         console.error('Failed to fetch products', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchMostWantedProducts()
//   }, [])

//   useEffect(() => {
//     // Fetch the product details
//     const fetchProductDetails = async () => {
//       if (!productName) return;

//       try {
//         const productDetailsResponse = await apiService.getProductDetails(productName);
        
//         // Log the fetched product details for debugging
//         console.log('Product Details Response:', productDetailsResponse);

//         // Transform the response to match the Product type
//         const productDetails: Product = {
//           name: productDetailsResponse.name,
//           category: productDetailsResponse.category,
//           priceAdjustment: productDetailsResponse.priceAdjustment,
//           price: productDetailsResponse.price,
//           // Add other necessary fields here
//         };

//         setProduct(productDetails);
//       } catch (err) {
//         console.error('Failed to fetch product details', err);
//       }
//     };

//     fetchProductDetails();
//   }, [productName]);

//   return (
//     <>
//       <FloatingInfo product={null} />

//       <Breadcrumb items={breadcrumbItems} />

//       <RenderProductSummary product={product} />

//       <RenderAppearanceControl />

//       <RenderBatteryControl />

//       <RenderStorageControl />

//       <RenderColorSelector />

//       <RenderTradeInPromo />

//       {/* <RenderCarousel
//         title="You may also like"
//         subtitle="Related Projects"
//         payload={mostWantedProducts}
//         loading={loading}
//       />

//       <RenderCarousel
//         title="Pairs well with"
//         payload={mostWantedProducts}
//         loading={loading}
//       /> */}

//       {/* <RenderReviews /> */}

//       <CTATwo />

//       <CTAOne />

//       <div className='my-10'></div>
//     </>
//   )
// }

import React from 'react';

const ProductListingDetail = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default ProductListingDetail;
