import React, { useState } from 'react'
import { PiEyesFill } from 'react-icons/pi'
import ApperanceCarousel from '../ApperanceCarousel'

const RenderAppearanceControl = () => {
  const [selectedCondition, setCondition] = useState<number | null>(null)
  const conditions = [
    {
      id: 0,
      name: "Fair",
      price: 100,
    },
    {
      id: 1,
      name: "Good",
      price: 150,
    },
    {
      id: 2,
      name: "Excellent",
      price: 200,
    },
    {
      id: 3,
      name: "Premium",
      price: 250,
    },
  ]

  return (
    <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
      <div className='w-full mb-3 block md:hidden lg:hidden'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Select the <span className='italic'>appearance</span></h1>

        <p className='text-[13px] text-black font-normal leading-6 tracking-wider'>
          All guaranteed 100% functional
        </p>
      </div>

      <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
        <ApperanceCarousel />
        <div>
          <div className='w-full hidden md:block lg:block'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Select the <span className='italic'>appearance</span></h1>

            <div className='my-4 flex flex-row gap-x-3 bg-bglight p-4 rounded-lg'>
              <PiEyesFill className='text-black text-xl' size={30} />
              <p className='text-[13px] text-black font-semibold leading-6 tracking-wider'>
                Appearance describes the look of the device. Fair, Good, Excellent, Premium — all 100% functional. These images are examples only.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-3 gap-y-3'>
            {conditions.map((condition, index) => (
              <button
                onClick={() => setCondition(condition?.id)}
                key={condition?.id}
                className={`w-full transition-opacity  delay-150  gap-x-3 flex flex-row items-center rounded-md p-3 border  hover:bg-lightblue/10 hover:border-lightblue/40  ${selectedCondition === condition?.id ? 'bg-lightblue/40 border-lightblue/40' : 'bg-transparent border-black/40'
                  }`}
              >
                {condition?.name?.toLowerCase() === "premium" ? <></> :
                  <div className={`w-${(2 + index).toString()} p-1 h-${(2 + index).toString()} rounded-full border border-black ${selectedCondition === condition?.id ? "bg-black" : "bg-transparent"}`}></div>
                }

                <div className='flex flex-col items-start'>
                  <p className={`${selectedCondition === condition?.id ? "font-bold" : "font-normal"} text-sm text-black`}>
                    {condition?.name}
                  </p>
                  <p className={`text-[13px] text-black font-light`}>
                    ₵{condition?.price?.toFixed(2)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenderAppearanceControl