"use client"
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TradeInPage = () => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState<number>(0)
  const steps = ["specification", "Functionality", "Appearance"]

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
        <div className='hidden lg:block w-full h-screen bg-lightGray/20 pt-28 px-4 max-w-6xl mx-auto'>
        </div>
        <div className='w-full col-span-2 h-screen bg-lightGray/10 pt-28 px-4 max-w-6xl mx-auto'>
        
        </div>
      </div>
    </>
  )
}

export default TradeInPage