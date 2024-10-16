import React, { useState } from 'react'

const ProcessorSelector = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>("Core i5 2.0GHz")
  const conditions = [
    {
      id: 0,
      name: "Core i5 1.4GHz",
      isDisabled: false,
    },
    {
      id: 1,
      name: "Core i5 2.0GHz",
      isDisabled: false,
    }, {
      id: 2,
      name: "Core i5 3.0GHz",
      isDisabled: false,
    },
    {
      id: 3,
      name: "Core i5 4.0GHz",
      isDisabled: false,
    }
  ]

  return (
    <div className='my-10'>
      <p className={`text-sm text-black font-medium`}>
        Processor type and speed
      </p>

      <div className='grid grid-cols-2 gap-3 mt-5'>
        {conditions.map((condition, index) => (
          <button
            disabled={condition?.isDisabled}
            onClick={() => setSelectedColor(condition?.name)}
            key={condition?.id}
            className={`w-full transition-opacity delay-150 gap-x-3 flex flex-row items-center justify-between rounded-md p-3 border 
            ${condition?.isDisabled ? 'bg-gray-200 hover:bg-gray-200' : 'bg-transparent border-black/40'} 
           ${selectedColor === condition?.name ? 'bg-[#bde0fe]/50 hover:bg-[#bde0fe]/50' : 'hover:bg-[#bde0fe]/50 '}
            `}
          >
            <div className='flex-1 flex flex-col items-start'>
              <p className={`${selectedColor === condition?.name ? "font-bold" : "font-normal"} text-sm text-black capitalize`}>
                {condition?.name}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProcessorSelector