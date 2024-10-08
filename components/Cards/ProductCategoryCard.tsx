import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCategoryCard = () => {
  return (
    <div className='rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow'>
      <Link href=''>
        <div className="h-56 w-full">
          <a href="#">
            <Image
              width={100}
              height={200}
              className="mx-auto h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
            <Image
              width={200}
              height={100}
              className="mx-auto hidden h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
          </a>
        </div>
        <div className='pt-6'>
          <h1 className="text-sm font-medium leading-tight text-gray-900 hover:underline ">Apple iMac 27``, 1TB HDD, Retina 5K Display, M3 Max</h1>
          <p className="text-sm font-medium text-gray-500 ">Sustainably sourced audio</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCategoryCard