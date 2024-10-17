/* eslint-disable @next/next/no-img-element */
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'

export const ConditionSelector = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>("Good")
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
    }
  ]


  return (
    <div className='my-7'>
      <p className={`text-sm text-black font-medium`}>
        Condition
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
        {conditions.map((condition, index) => (
          <button
            onClick={() => setSelectedColor(condition?.name)}
            key={condition?.id}
            className={`w-full relative transition-opacity delay-150  gap-x-3 flex flex-row items-center justify-between rounded-md p-3 border hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40  ${selectedColor === condition?.name ? 'bg-[#bde0fe]/40 border-l[#bde0fe]/40' : 'bg-transparent border-black/40'
              }`}
          >

            <div className='flex-1 flex flex-row items-center justify-between'>
              <p className={`${selectedColor === condition?.name ? "font-bold" : "font-normal"} text-sm text-black capitalize`}>
                {condition?.name}
              </p>

              <p className={`text-[13px] text-black font-light`}>
                ₵{condition?.price?.toFixed(2)}
              </p>
            </div>

            {index === 1 && <div className='absolute -top-3 right-4 capitalize rounded-md text-white bg-primary px-2 py-1 text-xs'>
              Staff pick
            </div>}
          </button>
        ))}
      </div>
    </div>
  )
}
