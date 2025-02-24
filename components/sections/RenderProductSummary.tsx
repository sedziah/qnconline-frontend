/* eslint-disable @next/next/no-img-element */
import { Lock1, Timer1, TruckFast, Verify } from 'iconsax-react'
import React, { useState, useEffect } from 'react'
import TradeInDrawer from '../Drawers/TradeInDrawer'
import RefurbishDrawer from '../Drawers/RefurbishDrawer'
import WarrantDrawer from '../Drawers/WarrantDrawer'
import CarrierDrawer from '../Drawers/CarrierDrawer'
import { Product } from '@/library/types'
import { ImagePreview } from '../Banners/ImagePreview'
import RenderProductInfo from './RenderProductInfo'

export type DrawersState = {
  tradeIn: boolean
  refurbish: boolean
  warrant: boolean
  carrier: boolean
}

type RenderProductSummaryProps = {
  product: Product | null
  handleAddToCart: (product: Product) => void
}

const RenderProductSummary: React.FC<RenderProductSummaryProps> = ({ product, handleAddToCart }) => {
  const [drawers, setDrawers] = useState<DrawersState>({
    tradeIn: false,
    refurbish: false,
    warrant: false,
    carrier: false,
  })

  const toggleDrawer = (drawerName: keyof DrawersState) => {
    setDrawers((prev) => ({
      ...prev,
      [drawerName]: !prev[drawerName],
    }))
  }

  // Calculate delivery date range (3-5 days from now)
  const calculateDeliveryRange = () => {
    const today = new Date()
    const startDeliveryDate = new Date(today)
    const endDeliveryDate = new Date(today)

    startDeliveryDate.setDate(today.getDate() + 3)
    endDeliveryDate.setDate(today.getDate() + 5)

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
    return `${startDeliveryDate.toLocaleDateString(undefined, options)} - ${endDeliveryDate.toLocaleDateString(undefined, options)}`
  }

  const [deliveryRange, setDeliveryRange] = useState(calculateDeliveryRange)

  useEffect(() => {
    setDeliveryRange(calculateDeliveryRange())
  }, [])

  if (!product) return null

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
  ]

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


      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <ImagePreview images={product.images} />
              </div>

              <div className="w-full md:w-1/2 px-4">
                <RenderProductInfo
                  product={product}
                  toggleDrawer={toggleDrawer}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderProductSummary
