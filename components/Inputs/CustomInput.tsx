import React from 'react'
import { IoClose } from 'react-icons/io5'

type PropType = {
  labal: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  value: string
  type?: string
  placeholder?: string
}

const CustomInput = ({ labal, onChange, value, placeholder, type }: PropType) => {
  return (
    <div className="relative">
      <input value={value} onChange={onChange} type={type} id={labal} className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-sm text-black border hover:bg-lightGray/20 border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-lightGray peer" placeholder={placeholder} />
      <label htmlFor={labal} className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{labal}</label>

      {value?.trim()?.length > 1 && <button className='absolute z-50 top-1/4 right-2 w-6 h-6 hover:bg-lightGray/20 border border-black rounded-full flex items-center justify-center text-sm'>
        <IoClose />
      </button>}
    </div>
  )
}

export default CustomInput