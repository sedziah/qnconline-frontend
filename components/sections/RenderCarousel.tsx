"use client";
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';
import NewProductCard from '../Cards/NewProductCard';
import ProductCardSkeleton from '../Cards/ProductCardSkeleton';
import dynamic from 'next/dynamic';
import { Product } from '../../library/types';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

interface RenderCarouselProps {
  title: string;
  subtitle?: string;
  payload: Product[]; // Use Product interface directly
  loading: boolean; // Add loading state
}

const RenderCarousel: React.FC<RenderCarouselProps> = ({ title, subtitle, payload, loading }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!payload || payload.length === 0) {
      setError("No products available");
    } else {
      setError(null);
    }
  }, [payload]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-14 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-base font-semibold">{title}</h2>
      {subtitle && <p className="text-base text-black/60 font-normal">{subtitle}</p>}

      <div className="mt-5">
        {loading ? (
          // Show skeletons while loading
          <Carousel responsive={responsive}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="mx-1 py-3">
                <ProductCardSkeleton />
              </div>
            ))}
          </Carousel>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Carousel
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
          >
            {payload && payload.length > 0 ? (
              payload.map((product, index) => (
                <div key={index} className="mx-1 py-3">
                  <NewProductCard
                    product={{
                      id: product.id || 'N/A',
                      name: product.name || 'No name available',
                      slug: product.slug || 'no-slug',
                      base_price: product.base_price || 0,
                      currency: product.currency || 'N/A',
                      price_adjustment: product.price_adjustment || '0.00',
                      inventory_quantity: product.inventory_quantity || 0,
                      condition: product.condition || 'Unknown',
                      images: product.images || [],
                      reviews: product.reviews || [],
                      specifications: product.specifications || [],
                      deals: product.deals || [],
                      catalogueId: '', // Add your custom field
                      actualPrice: 0, // Set the actual price
                      isFeatured: false, // Set default values for additional fields
                      freeDelivery: false, // Set default values for additional fields
                    }}
                  />
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default RenderCarousel;
