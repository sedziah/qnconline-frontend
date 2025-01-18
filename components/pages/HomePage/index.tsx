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
    newArrivals,
    featuredProducts,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    // Dispatch the API calls to fetch daily deals, featured products, and sustainable products
    dispatch(productsApi.endpoints.fetchDailyDeals.initiate());
    dispatch(productsApi.endpoints.fetchNewArrivals.initiate());
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

      {/* New Arrivals Products Section */}
      <RenderCarousel
        title="New Arrivals"
        subtitle="Discover Our Latest Additions. Stay Ahead of the Trends!!"
        payload={newArrivals}
        loading={isLoading}
      />

      {/* Discount Sales */}
      <RenderCarousel
        title="Discount Sales"
        subtitle="Unbeatable Deals on Your Favorite Products. Shop and Save Now!"
        payload={newArrivals}
        loading={isLoading}
      />

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
