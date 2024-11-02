"use client"
import Breadcrumb from '@/components/breadcrumb'
import { CTAOne } from '@/components/CTAS/CTAOne'
import CTATwo from '@/components/CTAS/CTATwo'
import FloatingInfo from '@/components/Navbars/FloatingInfo'
import RenderAppearanceControl from '@/components/sections/RenderAppearanceControl'
import RenderBatteryControl from '@/components/sections/RenderBatteryControl'
import RenderCarousel from '@/components/sections/RenderCarousel'
import { RenderColorSelector } from '@/components/sections/RenderColorSelector'
import RenderProductSummary from '@/components/sections/RenderProductSummary'
import RenderReviews from '@/components/sections/RenderReviews'
import RenderStorageControl from '@/components/sections/RenderStorageControl'
import RenderTradeInPromo from '@/components/sections/RenderTradeInPromo'
import { apiService } from '@/library/services/apiService'
import { Product, ProductDetailsResponse } from '@/library/types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export const ProductListingDetail = () => {
  const searchParams = useSearchParams()
  const productName = searchParams.get('name')
  const productId = searchParams.get('id')
  const [product, setProduct] = useState<Product | null>(null)
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'products', href: '/products' },
    { label: productName! },
  ]

  useEffect(() => {
    // Fetch the main product details
    const fetchProductDetails = async () => {
      if (!productId) return;

      try {
        const productData: ProductDetailsResponse = await apiService.getProductDetails(productId);

        // Transform ProductDetailsResponse to Product type
        const transformedProduct: Product = {
          id: productData.id,
          name: productData.product_name, // Map `product_name` to `name`
          slug: productData.slug,
          brand: productData.brand as Brand, // Assuming `brand` needs to be transformed if not string
          base_price: productData.base_price,
          currency: productData.currency,
          description: productData.description,
          images: productData.images.map(image => ({
            id: '', // Assign a unique ID if required
            productId: productData.id,
            isMainImage: false, // Assuming default
            image: image.url, // Map `url` to `image`
          }) as ProductImage),
          specifications: productData.specifications.map(spec => ({
            specificationName: spec.name, // Map `name` to `specificationName`
            value: spec.value,
          }) as ProductSpecification),
          // Add any other necessary mappings
        };

        setProduct(transformedProduct);
      } catch (err) {
        console.error('Failed to fetch product details', err);
      }
    };

    // Fetch related products
    const fetchMostWantedProducts = async () => {
      try {
        const products = await apiService.getDailyDeals()
        setMostWantedProducts(products)
      } catch (err) {
        console.error('Failed to fetch products', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProductDetails()
    fetchMostWantedProducts()
  }, [productId])

  return (
    <>
      <FloatingInfo product={product} />

      <Breadcrumb items={breadcrumbItems} />

      {product && <RenderProductSummary product={product} />} {/* Pass product prop */}

      <RenderAppearanceControl />

      <RenderBatteryControl />

      <RenderStorageControl />

      <RenderColorSelector />

      <RenderTradeInPromo />

      <CTATwo />

      <CTAOne />

      <div className='my-10'></div>
    </>
  )
}

export default ProductListingDetail
