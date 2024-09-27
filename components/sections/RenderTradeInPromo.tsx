/* eslint-disable @next/next/no-img-element */
import { Trade } from 'iconsax-react'
import React, { useState } from 'react'
import { IoIosBatteryCharging } from 'react-icons/io'
import { MdOutlineChevronRight } from 'react-icons/md'
import TradeInDrawer from '../Drawers/TradeInDrawer'

const RenderTradeInPromo = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedCondition, setCondition] = useState<number | null>(null)
  const conditions = [
    {
      id: 0,
      name: "No",
    },
    {
      id: 1,
      name: "Yes, trade in a device",
      description: "We'll buy back your old tech for cash, which could make today's total more like $217.30 after your trade-in."
    },
  ]


  return (
    <>
      <TradeInDrawer openFilter={openDrawer} toogleFilterDrawer={() => setOpenDrawer(!openDrawer)}
      />
      <div className='my-14 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 black md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Get this for <span className='italic'>even less.</span></h1>

          <button className='my-4 w-full justify-between hover:shadow-xl transition-opacity delay-300 flex items-center flex-row gap-x-3 bg-lightblue/60 p-4 rounded-lg'>
            <Trade className='text-black text-xl' size={30} />
            <p className='flex-1 text-[13px] text-start flex text-black font-normal leading-6 tracking-wider'>
              See how Trade-in works
            </p>
            <MdOutlineChevronRight />
          </button>
        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>

          <div className='relative w-full h-[500px] rounded-xl overflow-hidden bg-black'>
            <img className='w-full h-full object-cover' src="https://front-office.statics.backmarket.com/dfdee5ff2a0e466da1385d4b303bf0ee611b12d4/img/product/funnel/step-trade-in-square.svg" alt='placeholder' />
          </div>

          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Get this for <span className='italic'>even less.</span></h1>

              <button onClick={() => setOpenDrawer(!openDrawer)} className='my-4 w-full justify-between hover:shadow-xl transition-opacity delay-300 flex items-center flex-row gap-x-3 bg-lightblue/60 p-4 rounded-lg'>
                <Trade className='text-black text-xl' size={30} />
                <p className='flex-1 text-[13px] text-start flex text-black font-normal leading-6 tracking-wider'>
                  See how Trade-in works
                </p>
                <MdOutlineChevronRight />
              </button>
            </div>
            <div className=''>
              {conditions.map((condition, index) => (
                <button
                  onClick={() => {
                    setCondition(condition?.id)
                    if (index === 1) {
                      setOpenDrawer(true)
                    }
                  }}
                  key={condition?.id}
                  className={`w-full relative transition-opacity my-3  delay-150  gap-x-3 flex flex-row justify-between rounded-md p-3 border  hover:bg-[#dee2ff]/10 hover:border-l[#dee2ff]/40  ${selectedCondition === condition?.id ? 'bg-[#dee2ff]/40 border-l[#dee2ff]/40' : 'bg-transparent border-black/40'
                    }`}
                >
                  {condition?.name?.toLowerCase() === "premium" ? <></> :
                    <div className={`w-${(2 + index).toString()} p-1 h-${(2 + index).toString()} rounded-full border border-black ${selectedCondition === condition?.id ? "bg-black" : "bg-transparent"}`}></div>
                  }

                  <div className='flex-1 flex flex-col items-start'>
                    <p className={`${selectedCondition === condition?.id ? "font-bold" : "font-normal"} text-sm text-black`}>
                      {condition?.name}
                    </p>
                    <p className={`text-[13px] text-left text-black font-light`}>
                      {condition?.description}
                    </p>
                  </div>

                  {index !== 0 && <div className='absolute -top-2 right-4 capitalize rounded-md text-white bg-primary px-2 py-1 text-xs'>
                    Get cash back
                  </div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderTradeInPromo