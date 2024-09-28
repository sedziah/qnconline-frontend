/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Money2, ShoppingCart, Trade, Verify } from 'iconsax-react'
import React, { FC, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type PropType = {
  openFilter: boolean
  toogleFilterDrawer: () => void
}

const BatteryDrawer = ({ openFilter, toogleFilterDrawer }: PropType) => {

  return (
    <Drawer
      key='battery'
      open={openFilter}
      onClose={() => toogleFilterDrawer()}
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
          Battery Options
        </p>

        <button onClick={() => toogleFilterDrawer()}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>
      <div className='p-5 '>

        <img
          src='https://front-office.statics.backmarket.com/dfdee5ff2a0e466da1385d4b303bf0ee611b12d4/img/product/funnel/step-battery-square.svg'
          className='w-full h-72 rounded-lg shadow-xl mt-16 object-cover' />


        <h2 className='text-lg md:text-xl lg:text-2xl text-center font-bold text-black mt-5 px-4'>
          See how Trade-in works
        </h2>


        <div className='mt-4 overflow-y-scroll'>
         
        </div>

      </div>
    </Drawer>
  )
}

export default BatteryDrawer