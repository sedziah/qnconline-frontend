/* eslint-disable @next/next/no-img-element */
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'

export const RenderColorSelector = () => {
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
    {
      id: 2,
      name: "purple",
      price: 120,
      code: "#c8b6ff"
    },
    {
      id: 2,
      name: "white",
      price: 200,
      code: "#ffffff"
    },
    {
      id: 2,
      name: "green",
      price: 160,
      code: "#74c69d"
    },
  ]


  return (
    <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
      <div className='w-full mb-3 block md:hidden lg:hidden'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Finally, select the&nbsp;<span className='italic'>color</span></h1>
      </div>

      <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
        <div className="w-full  mx-auto px-4 mb-8 flex flex-col items-center justify-center">
          <div className='w-full md:w-1/2 h-[350px] flex items-center justify-center'>
            <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Product"
              className="md:object-contain lg:object-cover w-full h-full rounded-lg mb-4" id="mainImage" />
          </div>
          <div className="flex gap-1 py-4 justify-center items-center overflow-x-auto">

            <div className='flex items-center justify-center h-full'>
              <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
                <ArrowLeft2 size="20" color="#fff" />
              </button>
            </div>

            <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-2_a742998e-bcf1-4140-bb69-ecbeb631197a.jpg" alt="Thumbnail 1"
              className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
            />
            <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-4_78fff263-d9ea-4374-bddb-135fd7577c17.jpg" alt="Thumbnail 2"
              className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
            />
            <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-3_18d3c205-dd57-487b-93bb-88f502184864.jpg" alt="Thumbnail 3"
              className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
            />
            <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Thumbnail 4"
              className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
            />

            <div className='flex items-center justify-center h-full'>
              <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
                <ArrowRight2 size="20" color="#fff" />
              </button>
            </div>

          </div>
        </div>

        <div>
          <div className='w-full hidden md:block lg:block'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Finally, select the&nbsp;<span className='italic'>color</span></h1>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
            {conditions.map((condition, index) => (
              <button
                onClick={() => setSelectedColor(condition?.code)}
                key={condition?.id}
                className={`w-full transition-opacity delay-150  gap-x-3 flex flex-row items-center justify-between rounded-md p-3 border  hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40  ${selectedColor === condition?.code ? 'bg-[#bde0fe]/40 border-l[#bde0fe]/40' : 'bg-transparent border-black/40'
                  }`}
              >
                {condition?.name?.toLowerCase() === "premium" ? <></> :
                  <div style={{
                    background: condition?.code
                  }} className={`w-3.5 h-3.5 rounded-full border border-black`}></div>
                }

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
      </div>
    </div>
  )
}
