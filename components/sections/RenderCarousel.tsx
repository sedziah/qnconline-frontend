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
    <div className="my-16 px-4 w-full max-w-6xl mx-auto">
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
                      // ...product?.product,
                      id: product?.id || 'N/A',
                      name: product?.name || 'No name available',
                      slug: product?.slug || 'no-slug',
                      brand: product?.brand || { /* default brand object if necessary */ },
                      category: product?.category || { /* default category object if necessary */ },
                      base_price: product?.base_price || '0.00',
                      description: product?.description || 'No description available',
                      currency: product?.currency || 'USD',
                      priceAdjustment: product?.priceAdjustment || '',
                      price: product?.price || 0,
                      inventoryQuantity: product?.inventoryQuantity || 0,
                      condition: product?.condition || 'New',
                      images: product?.images || [],
                      reviews: product?.reviews || [],
                      specifications: product?.specifications || [],
                      deals: product?.deals || [],
                      catalogueId: product?.catalogueId || '', // Optional field
                      actualPrice: product?.actualPrice || 0,  // Optional field
                      isFeatured: product?.isFeatured || false, // Optional field
                      freeDelivery: product?.freeDelivery || false, // Optional field
                      pagination: product?.pagination,
                      variations: product?.variations || [],   // Required field
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
