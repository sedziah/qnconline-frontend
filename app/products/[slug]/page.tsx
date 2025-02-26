import { ProductListingDetail } from '../../../components/pages/ProductListingDetail'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Q&C Online - ", // Dynamic Title
  description: "A Home of Premium Products & Exemplary Customer Care!",
}

type DynamicProductPageProps = {
  params: {
    slug: string
  }
}

const page = ({ params }: DynamicProductPageProps) => {
  return <ProductListingDetail slug={params.slug} />
}

export default page