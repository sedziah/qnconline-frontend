/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Dislike, Flag, MagicStar, Money2, RefreshCircle, ShoppingCart, Timer1, Trade, Verify } from 'iconsax-react'
import React, { FC, useEffect, useState } from 'react'
import { AiOutlineAlert } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { RiToolsFill } from 'react-icons/ri'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type PropType = {
  openFilter: boolean
  toggleFilterDrawer: () => void
}

const WarrantDrawer: FC<PropType> = ({ openFilter, toggleFilterDrawer }) => {
  const LIST1 = [
    {
      "title": "Just not that into your new device?",
      "description": "Return your item for any reason within the first 30 days of receiving it. All without having to say “it’s not you, it’s me.”",
      icon: <Dislike
        size="30"
        color="#000"
      />
    },
    {
      "title": "Returns are suuuper easy",
      "description": "Contact us via your Back Market account for simple return instructions.",
      icon: <Timer1
        size="24"
        color="#000"
      />
    },
    {
      "title": "Be reunited with your cash",
      "description": "Your original payment method will be refunded within 3 business days.",
      icon: <RefreshCircle
        size="24"
        color="#000"
      />
    },
  ]

  const LIST2 = [
    {
      "title": "We gotchu on defects for the first year",
      "description": "If your item has a technical defect within the first year, we’ll repair or replace it on our dime.",
      icon: <AiOutlineAlert
        size="30"
        color="#000"
      />
    },
    {
      "title": "Ship it back to the seller for free",
      "description": "We even cover the shipping costs to get your item to the seller. Wheeeee easy returns!",
      icon: <Timer1
        size="24"
        color="#000"
      />
    },
    {
      "title": "Get a repair or replacement on us",
      "description": "Your item will be repaired or replaced (if a repair isn’t possible) free of charge. Really.",
      icon: <RiToolsFill
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
          Our best in-class warranties
        </p>

        <button onClick={toggleFilterDrawer}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>

      <div className='p-5 '>

        <img
          src='https://front-office.statics.backmarket.com/1bb6f9ac10a8c3f2fe52ec16cd5481d3e723651c/img/reassurance/warranty-modal.svg'
          className='w-full h-52 mt-16 object-fill' />


        <div>
          <h2 className='text-lg font-semibold text-black mt-5'>
            Free 30-day returns
          </h2>


          <div className='my-4 border-b border-lightGray/30'>
            {LIST1?.map((item, key) => <div key={item?.title} className={`py-3 flex flex-row  gap-x-5 my-3`}>
              {item?.icon}
              <div>
                <p className='text-base font-semibold text-black'>{item?.title}</p>
                <p className='text-[13px] text-gray-500 mt-2'>{item?.description}</p>
              </div>
            </div>)}
          </div>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-black mt-5'>
            1-year warranty
          </h2>


          <div className='my-4'>
            {LIST2?.map((item, key) => <div key={item?.title} className={`py-3 flex flex-row  gap-x-5 my-3`}>
              {item?.icon}
              <div>
                <p className='text-base font-semibold text-black'>{item?.title}</p>
                <p className='text-[13px] text-gray-500 mt-2'>{item?.description}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default WarrantDrawer