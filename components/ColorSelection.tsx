import React, { useState } from 'react'

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const conditions = [
    {
      id: 0,
      name: "black",
      price: 100,
      code: "#000"
    },
    {
      id: 1,
      name: "red",
      price: 150,
      code: "#dc2f02"
    },
    {
      id: 2,
      name: "blue",
      price: 200,
      code: "#90e0ef"
    },
  ]


  return (
    <div className='my-7'>
      <p className={`text-sm text-black font-medium`}>
        Color
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
        {conditions.map((condition, index) => (
          <button
            onClick={() => setSelectedColor(condition?.code)}
            key={condition?.id}
            className={`w-full transition-opacity delay-150  gap-x-3 flex flex-row items-center justify-between rounded-md p-3 border  hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40  ${selectedColor === condition?.code ? 'bg-[#bde0fe]/40 border-l[#bde0fe]/40' : 'bg-transparent border-black/40'
              }`}
          >


            <div className='flex-1 flex flex-col items-start'>
              <p className={`${selectedColor === condition?.code ? "font-bold" : "font-normal"} text-sm text-black capitalize`}>
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
  )
}

export default ColorSelection