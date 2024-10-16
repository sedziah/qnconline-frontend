/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../breadcrumb'
import { ArrowLeft2, ArrowRight2, Lock1, Timer1, Trade, TruckFast, Verify } from 'iconsax-react'
import { DrawersState } from '../sections/RenderProductSummary'
import TradeInDrawer from '../Drawers/TradeInDrawer'
import RefurbishDrawer from '../Drawers/RefurbishDrawer'
import WarrantDrawer from '../Drawers/WarrantDrawer'
import CarrierDrawer from '../Drawers/CarrierDrawer'
import RenderProductInfo from '../sections/RenderProductInfo'
import MemorySelector from '../MemorySelector'
import ProcessorSelector from '../ProcessorSelector'
import StorageSelector from '../StorageSelector'

type PropType = {
  breadcrumbItems: {
    label: string
    href?: string
  }[]
}
const AnimatedScrollBanner = ({ breadcrumbItems }: PropType) => {
  const rightRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

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


  useEffect(() => {
    const handleScroll = () => {
      if (rightRef.current && leftRef.current) {
        const rightScrollHeight = rightRef.current.scrollHeight
        const rightScrollTop = rightRef.current.scrollTop
        const rightClientHeight = rightRef.current.clientHeight

        if (rightScrollTop + rightClientHeight >= rightScrollHeight) {
          leftRef.current.style.opacity = '1'
        } else {
          leftRef.current.style.opacity = '1'
        }
      }
    }

    const rightElement = rightRef.current
    if (rightElement) {
      rightElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (rightElement) {
        rightElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

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


      <div className="bg-white w-full ">

        {/* <div className="max-w-6xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div> */}

        <div className="pt-16 w-full grid gap-10 grid-cols-1 md:grid-cols-2">
          <div ref={leftRef} className="w-full transition-opacity duration-300">
            <div className="w-full flex items-center justify-center h-full max-w-md mx-auto">
              <div className="w-full -mt-16">
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
            </div>
          </div>

          <div ref={rightRef} className="overflow-y-scroll w-full max-h-screen ">
            <div className="w-full px-4">
              <RenderProductInfo toggleDrawer={toggleDrawer} />
              {/* Specifications */}

              {/* Condition */}


              {/* Processor type and speed */}
              <ProcessorSelector />

              {/* Memory */}
              <MemorySelector />


              {/* Storage */}
              <StorageSelector />


              {/* Color */}



            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default AnimatedScrollBanner

