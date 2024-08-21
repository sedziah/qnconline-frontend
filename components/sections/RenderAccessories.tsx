import React from 'react'
import ProductCategoryCard from '../Cards/ProductCategoryCard'

const RenderAccessories = () => {
  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>
      <h2 className='text-base font-semibold'>Accessories, PCs, and more</h2>
      <p className='text-base text-black/50 font-normal'>We’re more than just smartphones</p>


      <div className='mt-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
          <ProductCategoryCard />
          <ProductCategoryCard />
        </div>
        <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
          <ProductCategoryCard />
          <ProductCategoryCard />
          <ProductCategoryCard />
        </div>
      </div>
    </div>
  )
}

export default RenderAccessories