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
import LoadingScreen from '@/components/ui/LoadingScreen'
import ErrorMessage from '@/components/ui/ErrorMessage'
// import { apiService } from '@/library/services/apiService'
import { MobileCardData, Product } from '@/library/types'
import { useFetchProductByIdQuery } from '@/redux/api/features/productsApi'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'

export const ProductListingDetail = ({ slug }: { slug: string }) => {
  const searchParams = useSearchParams()
  const dispatch = useDispatch();
  const productName = searchParams.get('name')
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([])

  const { data: productData, isLoading, isError } = useFetchProductByIdQuery<{
    data: {
      main_variation: Product
      related_variations: Product[]
      specifications: { specificationName: string; value: string }[]
    }, isLoading: boolean,
    isError: boolean
  }>(slug)

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product?.id,
        full_name: product.name,
        price: product.price,
        discounted_price: product.discounted_price,
        image: product.images?.[0]?.image || "/placeholder-image.png",
        quantity: 1,
      })
    )
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'products', href: '/products' },
    { label: productName! },
  ]


  if (isError || (!isLoading && !productData)) {
    return (
      <ErrorMessage
        code="404"
        title="Product Not Found"
        message="We couldn't find the product you're looking for. It may have been removed or the link might be incorrect."
        action={{
          label: "Browse Products",
          href: "/products"
        }}
      />
    )
  }


  if (isLoading) {
    return <LoadingScreen />
  }


  return (
    <>
      <FloatingInfo
        product={productData?.main_variation}
        handleAddToCart={handleAddToCart}
      />

      <Breadcrumb items={breadcrumbItems} />

      <RenderProductSummary
        product={{
        ...productData?.main_variation,
        specifications: productData?.specifications
          ? Object.entries(productData.specifications).map(([key, values]) => ({
            specificationName: key,
            value: values
          }))
          : [] as any
        }}
        handleAddToCart={handleAddToCart}
      />

      <RenderAppearanceControl />

      <RenderBatteryControl />

      <RenderStorageControl />

      <RenderColorSelector />

      <RenderTradeInPromo />

      <RenderCarousel
        title="You may also like"
        subtitle="Related Projects"
        payload={productData?.related_variations.map((product) => ({
          id: product.id,
          full_name: product.name,
          product_slug: product.slug,
          image_url: product.images?.[0]?.image || "/placeholder-image.png",
        })) as MobileCardData[]}
        loading={isLoading}
      />

      {/* <RenderCarousel
        title="Pairs well with"
        payload={productData?.related_variations}
        loading={isLoading}
      /> */}

      {/* <RenderReviews product={productData?.main_variation} /> */}

      <CTATwo />

      <CTAOne />

      <div className='my-10'></div>
    </>
  )
}
