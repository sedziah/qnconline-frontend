"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import { productsApi } from "../../../redux/api/features/productsApi";
import BannerCarousel from "../../Banners/BannerCarousel";
import InfoCard from "../../Cards/InfoCard";
import NewsLetter from "../../NewsLetter";
import RenderCarousel from "../../sections/RenderCarousel";
import CTAFive from "@/components/CTAS/CTAFive";
import RenderMostWantedCategory from "@/components/sections/RenderMostWantedCategory";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Access state from Redux store
  const {
    dailyDeals,
    featuredProducts,
    sustainableProducts,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    // Dispatch the API calls to fetch daily deals, featured products, and sustainable products
    dispatch(productsApi.endpoints.fetchDailyDeals.initiate());
    dispatch(productsApi.endpoints.fetchFeaturedProducts.initiate());
    dispatch(productsApi.endpoints.fetchSustainableProducts.initiate());
  }, [dispatch]);

  return (
    <div className="bg-bglight">
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* CTA Component */}
      <CTAFive />

      <RenderMostWantedCategory />

      {/* Daily Deals Section */}
      <RenderCarousel
        title="Daily Deals"
        subtitle="Amazing offers just for today. Don't Miss Out!"
        payload={dailyDeals}
        loading={isLoading}
      />

      {/* Featured Products Section */}
      <RenderCarousel
        title="Featured Products"
        subtitle="Top-Rated Favorites Curated for You. Explore Now!"
        payload={featuredProducts}
        loading={isLoading}
      />

      {/* Sustainable Products Section */}
      {/* <RenderCarousel
        title="Sustainable Products"
        subtitle="Explore Our Eco-Friendly Products"
        payload={sustainableProducts}
        loading={isLoading}
      /> */}

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
