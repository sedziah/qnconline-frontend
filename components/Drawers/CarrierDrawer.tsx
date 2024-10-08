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

const CarrierDrawer: FC<PropType> = ({ openFilter, toggleFilterDrawer }) => {
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
        overflowY: "scroll",
      }}
    >
      <div className='fixed top-0 left-0 right-0 p-4 bg-white border-b border-lightGray/30 flex flex-row items-center justify-between'>

        <p className='text-base font-normal text-center flex-1 items-center justify-center'>
          What are unlocked phones?
        </p>

        <button onClick={toggleFilterDrawer}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>

      <div className='p-5 '>

        <img
          src='https://front-office.statics.backmarket.com/1bb6f9ac10a8c3f2fe52ec16cd5481d3e723651c/img/product/carriers-modal.svg'
          className='w-full h-72 mt-16 object-fill' />


        <div>
          <h2 className='text-lg md:text-xl lg:text-2xl text-center font-bold text-black mt-5 px-4'>
            Unlocked phones: works with all carriers
          </h2>

          <p className='text-[13px] text-black font-light leading-6 mt-4'>
            If you have an unlocked phone, you can connect to any carrier in the US and be able to switch carriers in the future.

            Not sure if the phone you’re looking at on Back Market is unlocked? Check the device title or <a href="/">
              <span className="font-semibold underline">view all our unlocked phones here</span>
            </a>
          </p>

          <div className='my-10 px-12'>
            <div className='bg-white rounded-md overflow-hidden shadow-lg'>
              <img
                src='https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://front-office.statics.backmarket.com/1bb6f9ac10a8c3f2fe52ec16cd5481d3e723651c/img/product/carriers-modal-guide.png'
                className='w-full h-40 object-cover' />
              <div className="px-4 pt-2 pb-4">
                <h2 className="text-xs font-medium text-lightGray">Event</h2>
                <p className="mb-2 text-sm text-black font-semibold">Why is refurbished better than new?</p>
                <p className="mt-2 text-sm text-black font-light">When comparing new versus refurbished tech, refurbished takes the cake. Here’s why.</p>
              </div>
            </div>
          </div>


          <h2 className='text-lg font-bold text-black mt-5'>
            What are locked phones?
          </h2>
          <p className='text-[13px] text-black font-light leading-6 mt-4'>
            Locked phones are connected to a specific carrier. A software-level lock on the device, often called firmware, prevents the user from using the phone with another carrier.

            Not sure if the phone you’re looking at on Back Market is locked? <a href="/">
              <span className="font-semibold underline">You can look up phones by carrier by using the side navigation</span>
            </a>
          </p>


          {/* <div className='my-4 border-b border-lightGray/30'>
            {LIST1?.map((item, key) => <div key={item?.title} className={`py-3 flex flex-row  gap-x-5 my-3`}>
              {item?.icon}
              <div>
                <p className='text-base font-semibold text-black'>{item?.title}</p>
                <p className='text-[13px] text-gray-500 mt-2'>{item?.description}</p>
              </div>
            </div>)}
          </div> */}
        </div>


      </div>
    </Drawer>
  )
}

export default CarrierDrawer