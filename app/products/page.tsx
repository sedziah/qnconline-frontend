import { ProductListingPage } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "QNCONLINE - Products",
  description: "A Home of Premium Products & Exemplary Customer Care!",
}


const ProductListing = () => {
  return <ProductListingPage />
}

export default ProductListing