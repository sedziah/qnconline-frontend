/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Flag, MagicStar, Money2, ShoppingCart, Trade, Verify } from 'iconsax-react'
import React, { FC, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type PropType = {
  openFilter: boolean
  toggleFilterDrawer: () => void
}

const RefurbishDrawer: FC<PropType> = ({ openFilter, toggleFilterDrawer }) => {
  const LIST = [
    {
      "title": "100% fully functional",
      "description": "Tested and checked thoroughly, backed by a 1-year warranty and free 30-day returns.",
      icon: <Verify
        size="24"
        color="#000"
      />
    },
    {
      "title": "Clean slate",
      "description": "Squeaky clean inside and out, complete with a factory data reset.",
      icon: <MagicStar
        size="24"
        color="#000"
      />
    },
    {
      "title": "No red flags",
      "description": "No malware in sight. Device not locked, stolen, or fraudulently sourced.",
      icon: <Flag
        size="24"
        color="#000"
      />
    },
  ]


  return (
    <Drawer
      key='trade-in'
      open={openFilter}
      onClose={toggleFilterDrawer}
      direction='right'
      zIndex={9999}
      className='h-full'
      size={"full"}
      style={{
        height: "100vh",
        // Responsive width
        width: "100%",
        minWidth: "250px",
        maxWidth: "400px",
        // Centered
        marginLeft: "auto",
        background: '#f8f9fc',

        marginRight: "auto",
        overflowY: "scroll"
      }}
    >
      <div className='fixed top-0 left-0 right-0 p-4 bg-white border-b border-lightGray/30 flex flex-row items-center justify-between'>

        <p className='text-base font-normal text-center flex-1 items-center justify-center'>
          What is Verified Refurbished?
        </p>

        <button onClick={toggleFilterDrawer}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>

      <div className='p-5 '>

        <img
          src='https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://front-office.statics.backmarket.com/1bb6f9ac10a8c3f2fe52ec16cd5481d3e723651c/img/product/verified-refurbished/illustration.png'
          className='w-full h-52 rounded-lg shadow-xl mt-16 object-cover' />


        <h2 className='text-lg md:text-xl lg:text-2xl text-center font-bold text-black mt-5 px-4'>
          This device is Verified Refurbished
        </h2>


        <div className='my-4 overflow-y-scroll'>
          {LIST?.map((item, key) => <div key={item?.title} className={`${key !== 0 ? "border-t border-lightGray/30" : "border-none"} py-3 flex flex-row  gap-x-5 my-3`}>
            {item?.icon}
            <div>
              <p className='text-base font-semibold text-black'>{item?.title}</p>
              <p className='text-[13px] text-gray-500 mt-2'>{item?.description}</p>
            </div>
          </div>)}
        </div>

        <a href='/quality'>
          <button className='text-sm items-center justify-center w-full font-semibold text-white bg-primary hover:bg-primary/90 rounded-md px-3 py-3'>
            Discover Verified Refurbished
          </button>
        </a>
      </div>
    </Drawer>
  )
}

export default RefurbishDrawer