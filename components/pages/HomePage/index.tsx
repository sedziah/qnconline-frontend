import React from 'react'
import BannerCarousel from '../../Banners/BannerCarousel'
import RenderMostWanted from '../../sections/RenderMostWanted'
import RenderAccessories from '../../sections/RenderAccessories'
import RenderBlogCarousel from '../../sections/RenderBlogCarousel'
import InfoCard from '../../Cards/InfoCard'
import NewsLetter from '../../NewsLetter'
import RenderVideoReviews from '../../sections/RenderVideoReviews'

export default function HomePage() {
  return (
    <>
      <BannerCarousel />


      {/* Most wanted */}
      <RenderMostWanted />



      {/* Popular devices */}
      <RenderMostWanted />

      <RenderAccessories />


      <RenderMostWanted />

      {/* RenderBlogCarousel */}
      <RenderBlogCarousel />


      {/* Accessories, PCs */}
      <RenderAccessories />


      {/* View Reviews */}
      <RenderVideoReviews />

      <InfoCard
        title='Trading in your old tech is easier than a lot of things.'
        description='Earn cash when you trade in your forgotten tech. It’s a simple way to help do more with what we already have?'
        link='/'
      />


      <NewsLetter />


    </>
  )
}