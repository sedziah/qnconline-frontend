"use client";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ProductCardSkeleton from "../Cards/ProductCardSkeleton";
import MobilePhoneCard from "../Cards/MobilePhoneCard";
import { MobileCardData } from "../../library/types";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

interface RenderCarouselProps {
  title: string;
  subtitle?: string;
  payload: MobileCardData[];
  loading: boolean;
}

const RenderCarousel: React.FC<RenderCarouselProps> = ({
  title,
  subtitle,
  payload,
  loading,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(payload?.length ? null : "No products available");
  }, [payload]);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="my-16 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-base font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <div className="mt-5">
        {loading ? (
          <Carousel responsive={responsive}>
            {[...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </Carousel>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Carousel responsive={responsive} infinite autoPlaySpeed={3000}>
            {payload.map((deal) => (
              <MobilePhoneCard
                key={deal.id}
                product={{
                  id: deal.id,
                  full_name: deal.full_name ?? "Unnamed Product",
                  name: deal.full_name ?? "Unnamed Product",
                  product_slug: deal.product_slug ?? "unknown-slug",
                  price: deal.price?.toString() ?? "0",
                  discounted_price: deal.discounted_price?.toString() ?? undefined,
                  condition: deal.condition ?? "N/A",
                  inventory_quantity: deal.inventory_quantity ?? 0,
                  images: [{
                    image: deal.image_url ?? "/placeholder-image.png",
                    alt_text: deal.full_name || "Product Image",
                    image_type: "main",
                  }],
                  discount: deal.discount ?? 0,
                  free_delivery: deal.free_delivery ?? false,
                  deals: deal.deals ?? [],
                }}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default RenderCarousel;
