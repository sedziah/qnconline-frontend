"use client"
import { COLORS } from '@/constants'
import { HambergerMenu, SearchNormal, ShoppingCart, Trade, User } from 'iconsax-react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  console.log("scrollPosition", scrollPosition)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div style={{
        zIndex: 8888,
        transitionTimingFunction: "linear",
        transition: "0.7s ease-out",
      }} className={`w-full transition  shadow z-50 bg-white ${scrollPosition > 275 ? "fixed" : "relative"}`}>
        {/* Mobile Nav */}
        <div className='lg:hidden px-4 py-2'>
          <div className='flex-row flex justify-between items-center'>
            <button>
              <HambergerMenu size="20" color="#000" />
            </button>
            <a href=''>
              <img src="./assets/logo-small.png" className='h-10 object-contain' alt='logo' />
            </a>
            <div className='flex flex-row items-center justify-center gap-x-3'>
              <a href=''>
                <User size="20" color="#000" />
              </a>
              <a href=''>
                <ShoppingCart size="20" color="#000" />
              </a>
            </div>
          </div>

          <div>
            <div className='flex-1 relative h-12'>
              <div className="pt-2 relative mx-auto text-black text-sm">
                <input className="border border-lightGray w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search" name="search" placeholder="Search">
                </input>
              </div>
              <button className='absolute right-2 top-1/3'>
                <SearchNormal
                  size="20"
                  color={COLORS.lightGray}
                />
              </button>
            </div>
          </div>
        </div>


        <div className='hidden lg:flex flex-row gap-x-12  justify-between items-center max-w-[87rem] mx-auto py-2'>
          <a href=''>
            <img src="./assets/logo-small.png" className='h-10 object-contain' alt='logo' />
          </a>


          <div className='flex flex-row items-center justify-center gap-x-5'>
            <a href='' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <Trade size="20" color="#000" />
              <span>Trade In</span>
            </a>
            <a href='about' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <span>About us</span>
            </a>
            <a href='help' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <span>Help</span>
            </a>
          </div>

          <div className='flex-1 relative h-12'>
            <div className="pt-2 relative mx-auto text-black text-sm">
              <input className="border border-lightGray w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search">
              </input>
            </div>
            <button className='absolute right-2 top-1/3'>
              <SearchNormal
                size="20"
                color={COLORS.lightGray}
              />
            </button>
          </div>

          <div className='flex flex-row items-center justify-center gap-x-3'>
            <a href=''>
              <User size="20" color="#000" />
            </a>
            <a href=''>
              <ShoppingCart size="20" color="#000" />
            </a>
          </div>
        </div>
        <div className='hidden sm:hidden lg:block bg-lightGray/20 overflow-hidden pl-7'>
          <div className='w-full flex flex-row'>
            <button className='flex w-[120px] flex-row gap-x-2 py-2.5'>
              <HambergerMenu size="20" color="#000" />
              <p className='text-sm capitalize font-semibold'>
                all items
              </p>
            </button>
            <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full flex flex-row items-center overflow-x-autoscrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              <div className='flex flex-row gap-x-6'>
                {DUMMYCATEGORIES?.map((item) => (
                  <a key={item} href='#' className='py-2.5 hover:underline whitespace-nowrap text-black  text-[13px] capitalize font-normal'>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const DUMMYCATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Health & Beauty",
  "Sports & Outdoors",
  "Books & Stationery",
  "Toys & Games",
  "Automotive",
  "Grocery",
  "Jewelry",
  "Watches",
  "Pet Supplies",
  "Baby Products",
  "Musical Instruments",
  "Office Supplies",
  "Furniture",
  "Garden & Outdoor",
  "Appliances",
  "Tools & Home Improvement",
  "Computers & Accessories",
  "Video Games",
  "Cameras & Photography",
  "Mobile Phones & Accessories",
  "Luggage & Travel Gear",
  "Movies & TV",
  "Art & Collectibles",
  "Handmade Products"
]


export default Navbar