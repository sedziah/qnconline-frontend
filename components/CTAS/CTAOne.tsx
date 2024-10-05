import { MoneyChange, SecurityUser, TruckFast, Verify } from 'iconsax-react'
import React from 'react'

export const CTAOne = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mx-4 overflow-x-auto">
        {/* Inner container with flex-row to enable horizontal scroll */}
        <div className="flex flex-row items-center justify-between md:mx-4 bg-bglight p-6 rounded-lg min-w-max">
          {/* Each item */}
          <div className="w-60 flex flex-row capitalize items-center gap-x-2">
            <Verify size="20" color="#374151" />
            <p className="font-normal text-sm text-gray-700">1-year warranty</p>
          </div>
          <div className="w-60 flex flex-row capitalize items-center gap-x-2">
            <TruckFast size="20" color="#374151" />
            <p className="font-normal text-sm text-gray-700">Free standard shipping</p>
          </div>
          <div className="w-60 flex flex-row capitalize items-center gap-x-2">
            <MoneyChange size="20" color="#374151" />
            <p className="font-normal text-sm text-gray-700">Free 30-day returns</p>
          </div>
          <div className="w-60 flex flex-row capitalize items-center gap-x-2">
            <SecurityUser size="20" color="#374151" />
            <p className="font-normal text-sm text-gray-700">Friendly customer service</p>
          </div>
        </div>
      </div>
    </div>

  )
}
