/* eslint-disable @next/next/no-img-element */
import { COLORS } from '@/constants'
import { ArrowLeft2, ArrowRight2, Lock1, Timer1, Trade, TruckFast, Verify } from 'iconsax-react'
import React, { useState } from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import TradeInDrawer from '../Drawers/TradeInDrawer'
import RefurbishDrawer from '../Drawers/RefurbishDrawer'
import WarrantDrawer from '../Drawers/WarrantDrawer'
import CarrierDrawer from '../Drawers/CarrierDrawer'

type DrawersState = {
  tradeIn: boolean
  refurbish: boolean
  warrant: boolean
  carrier: boolean
}


const RenderProductSummary = () => {
  const [drawers, setDrawers] = useState<DrawersState>({
    tradeIn: false,
    refurbish: false,
    warrant: false,
    carrier: false,
  })


  const toggleDrawer = (drawerName: keyof DrawersState) => {
    setDrawers((prev) => ({
      ...prev,
      [drawerName]: !prev[drawerName],
    }))
  }

  const ProductStats = [
    {
      icon: <TruckFast size={20} />,
      title: "Free delivery by Oct 1 - Oct 2",
      description: "Express delivery by Oct 8 - Oct 9 from $15.00"
    },
    {
      icon: <Lock1 size={20} />,
      title: "Works with all carriers",
      onClick: () => toggleDrawer('carrier')
    },
    {
      icon: <Timer1 size={20} />,
      title: "Free 30-day returns",
      description: "1-year warranty",
      onClick: () => toggleDrawer('warrant')
    },
    {
      icon: <Verify size={20} />,
      title: "Verified Refurbished in the US",
      onClick: () => toggleDrawer('refurbish')
    }
  ]

  return (
    <>
      <TradeInDrawer
        openFilter={drawers.tradeIn}
        toggleFilterDrawer={() => toggleDrawer('tradeIn')}
      />

      <RefurbishDrawer
        openFilter={drawers.refurbish}
        toggleFilterDrawer={() => toggleDrawer('refurbish')}
      />

      <WarrantDrawer
        openFilter={drawers.warrant}
        toggleFilterDrawer={() => toggleDrawer('warrant')}
      />

      <CarrierDrawer
        openFilter={drawers.carrier}
        toggleFilterDrawer={() => toggleDrawer('carrier')}
      />

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Product"
                  className="w-full object-contain h-96 rounded-lg mb-4" id="mainImage" />
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

              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-2xl font-bold mb-2">MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core GPU - 8GB RAM - SSD 128GB</h2>

                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-4 text-yellow-500">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-4 text-yellow-500">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-4 text-yellow-500">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-4 text-yellow-500">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-4 text-yellow-500">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd" />
                  </svg>
                  <span className="ml-2 text-xs text-gray-600">4.5 (120 reviews)</span>
                </div>
                <div className="mb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className=''>

                    <span className="text-2xl font-bold mr-2">$349.99</span>
                    <span className="text-gray-500 line-through">$399.99</span>
                  </div>
                  <div className="flex space-x-4 mb-2">
                    <button
                      className="bg-primary flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-[#f75b21] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      Add to Cart
                    </button>
                    <button
                      className="bg-gray-100 flex gap-2 items-center  text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 text-sm">
                  Experience premium sound quality and industry-leading noise cancellation
                  with
                  these wireless headphones. Perfect for music lovers and frequent travelers.
                </p>

                <button onClick={() => toggleDrawer('tradeIn')} className='bg-lightGray/30 transition-all hover:bg-lightGray/40 flex flex-row items-center justify-between py-2 gap-x-2 px-4 rounded-full'>
                  <Trade size="20" color={COLORS.primary} />
                  <p className='text-xs text-black'>Get this for even less with Trade-in</p>
                  <MdOutlineChevronRight />
                </button>

                <div className="py-4 border-t border-b b border-lightGray mt-7 grid grid-cols-2 gap-5">
                  {ProductStats?.map((info) => <button key={info?.title}
                    className='w-full flex flex-row items-center justify-center gap-x-1'
                    onClick={info?.onClick!}
                  >
                    <div className='w-full flex flex-row items-center'>
                      <div className='flex items-center justify-center rounded-lg w-10 h-10 bg-lightblue'>
                        {info?.icon}
                      </div>
                      <div className='flex-1 ml-3 items-start justify-start text-left'>
                        <p className='text-xs text-black'>{info?.title}</p>
                        {info.description && <p className='text-xs text-black'>{info?.description}</p>}
                      </div>
                    </div>
                    {info?.onClick && <MdOutlineChevronRight />}
                  </button>)}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default RenderProductSummary