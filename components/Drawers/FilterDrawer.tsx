import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import FloatingButton from '../FloatingButton'
import FilterSection from '../Filters/NewFilter'

type PropType = {
  openFilter: boolean
  toogleFilterDrawer: () => void
  specifications: Record<string, string[]>
  handleFiltersChange: (filters: Record<string, string[]>) => void
  productCount: number
}

export const FilterDrawer = ({ openFilter, productCount, toogleFilterDrawer, specifications, handleFiltersChange }: PropType) => {

  return (
    <Drawer
      open={openFilter}
      onClose={toogleFilterDrawer}
      direction='bottom'
      zIndex={9999}
      className='h-full'
      size={"full"}
      style={{
        height: "100vh"
      }}
    >
      <div className='px-4 flex w-full bg-white z-50 fixed top-0 flex-row items-center justify-between'>
        <button onClick={toogleFilterDrawer} className='w-10 h-10 text-3xl text-black'>
          <IoMdClose />
        </button>
        <h1 className='text-base text-black font-normal text-center'>Filter</h1>
        <div className="w-16"></div>
      </div>

      <div className='h-full overflow-y-scroll px-4 mt-14'>
        <FilterSection specifications={specifications} onFiltersChange={handleFiltersChange} />
      </div>



      <FloatingButton label={`See all ${productCount} products`} onClick={toogleFilterDrawer} />
    </Drawer>
  )
}
