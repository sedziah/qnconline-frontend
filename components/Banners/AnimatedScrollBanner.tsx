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
import ColorSelection from '../ColorSelection'
import { ConditionSelector } from '../ConditionSelector'
import { ImagePreview } from './ImagePreview'

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

        <div className="pt-16 w-full grid gap-10 grid-cols-1 md:grid-cols-2">
          <div ref={leftRef} className="w-full transition-opacity duration-300">
            <div className="w-full flex -mt-16 items-center justify-center h-full max-w-md mx-auto">
              <ImagePreview />
            </div>
          </div>

          <div ref={rightRef} className="overflow-y-scroll w-full max-h-screen ">
            <div className="w-full px-4">
              <RenderProductInfo toggleDrawer={toggleDrawer} />

              {/* Condition */}
              <ConditionSelector />


              {/* Processor type and speed */}
              <ProcessorSelector />

              {/* Memory */}
              <MemorySelector />


              {/* Storage */}
              <StorageSelector />


              {/* Color */}
              <ColorSelection />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default AnimatedScrollBanner

