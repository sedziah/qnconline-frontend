"use client"
import Breadcrumb from '@/components/breadcrumb'
import { CTAOne } from '@/components/CTAS/CTAOne'
import ProductsWrapper from '@/components/ProductsWrapper'
import {  useSearchParams } from 'next/navigation'
import React from 'react'

const ProductListingPage = () => {
  const searchParams = useSearchParams()
  const categoryName = searchParams.get('name')


  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryName! },
  ];

  return (
    <>
      <Breadcrumb items={categoryName ? breadcrumbItems : breadcrumbItems?.slice(0, 1)} />


      <CTAOne />


      <ProductsWrapper cateogry={`All Refurbished ${categoryName}`} />

    
    </>
  )
}

export default ProductListingPage