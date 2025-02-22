import { ProductListingDetail } from '../../../components/pages/ProductListingDetail'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Q&C Online - ", // Dynamic Title
  description: "A Home of Premium Products & Exemplary Customer Care!",
}


const page = () => {
  return <ProductListingDetail />
}

export default page