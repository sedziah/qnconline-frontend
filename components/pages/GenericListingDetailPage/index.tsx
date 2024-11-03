// "use client"
// import AnimatedScrollBanner from '@/components/Banners/AnimatedScrollBanner'
// import { CTAOne } from '@/components/CTAS/CTAOne'
// import CTATwo from '@/components/CTAS/CTATwo'
// import RenderCarousel from '@/components/sections/RenderCarousel'
// import RenderReviews from '@/components/sections/RenderReviews'
// import { apiService } from '@/library/services/apiService'
// import { Product } from '@/library/types'
// import { useSearchParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// const GenericListingDetailPage = () => {
//   const searchParams = useSearchParams()
//   const productName = searchParams.get('name')
//   const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
  

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

//   return (
//     <div className='bg-bglight'>
      
//       <AnimatedScrollBanner breadcrumbItems={breadcrumbItems} />

//       <RenderCarousel
//         title="You may also like"
//         subtitle="Related Projects"
//         payload={mostWantedProducts}
//         loading={loading}
//       />

//       <RenderCarousel
//         title="Pairs well with"
//         payload={mostWantedProducts}
//         loading={loading}
//       />

//       <RenderReviews />

//       <CTATwo />

//       <CTAOne />

//     </div>
//   )
// }

// export default GenericListingDetailPage