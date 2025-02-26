/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Product } from '@/library/types'
import React, { useEffect, useState } from 'react'

interface FloatingInfoProps {
  product: Product | null
  handleAddToCart: (product: Product) => void
}

const FloatingInfo: React.FC<FloatingInfoProps> = ({ product, handleAddToCart }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
    setIsVisible(position >= 300)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!product) {
    return null
  }

  // Use the first image in `product.images` or fallback to a placeholder
  const imageUrl = product?.images && product?.images.length > 0
    ? product?.images[0].image
    : "https://via.placeholder.com/100"

  // Calculate the original price using base_price and priceAdjustment
  const basePrice = typeof product?.base_price === "number" ? product?.base_price : parseFloat(product?.base_price!)
  const originalPrice = basePrice + parseFloat(product?.priceAdjustment!)
  const priceAdjustment = parseFloat(product?.priceAdjustment!)

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`transition-all duration-300 ease-in-out h-24 flex items-center justify-center bg-white w-full fixed top-0 left-0 right-0 
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className='w-full max-w-6xl mx-auto px-4 h-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
            src={imageUrl}
            className='w-10 h-10 md:h-14 lg:h-14 md:w-14 lg:w-14 object-contain'
            alt={product?.name!}
          />
          <p className="ml-2 text-sm sm:text-base lg:text-base font-medium text-black">
            {product?.name} - {product?.slug}
          </p>
        </div>

        <div className='hidden transition-all md:flex lg:flex flex-row items-center gap-x-6'>
          <div>
            <div className='flex flex-row items-center justify-center gap-x-1'>
              <p className="text-lg font-bold">
                ${product?.price}
              </p>
              {/* <span className='text-xs'>before trade-in</span> */}
            </div>
            {priceAdjustment > 0 && (
              <div className='flex flex-row items-center gap-x-1'>
                <p className="text-gray-500 text-sm line-through">
                  ${originalPrice.toFixed(2)}
                </p>
                <p className='bg-green-300 text-green-700 font-medium py-1 px-2 text-xs rounded-sm'>
                  Save ${priceAdjustment.toFixed(2)}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-primary flex gap-2 items-center text-white px-4 py-2 rounded-md hover:bg-[#f75b21] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FloatingInfo
