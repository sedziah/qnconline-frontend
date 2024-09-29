import { ProductCategory } from '../../library/types'
import { CloseCircle, Trade } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import { IoMdClose } from "react-icons/io";


const MobileDrawer = ({ categories, setIsOpen }: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  categories: ProductCategory[]
}) => {
  return (
    <div
      className={`h-full`}
    >
      <div className=' fixed top-0 left-0 right-0 p-4 bg-white border-b border-lightGray/30 flex flex-row items-center justify-between'>
        <Image
          width={100}
          height={100}
          src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />

        <button onClick={() => setIsOpen(false)}>
          <IoMdClose size="24" color="#000" />
        </button>
      </div>

      <div className='mb-6 mt-24'>
        {categories.map((category) => (
          <a
            key={category.name}
            href={`/products?s=${category.slug}&name=${category.name}`}
            className='outline-none no-underline border-none'
          >
            <p className="px-3 py-2.5  border-b  hover:underline whitespace-nowrap text-black text-[13px] capitalize font-normal">

              {category.name}
            </p>
          </a>
        ))}
      </div>

      <div className='flex px-3 flex-col space-y-5'>
        <a href='/trade-in' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
          <Trade size="20" color="#000" />
          <span>Trade In</span>
        </a>
        <a href='/about' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
          <span>About us</span>
        </a>
        <a href='/help' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
          <span>Help</span>
        </a>
      </div>
      
    </div>
  )
}

export default MobileDrawer