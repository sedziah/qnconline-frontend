import { Card, Mobile, MoneySend, Verify } from 'iconsax-react'
import React from 'react'

const CTAFive = () => {
  return (
    <div className="my-16 px-4 w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl lg:text-5xl text-center font-bold text-black">
          Tech better with us.
        </h2>
        <p className="text-base mt-1 text-center font-semibold text-black">
          Buy and sell tech that’s better for the planet.
        </p>
      </div>

      <div className="mt-10 w-full p-3 bg-white rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-bglight rounded-md">
              <Verify size="20" color="#374151" />
            </div>
            <div className="flex-1 w-full">
              <a href='/help'>
                <h1 className='underline text-sm font-medium text-black'>Quality Products</h1>
              </a>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-bglight rounded-md">
              <MoneySend size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <a href='/trade-in'>
                <h1 className='underline text-sm font-medium text-black'>Cashback with Trade-in</h1>
              </a>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-bglight rounded-md">
              <Card size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <a href='/help'>
                <h1 className='underline text-sm font-medium text-black'>Pay-as-you-go</h1>
              </a>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-10 h-10 flex items-center justify-center bg-bglight rounded-md">
              <Mobile size="20" color="#000" />
            </div>
            <div className="flex-1 w-full">
              <a href='/app-features'>
                <h1 className='underline text-sm font-medium text-black'>App exclusive features</h1>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CTAFive