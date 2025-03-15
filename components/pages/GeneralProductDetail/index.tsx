"use client"
import Breadcrumb from '@/components/breadcrumb'
import { CTAOne } from '@/components/CTAS/CTAOne'
import CTATwo from '@/components/CTAS/CTATwo'
import RenderCarousel from '@/components/sections/RenderCarousel'
import { MobileCardData, Product } from '@/library/types'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import { FiMinus, FiPlus, FiHeart, FiShare2, FiShoppingCart, FiTruck, FiPackage, FiRefreshCw, FiStar, FiCheck } from 'react-icons/fi'
import { Toaster, toast } from 'sonner'
import FloatingInfo from '@/components/Navbars/FloatingInfo'

// Dummy data for testing
const DUMMY_PRODUCT = {
  id: 1,
  name: "Professional DSLR Camera with 24-70mm Lens",
  description: "Experience professional-grade photography with our latest DSLR camera. Featuring a 45.7MP full-frame sensor, 4K video capabilities, and advanced autofocus system. Perfect for both professional photographers and enthusiasts.",
  price: 2499.99,
  discounted_price: 2199.99,
  images: [
    { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1617799899679-6a830e0cc182?auto=format&fit=crop&w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=800&q=80" },
  ],
  specifications: [
    { specificationName: "Sensor", value: "45.7MP Full-Frame CMOS" },
    { specificationName: "ISO Range", value: "100-51,200 (Expandable)" },
    { specificationName: "Video Resolution", value: "4K UHD at 60fps" },
    { specificationName: "Autofocus Points", value: "153-Point AF System" },
    { specificationName: "Screen", value: "3.2\" Tilting Touchscreen" },
    { specificationName: "Connectivity", value: "Wi-Fi, Bluetooth, USB-C" },
    { specificationName: "Battery Life", value: "Up to 1,840 Shots" },
    { specificationName: "Weight", value: "915g (Body Only)" },
  ],
  features: [
    "Professional-grade image quality",
    "Advanced autofocus system",
    "Weather-sealed construction",
    "Dual memory card slots",
    "High-speed continuous shooting",
    "Built-in Wi-Fi and Bluetooth",
  ],
  rating: 4.8,
  reviews: 128,
  stock_status: "In Stock",
  shipping_time: "Ships in 24 hours"
}

export const GeneralProductDetail = ({ slug }: { slug: string }) => {
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const productName = searchParams.get('name')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlist, setIsWishlist] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'shipping'>('description')

  // Use dummy data for testing
  const productData = {
    main_variation: DUMMY_PRODUCT,
    specifications: DUMMY_PRODUCT.specifications,
    related_variations: Array(6).fill(DUMMY_PRODUCT).map((item, index) => ({
      ...item,
      id: index + 2,
      price: item.price,
      discounted_price: item.discounted_price,
    }))
  }

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product?.id,
        full_name: product?.name,
        price: product?.price,
        discounted_price: product?.discounted_price,
        image: product?.images?.[0]?.image || "/placeholder-image.png",
        quantity: quantity,
      })
    )
    toast.success('Added to cart successfully!')
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: productData?.main_variation?.name,
        text: productData?.main_variation?.description,
        url: window.location.href,
      })
    } catch (err) {
      toast.error('Sharing failed')
    }
  }

  const handleWishlist = () => {
    setIsWishlist(!isWishlist)
    toast.success(isWishlist ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Electronics', href: '/products?category=electronics' },
    { label: 'Cameras', href: '/products?category=electronics&subcategory=cameras' },
    { label: productData.main_variation.name },
  ]

  const discountPercentage = productData?.main_variation?.discounted_price && productData?.main_variation?.price
    ? Math.round(((productData.main_variation?.price - productData.main_variation?.discounted_price) / productData.main_variation?.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <FloatingInfo
        product={productData?.main_variation as unknown as Product}
        handleAddToCart={handleAddToCart}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={productData?.main_variation?.images?.[selectedImage]?.image || "/placeholder-image.png"}
                alt={productData?.main_variation?.name || "Product Image"}
                fill
                className="object-cover mix-blend-multiply"
                priority
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  Save {discountPercentage}%
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData?.main_variation?.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-gray-100 border-2 transition-all ${selectedImage === idx
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-200'
                    }`}
                >
                  <Image
                    src={img.image || "/placeholder-image.png"}
                    alt={`Product Image ${idx + 1}`}
                    fill
                    className="object-cover mix-blend-multiply p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:pl-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FiPackage /> {productData.main_variation.stock_status}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiTruck /> {productData.main_variation.shipping_time}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900">
                  {productData?.main_variation?.name}
                </h1>

                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array(5).fill(null).map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < Math.floor(productData.main_variation.rating) ? "fill-current" : ""}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {productData.main_variation.rating} ({productData.main_variation.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${productData?.main_variation?.discounted_price || productData?.main_variation?.price}
                  </span>
                  {productData?.main_variation?.discounted_price && (
                    <span className="text-xl text-gray-400 line-through">
                      ${productData?.main_variation?.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="border-t border-b py-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Key Features</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {productData.main_variation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <FiCheck className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <label className="font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FiMinus />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center py-2 focus:outline-none"
                    />
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleAddToCart(productData?.main_variation as unknown as Product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleWishlist}
                    className={`p-3 rounded-lg border ${isWishlist
                      ? 'bg-red-50 border-red-200 text-red-500'
                      : 'hover:bg-gray-50'
                      }`}
                  >
                    <FiHeart className={isWishlist ? 'fill-current' : ''} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-lg border hover:bg-gray-50"
                  >
                    <FiShare2 />
                  </button>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <FiTruck className="text-primary text-xl flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Free Delivery</p>
                    <p className="text-sm text-gray-500">For orders over $100</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiRefreshCw className="text-primary text-xl flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-500">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              {(['description', 'specifications', 'shipping'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-medium capitalize ${activeTab === tab
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {productData?.main_variation?.description}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {productData?.specifications?.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-700">{spec?.specificationName}</span>
                    <span className="text-gray-600">{spec?.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Information</h3>
                  <p>Free standard shipping on orders over $100. Estimated delivery time: 3-5 business days.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Returns Policy</h3>
                  <p>We offer a 30-day return policy. Items must be unused and in original packaging.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <RenderCarousel
            title=""
            subtitle=""
            payload={productData?.related_variations?.map((product) => ({
              id: product?.id,
              full_name: product?.name,
              product_slug: product?.slug,
              price: product?.price,
              discounted_price: product?.discounted_price,
              discount: product?.discounted_price,
              free_delivery: product?.free_delivery,
              image_url: product?.images?.[0]?.image || "/placeholder-image.png",
            })) as MobileCardData[]}
            loading={false}
          />
        </div>

        <div className="mt-16 border-t pt-16">
          <CTATwo />
        </div>

        <div className="mt-16">
          <CTAOne />
        </div>
      </div>
    </div>
  )
} 