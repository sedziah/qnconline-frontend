"use client";
import React, { useEffect, useState } from 'react';
import BannerCarousel from '../../Banners/BannerCarousel';
import RenderAccessories from '../../sections/RenderAccessories';
import RenderBlogCarousel from '../../sections/RenderBlogCarousel';
import InfoCard from '../../Cards/InfoCard';
import NewsLetter from '../../NewsLetter';
import RenderVideoReviews from '../../sections/RenderVideoReviews';
import RenderCarousel from '../../sections/RenderCarousel';
import RenderSustainableProduct from '../../sections/RenderSustainableProduct';
import { apiService } from '../../../library/services/apiService';
import { Product } from '../../../library/types';
import CTAFive from '@/components/CTAS/CTAFive'
import RenderMostWantedCategory from '@/components/sections/RenderMostWantedCategory'

// Define the SustainableProduct type
interface SustainableProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  image_url: string;
}

const HomePage = () => {
  const [mostWantedProducts, setMostWantedProducts] = useState<Product[]>([]);
  const [sustainableProducts, setSustainableProducts] = useState<SustainableProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch daily deals or most wanted products
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

    // Fetch sustainable products
    const fetchSustainableProducts = async () => {
      try {
        const products = await apiService.getSustainableProducts();
        setSustainableProducts(products); // Ensure the API returns SustainableProduct[]
      } catch (err) {
        console.error('Failed to fetch sustainable products', err);
        setError('Failed to fetch sustainable products.');
      }
    };

    fetchMostWantedProducts();
    fetchSustainableProducts();
  }, []);

  return (
    <div className='bg-bglight'>
      {/* Banner Carousel */}
      <BannerCarousel />


      {/* CTA Component */}
      <CTAFive />


      <RenderMostWantedCategory />

      {/* Daily Deals Section */}
      <RenderCarousel
        title="Daily Deals"
        subtitle="Amazing offers just for today. Don't Miss Out!"
        payload={mostWantedProducts}
        loading={loading}
      />

      {/* New Arrivals Section */}
      <RenderCarousel
        title="New Arrivals"
        subtitle="Discover Our Newest Arrivals!"
        payload={mostWantedProducts}
        loading={loading}
      />

      {/* Sustainable Products Section */}
      <RenderSustainableProduct products={sustainableProducts} loading={loading} />

      {/* Trending Products Section */}
      <RenderCarousel
        title="Trending Products"
        subtitle="Hot Right Now! Discover What's Trending Today."
        payload={mostWantedProducts}
        loading={loading}
      />

      {/* Sustainable Products Section */}
      <RenderSustainableProduct products={sustainableProducts} loading={loading} />

      {/* Blog Carousel Section */}
      <RenderBlogCarousel />

      {/* Featured Products Section */}
      <RenderCarousel
        title="Featured Products"
        subtitle="Top-Rated Favorites Curated for You. Explore Now!"
        payload={mostWantedProducts}
        loading={loading}
      />

      {/* Video Reviews Section */}
      <RenderVideoReviews />

      {/* Information Card Section */}
      <InfoCard
        title="Trading in your old tech is easier than a lot of things."
        description="Earn cash when you trade in your forgotten tech. It’s a simple way to help do more with what we already have."
        link="/trade-in"
      />

      {/* Newsletter Subscription Section */}
      <NewsLetter />
    </div>
  );
};

export default HomePage;
