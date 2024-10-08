import { MoneySend, ShieldTick, TruckFast } from 'iconsax-react'
import React from 'react'

export const CTAThree = () => {
  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>

      <div className="w-full px-5 py-7 bg-[#14213d] rounded-md shadow">

        <h1 className='text-base font-medium text-white'>
          Turn tech into cash
        </h1>

        <p className='text-sm text-lightGray font-normal mt-2'>
          Use your trade in cash to you your dream device
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-md">
              <ShieldTick size="28" color="#fff" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-semibold text-white'>Get an offer</h1>
              <p className="text-xs font-normal text-lightGray mt-2">
                See an offer from our partners within 5 minutes.
              </p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-md">
              <TruckFast size="28" color="#fff" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-semibold text-white'>Ship or Deliver </h1>
              <p className="text-xs font-normal text-lightGray mt-2">
                Transfer your data and ship or deliver your device to our service center.
              </p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-md">
              <MoneySend size="28" color="#fff" />
            </div>
            <div className="flex-1 w-full">
              <h1 className='text-sm font-semibold text-white'>Get paid</h1>
              <p className="text-xs font-normal text-lightGray mt-2">
                Recieve your direct deposit instantly after we receive your device.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
