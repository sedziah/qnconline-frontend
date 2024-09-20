import { ProductListingDetail } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "QNCONLINE - ", // Dynamic Title
  description: "A Home of Premium Products & Exemplary Customer Care!",
}


const page = () => {
  return <ProductListingDetail />
}

export default page