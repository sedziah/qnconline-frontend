import { ArrowRight, Global, Lock1, Money, MoneySend, ShieldTick, TruckFast } from 'iconsax-react'
import React from 'react'

export const CTAFour = () => {
  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>

      <div className="w-full p-3 bg-lightGray/10 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
              <Money size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-medium text-black'>Competitive offers</h1>

            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
              <ArrowRight size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-medium text-black'>Super easy</h1>

            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
              <Lock1 size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-medium text-black'>Safe & secure</h1>

            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
              <Global size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-medium text-black'>Planet-friendly</h1>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
