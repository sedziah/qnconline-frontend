import { Money2, ShoppingCart, Trade, Verify } from 'iconsax-react'
import React, { FC, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type PropType = {
  openFilter: boolean
  toogleFilterDrawer: () => void
}

const TradeInDrawer: FC<PropType> = ({ openFilter, toogleFilterDrawer }) => {
  const LIST = [
    {
      "title": "Get an offer",
      "description": "See an offer from a professional refurbisher in about 2 minutes.",
      icon: <Verify
        size="20"
        color="#000"
      />
    },
    {
      "title": "Add an item to your cart",
      "description": "Shop as usual and see your trade-in offer at checkout.",
      icon: <ShoppingCart
        size="20"
        color="#000"
      />
    },
    {
      "title": "Ship your trade-in for free",
      "description": "You’ll have 21 days to ship your item.",
      icon: <Trade
        size="20"
        color="#000"
      />
    },
    {
      "title": "Get cash money",
      "description": "Once your item is received and accepted, you'll get a direct deposit within 5 business days.",
      icon: <Money2
        size="28"
        color="#000"
      />
    }
  ]


  return (
    <Drawer
      key='trade-in'
      open={openFilter}
      onClose={toogleFilterDrawer}
      direction='right'
      zIndex={9999}
      className='h-full'
      size={"full"}
      style={{
        height: "100vh",
        // Responsive width
        width: "100%",
        minWidth: "450px",
        maxWidth: "400px",
        // Centered
        marginLeft: "auto",
        marginRight: "auto",
        overflowY: "scroll"
      }}
    >
      <div className=' fixed top-0 left-0 right-0 p-4 bg-white border-b border-lightGray/30 flex flex-row items-center justify-between'>

        <p className='text-base font-normal text-center flex-1 items-center justify-center'>
          Trade-In
        </p>

        <button onClick={toogleFilterDrawer}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>
      <div className='p-5 '>

        <img
          src='https://front-office.statics.backmarket.com/7c1d68ac99eade219e3285af64697c7d0989886e/img/product/funnel/step-trade-in.svg'
          className='w-full h-72 rounded-lg shadow-xl mt-16 object-cover' />


        <h2 className='text-lg md:text-xl lg:text-2xl text-center font-bold text-black mt-5 px-4'>
          See how Trade-in works
        </h2>


        <div className='mt-4 overflow-y-scroll'>
          {LIST?.map((item, key) => <div key={item?.title} className={`${key !== 0 ? "border-t border-lightGray/30" : "border-none"} py-3 flex flex-row  gap-x-5 my-3`}>
            {item?.icon}
            <div>
              <p className='text-base font-semibold text-black'>{item?.title}</p>
              <p className='text-[13px] text-gray-500 mt-2'>{item?.description}</p>
          </div>
          </div>)}
        </div>

      </div>
    </Drawer>
  )
}

export default TradeInDrawer