import { ProductListingDetail } from '../../../components/pages/ProductListingDetail'
import { GeneralProductDetail } from '../../../components/pages/GeneralProductDetail'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Q&C Online - ", // Dynamic Title
  description: "A Home of Premium Products & Exemplary Customer Care!",
}

type DynamicProductPageProps = {
  params: {
    slug: string
  },
  searchParams: {
    category?: string
  }
}

const page = ({ params, searchParams }: DynamicProductPageProps) => {
  // Determine if the product is a mobile/electronic device that needs specialized view
  const isSpecializedProduct = searchParams.category === 'phones' ||
    searchParams.category === 'tablets' ||
    searchParams.category === 'laptops' ||
    searchParams.category === 'electronics'

  return isSpecializedProduct ? (
    <ProductListingDetail slug={params.slug} />
  ) : (
    <GeneralProductDetail slug={params.slug} />
  )
}

export default page