"use client"
import Breadcrumb from '@/components/breadcrumb'
import ReviewCard from '@/components/Cards/ReviewCard'
import { CTAOne } from '@/components/CTAS/CTAOne'
import Footer from '@/components/Footer'
import RenderCarousel from '@/components/sections/RenderCarousel'
import RenderReviews from '@/components/sections/RenderReviews'
import { apiService } from '@/library/services/apiService'
import { Product } from '@/library/types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const ProductListingDetail = () => {
  const searchParams = useSearchParams()
  const productName = searchParams.get('name')
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'products', href: '/products' },
    { label: productName! },
  ]

  useEffect(() => {
    // Fetch actual related products
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

    fetchMostWantedProducts()
  }, []);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />


      <RenderCarousel
        title="You may also like"
        subtitle="Related Projects"
        payload={mostWantedProducts}
        loading={loading}
      />
      
      <RenderCarousel
        title="Pairs well with"
        payload={mostWantedProducts}
        loading={loading}
      />

      <RenderReviews />

      <CTAOne />
    </>
  )
}
