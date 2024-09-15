/* eslint-disable @next/next/no-img-element */
"use client"
import { COLORS } from '@/constants'
import { HambergerMenu, SearchNormal, ShoppingCart, Trade, User } from 'iconsax-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { apiService } from '@/library/services/apiService'
import { ProductCategory } from '@/library/types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import MobileDrawer from './MobileDrawer'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [categories, setCategories] = useState<ProductCategory[]>([])

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await apiService.getProductCategories()
        setCategories(fetchedCategories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        zIndex={9999}
        className='bla bla bla'
        size={300}
      >
        <MobileDrawer
          categories={categories}
          setIsOpen={setIsOpen}
        />
      </Drawer>

      <div style={{
        zIndex: 8888,
        transitionTimingFunction: "linear",
        transition: "transform 0.7s ease-out, opacity 0.7s ease-out"
      }} className={`w-full transition  shadow z-50 bg-white ${scrollPosition > 275 ? "fixed top-0" : "relative"}`}>
        {/* Mobile Nav */}
        <div className='lg:hidden px-4 py-2'>
          <div className='flex-row flex justify-between items-center'>
            <button onClick={toggleDrawer}>
              <HambergerMenu size="20" color="#000" />
            </button>
            <a href="/">
              <Image
                width={100}
                height={100}
                src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
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
          <a href='/'>
            <Image
              width={100}
              height={100}
              src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
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
        <div className='hidden md:hidden sm:hidden lg:block bg-lightGray/20 overflow-hidden pl-7'>
          <div className='w-full flex flex-row'>
            <button onClick={toggleDrawer} className='flex w-[120px] flex-row gap-x-2 py-2.5'>
              <HambergerMenu size="20" color="#000" />
              <p className='text-sm capitalize font-normal'>
                all items
              </p>
            </button>
            <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full flex flex-row items-center overflow-x-autoscrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              <div className='flex flex-row gap-x-6'>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <a
                      key={category.name}
                      href={`/products?s=${category.slug}&name=${category.name}`}
                      className="py-2.5 hover:underline whitespace-nowrap text-black text-[13px] capitalize font-normal"
                    >
                      {category.name}
                    </a>
                  ))
                ) : (
                  <div className="flex flex-row gap-3">
                    {Array(15)
                      .fill('')
                      .map((_, index) => (
                        <div
                          key={index}
                          className="h-6 w-20 bg-gray-200 rounded animate-pulse"
                        ></div>
                      ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
