"use client"
import React, { useEffect, useState } from 'react';
import BannerCarousel from '../../Banners/BannerCarousel';
import RenderMostWanted from '../../sections/RenderMostWanted';
import RenderAccessories from '../../sections/RenderAccessories';
import RenderBlogCarousel from '../../sections/RenderBlogCarousel';
import InfoCard from '../../Cards/InfoCard';
import NewsLetter from '../../NewsLetter';
import RenderVideoReviews from '../../sections/RenderVideoReviews';
import RenderCarousel from '../../sections/RenderCarousel';
import { apiService, Product } from '../../../library/services/apiService';

export default function HomePage() {
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products (e.g., daily deals or most wanted)
    const fetchMostWantedProducts = async () => {
      try {
        const products = await apiService.getDailyDeals();
        setMostWantedProducts(products); // Assuming the response is an array of products
        setError(null);
      } catch (err) {
        console.error('Failed to fetch products', err);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchMostWantedProducts();
  }, []);

  return (
    <>
      <BannerCarousel />

      {/* Daily Deals */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <RenderCarousel title='Daily Deals' subtitle="Amazing offers just for today. Don't Miss Out!" payload={mostWantedProducts} />
      )}

      {/* New Arrivals */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <RenderCarousel title='New Arrivals' subtitle="Discover Our Newest Arrivals.!" payload={mostWantedProducts} />
      )}



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
  );
}
