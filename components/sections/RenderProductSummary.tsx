/* eslint-disable @next/next/no-img-element */
import { COLORS } from '@/constants'
import { ArrowLeft2, ArrowRight2, Lock1, Timer1, Trade, TruckFast, Verify } from 'iconsax-react'
import React, { useState } from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import TradeInDrawer from '../Drawers/TradeInDrawer'
import RefurbishDrawer from '../Drawers/RefurbishDrawer'
import WarrantDrawer from '../Drawers/WarrantDrawer'
import CarrierDrawer from '../Drawers/CarrierDrawer'
import RenderProductInfo from './RenderProductInfo'

export type DrawersState = {
  tradeIn: boolean
  refurbish: boolean
  warrant: boolean
  carrier: boolean
}


const RenderProductSummary = () => {
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

  const ProductStats = [
    {
      icon: <TruckFast size={20} />,
      title: "Free delivery by Oct 1 - Oct 2",
      description: "Express delivery by Oct 8 - Oct 9 from $15.00"
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
                <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Product"
                  className="w-full object-contain h-96 rounded-lg mb-4" id="mainImage" />
                <div className="flex gap-1 py-4 justify-center items-center overflow-x-auto">

                  <div className='flex items-center justify-center h-full'>
                    <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
                      <ArrowLeft2 size="20" color="#fff" />
                    </button>
                  </div>

                  <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-2_a742998e-bcf1-4140-bb69-ecbeb631197a.jpg" alt="Thumbnail 1"
                    className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
                  />
                  <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-4_78fff263-d9ea-4374-bddb-135fd7577c17.jpg" alt="Thumbnail 2"
                    className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
                  />
                  <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-3_18d3c205-dd57-487b-93bb-88f502184864.jpg" alt="Thumbnail 3"
                    className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
                  />
                  <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Thumbnail 4"
                    className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
                  />

                  <div className='flex items-center justify-center h-full'>
                    <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
                      <ArrowRight2 size="20" color="#fff" />
                    </button>
                  </div>

                </div>
              </div>

              <div className="w-full md:w-1/2 px-4">
                <RenderProductInfo toggleDrawer={toggleDrawer} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default RenderProductSummary