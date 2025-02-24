/* eslint-disable @next/next/no-img-element */
import { COLORS } from '@/constants';
import { ArrowLeft2, ArrowRight2, Lock1, Timer1, Trade, TruckFast, Verify } from 'iconsax-react';
import React, { useState, useEffect } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';
import TradeInDrawer from '../Drawers/TradeInDrawer';
import RefurbishDrawer from '../Drawers/RefurbishDrawer';
import WarrantDrawer from '../Drawers/WarrantDrawer';
import CarrierDrawer from '../Drawers/CarrierDrawer';
import { Product } from '@/library/types';

export type DrawersState = {
  tradeIn: boolean;
  refurbish: boolean;
  warrant: boolean;
  carrier: boolean;
};

type RenderProductSummaryProps = {
  product: Product | null;
};

const RenderProductSummary: React.FC<RenderProductSummaryProps> = ({ product }) => {
  const [drawers, setDrawers] = useState<DrawersState>({
    tradeIn: false,
    refurbish: false,
    warrant: false,
    carrier: false,
  });
  
  const toggleDrawer = (drawerName: keyof DrawersState) => {
    setDrawers((prev) => ({
      ...prev,
      [drawerName]: !prev[drawerName],
    }));
  };

  // Calculate delivery date range (3-5 days from now)
  const calculateDeliveryRange = () => {
    const today = new Date();
    const startDeliveryDate = new Date(today);
    const endDeliveryDate = new Date(today);
    
    startDeliveryDate.setDate(today.getDate() + 3);
    endDeliveryDate.setDate(today.getDate() + 5);
    
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${startDeliveryDate.toLocaleDateString(undefined, options)} - ${endDeliveryDate.toLocaleDateString(undefined, options)}`;
  };
  
  const [deliveryRange, setDeliveryRange] = useState(calculateDeliveryRange);

  useEffect(() => {
    setDeliveryRange(calculateDeliveryRange());
  }, []);

  if (!product) return null;

  const ProductStats = [
    {
      icon: <TruckFast size={20} />,
      title: `Free delivery by ${deliveryRange}`,
      description: "Express delivery by Oct 8 - Oct 9 from  ₵ 15.00"
    },
    {
      icon: <Lock1 size={20} />,
      title: "Works with all carriers",
      onClick: () => toggleDrawer('carrier')
    },
    {
      icon: <Timer1 size={20} />,
      title: "Free 30-day returns",
      description: "1-year warranty",
      onClick: () => toggleDrawer('warrant')
    },
    {
      icon: <Verify size={20} />,
      title: "Verified Refurbished in the US",
      onClick: () => toggleDrawer('refurbish')
    }
  ];

  return (
    <>
      <TradeInDrawer
        openFilter={drawers.tradeIn}
        toggleFilterDrawer={() => toggleDrawer('tradeIn')}
      />

      <RefurbishDrawer
        openFilter={drawers.refurbish}
        toggleFilterDrawer={() => toggleDrawer('refurbish')}
      />

      <WarrantDrawer
        openFilter={drawers.warrant}
        toggleFilterDrawer={() => toggleDrawer('warrant')}
      />

      <CarrierDrawer
        openFilter={drawers.carrier}
        toggleFilterDrawer={() => toggleDrawer('carrier')}
      />

      <div className="my-16 px-4 w-full max-w-6xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              {/* Main Product Image */}
              <img
                src={product.images[0]?.image || "https://via.placeholder.com/100"}
                alt="Product"
                className="w-full object-contain h-96 rounded-lg mb-4"
                id="mainImage"
              />
              {/* Thumbnail Images */}
              <div className="flex gap-1 py-4 justify-center items-center overflow-x-auto">
                <div className="flex items-center justify-center h-full">
                  <button className="bg-black hover:bg-black/90 w-8 h-8 flex items-center justify-center rounded-full">
                    <ArrowLeft2 size="20" color="#fff" />
                  </button>
                </div>
                {product?.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
                  />
                ))}
                <div className="flex items-center justify-center h-full">
                  <button className="bg-black hover:bg-black/90 w-8 h-8 flex items-center justify-center rounded-full">
                    <ArrowRight2 size="20" color="#fff" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              {/* Product Name */}
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-xs text-gray-600">4.5 (120 reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div>
                  <span className="text-2xl font-bold mr-2">₵ {product.price} {product.currency}</span>
                  {/* <span className="text-gray-500 line-through">${product.actualPrice || '399.99'}</span> */}
                </div>
                <div className="flex space-x-4 mb-2">
                  <button className="bg-primary flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-[#f75b21] focus:outline-none">
                    Add to Cart
                  </button>
                  <button className="bg-gray-100 flex gap-2 items-center text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 focus:outline-none">
                    <span>Wishlist</span>
                  </button>
                </div>
              </div>

              {/* Specifications */}
              {/* <p className="text-gray-700 mb-3 text-sm">
                {product.specifications.map(spec => `${spec.specification_name}: ${spec.value}`).join(', ')}
              </p> */}

              {/* Trade-In Button */}
              <button
                onClick={() => toggleDrawer('tradeIn')}
                className="bg-lightGray/30 transition-all hover:bg-lightGray/40 flex items-center justify-between py-2 px-4 rounded-full"
              >
                <Trade size="20" color={COLORS.primary} />
                <p className="text-xs text-black ml-2">Get this for even less with Trade-in</p>
                <MdOutlineChevronRight />
              </button>

              {/* Product Stats */}
              <div className="py-4 border-t border-b border-lightGray mt-7 grid grid-cols-2 gap-5">
                {ProductStats.map((info, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-x-1"
                    onClick={info.onClick}
                  >
                    <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-lightblue">
                      {info.icon}
                    </div>
                    <div className="flex-1 ml-3 text-left">
                      <p className="text-xs text-black">{info.title}</p>
                      {info.description && <p className="text-xs text-black">{info.description}</p>}
                    </div>
                    {info.onClick && <MdOutlineChevronRight />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderProductSummary;
