import { ProductListingDetail, GenericListingDetailPage } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Q&C Online - ", // Dynamic Title
  description: "A Home of Premium Products & Exemplary Customer Care!",
}


const page = () => {
  return <GenericListingDetailPage />
  // return <ProductListingDetail />
}

export default page