"use client"
import Breadcrumb from '@/components/breadcrumb'
import { CTAOne } from '@/components/CTAS/CTAOne'
import FloatingFilter from '@/components/FloatingFilter'
import ProductsWrapper from '@/components/ProductsWrapper'
import RenderReviews from '@/components/sections/RenderReviews'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import { BiSortAlt2 } from "react-icons/bi"
import { FaFilter } from "react-icons/fa"

const ProductListingPage = () => {
  return (
    <>
      {/* Loading indicator while waiting for the content */}
      <Suspense fallback={<div><div
        className="h-40 w-full bg-gray-200 rounded animate-pulse"
      ></div></div>}>
        <ProductContent />
      </Suspense>
    </>
  )
}

const ProductContent = () => {
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get('s') // Extract the slug from the URL
  const categoryName = searchParams.get('name') || 'All Products' // Extract the name from the URL

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryName },  // Display the category name in the breadcrumb
  ]

  return (
    <>
      <Breadcrumb items={categoryName ? breadcrumbItems : breadcrumbItems.slice(0, 1)} />
      <CTAOne />

      {/* Pass both categorySlug and categoryName to ProductsWrapper */}
      {categorySlug && (
        <ProductsWrapper categorySlug={categorySlug} categoryName={categoryName} />
      )}

      {/* {categorySlug && <RenderReviews />} */}
      
      <FloatingFilter />
    </>
  )
}

export default ProductListingPage
