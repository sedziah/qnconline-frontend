/* eslint-disable @next/next/no-img-element */
"use client"
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import { ArrowLeft } from 'iconsax-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TradeInPage = () => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState<number>(0)
  const steps = ["Your device", "Functionality", "Appearance"] // Will be sent dynamically based on the trade in type
  const [listItems, setListItems] = useState<{
    label: string
    value: string
  }[]>([
    {
      label: "Model",
      value: "ROG Phone 3"
    },
    {
      label: "Storage",
      value: "128 GB"
    }
  ])

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    } else {
      router.back()
    }
  }


  return (
    <>
      <DefaultNavbar />
      <div className='w-full grid grid-cols-1 lg:grid-cols-3'>
        <div className='hidden lg:block w-full h-screen bg-lightGray/20 pt-28   '>
          <div className='max-w-lg mx-auto w-full px-4 lg:px-20'>


            <button className="flex flex-row items-center gap-x-2">
              <ArrowLeft size="20" color="#000" />
              <p className='font-semibold text-sm underline text-black'>
                {activeStep === 0 ? "Back" : steps[activeStep]}
              </p>
            </button>

            <div className='mt-10 transition-all bg-white w-full rounded-md shadow-sm p-5'>
              {listItems?.map((item, index) => <div key={index} className={`py-4 capitalize flex flex-row items-center justify-between ${index !== 0 ? "border-t border-lightGray/20" : ""}`}>
                <p className='text-sm font-medium text-gray-500'>{item?.label}</p>
                <p className='text-sm text-black font-semibold'>{item?.value}</p>
              </div>)}
            </div>
            <div className='mt-20'>
              <img src='https://front-office.statics.backmarket.com/7c1d68ac99eade219e3285af64697c7d0989886e/img/buyback/buybackFunnel.svg' alt=''
                className='w-full h-36 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='w-full col-span-2 h-screen bg-lightGray/10 pt-28 px-4 '>
          <div className='w-full max-w-3xl mx-auto'>

            <div>
              <p className='text-center text-base font-normal'>
                {`${activeStep + 1}/${steps?.length} ${steps[activeStep]}`} 
              </p>

              <div className='mt-6 h-0.5 rounded-full w-full bg-lightGray/40'>
                <div
                  style={{
                    width: `${((activeStep + 1) / (steps?.length)) * 100}%`
                  }}
                className={`h-0.5 rounded-full bg-primary`}
              />
              </div>
            </div>

            
            <div className="mt-10">
              
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default TradeInPage