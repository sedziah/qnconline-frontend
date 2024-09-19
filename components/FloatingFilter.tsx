import React, { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import { FilterDrawer } from './Drawers/FIlterDrawer'


const FloatingFilter = () => {
  const [openFilter, setOpenFilter] = useState(false)

  const toogleFilterDrawer = () => setOpenFilter(!openFilter)

  return (
    <>
      <FilterDrawer openFilter={openFilter} toogleFilterDrawer={toogleFilterDrawer} />

      <div className='block lg:hidden md:hidden bg-white shadow-md transition-all border-t-2 border-lightGray/20 px-4 py-3 w-full fixed bottom-0 '>
        <div className='flex flex-row items-center justify-center w-full'>
          <button onClick={toogleFilterDrawer} className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Filters</p>
            <FaFilter />
          </button>
          <div className='h-8 w-0.5 border bg-lightGray/20'></div>
          <button className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Sort</p>
            <BiSortAlt2 />
          </button>
        </div>
      </div>
    </>
  )
}

export default FloatingFilter