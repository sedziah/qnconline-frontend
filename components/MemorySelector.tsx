import React, { useState } from 'react'

const MemorySelector = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>("32 gig")
  const conditions = [
    {
      id: 0,
      name: "8 gig",
      isDisabled: false,
    },
    {
      id: 1,
      name: "16 gig",
      isDisabled: true,
    }, {
      id: 1,
      name: "32 gig",
      isDisabled: false,
    },
  ]

  return (
    <div className='my-10'>
      <p className={`text-sm text-black font-medium`}>
        Memory (GB)
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

export default MemorySelector