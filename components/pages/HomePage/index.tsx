"use client";
import React, { useEffect, useState } from 'react';
import BannerCarousel from '../../Banners/BannerCarousel';
import RenderAccessories from '../../sections/RenderAccessories';
import RenderBlogCarousel from '../../sections/RenderBlogCarousel';
import InfoCard from '../../Cards/InfoCard';
import NewsLetter from '../../NewsLetter';
import RenderVideoReviews from '../../sections/RenderVideoReviews';
import RenderCarousel from '../../sections/RenderCarousel';
import { apiService } from '../../../library/services/apiService';
import { Product } from '../../../library/types';
import RenderSustainableProduct from '../../sections/RenderSustainableProduct';


export default function HomePage() {
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([]);
  const [accessoryProducts, setAccessoryProducts] = useState<Product[]>([]);
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

  // Map accessories to include a field for whether they're sustainably sourced
  const accessoriesPayload = accessoryProducts.map((product) => ({
    name: product.name,
    imageUrl: product.images.length > 0 ? product.images[0].image : '/placeholder-image.png',
    darkModeImageUrl: product.images.length > 1 ? product.images[1].image : undefined,
    linkUrl: `/product/${product.slug}`,
    isSustainablySourced: Math.random() > 0.5, // This is a placeholder, replace with actual data
  }));


  return (
    <>
      <BannerCarousel />

      {/* Daily Deals */}
      <RenderCarousel
        title="Daily Deals"
        subtitle="Amazing offers just for today. Don't Miss Out!"
        payload={mostWantedProducts}
        loading={loading}  
      />

      {/* New Arrivals */}
      <RenderCarousel
        title="New Arrivals"
        subtitle="Discover Our Newest Arrivals!"
        payload={mostWantedProducts}
        loading={loading} 
      />

      <RenderSustainableProduct />

      <RenderCarousel
        title="Trending Products"
        subtitle="Hot Right Now! Discover What's Trending Today."
        payload={mostWantedProducts}
        loading={loading} 
      />
      <RenderAccessories />
      <RenderBlogCarousel />
      <RenderCarousel
        title="Featured Products"
        subtitle="Top-Rated Favorites Curated for You. Explore Now!"
        payload={mostWantedProducts}
        loading={loading} 
      />
      <RenderVideoReviews />
      <InfoCard
        title="Trading in your old tech is easier than a lot of things."
        description="Earn cash when you trade in your forgotten tech. It’s a simple way to help do more with what we already have?"
        link="/"
      />
      <NewsLetter />
    </>
  );
}
