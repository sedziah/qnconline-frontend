/* eslint-disable @next/next/no-img-element */
"use client"
import SigninComponent from '@/components/auth/SigninComponent'
import SignupComponent from '@/components/auth/SignupComponent'
import React, { useState } from 'react'

const SigninPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const forms = ["Sign In", "Register"]

  return (
    <div className='px-4 h-screen overflow-hidden overflow-y-scroll bg-bglight flex items-center justify-center'>
      <div className='w-full max-w-lg mx-auto'>
        <h1 className='text-2xl font-semibold text-black'>
          {activeStep === 0 ? "Sign In" : "Create an account"}
        </h1>


        <div className='my-5 border border-black px-2 py-1.5 rounded-full flex flex-row items-center gap-2'>
          {forms?.map((item, index) => <button
            style={{
              transitionTimingFunction: "linear",
              transition: "0.7s ease-out",
            }}
            key={item} className={`w-full h-10 rounded-full transition-all ${index === activeStep ? "bg-black hover:bg-black/90" : "bg-white"} flex items-center justify-center`}
            onClick={() => setActiveStep(index)}>
            <p className={`${index === activeStep ? "text-white font-semibold" : "text-black font-normal"} text-base`}>
              {item}
            </p>
          </button>
          )}
        </div>


        {{
          "Sign In": <SigninComponent />,
          "Register": <SignupComponent />,
        }[forms[activeStep]]}

        <div className='my-10'>
          <div className='flex flex-row items-center gap-3'>
            <div className='h-0.5 w-full bg-lightGray/40'></div>
            <p className='w-full text-xs text-center text-black'>Or continue with</p>
            <div className='h-0.5 w-full bg-lightGray/40'></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-3">
          <button className='h-12 hover:bg-lightGray/20 text-sm border border-black  w-full rounded-full flex flex-row gap-x-2 items-center justify-center text-black font-semibold '>
            <img src='https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK' className='w-9 h-9 rounded-full object-contain' alt='google' />
            Google
          </button>
          <button className='h-12 hover:bg-lightGray/20 text-sm border border-black  w-full rounded-full flex flex-row gap-x-2 items-center justify-center text-black font-semibold '>
            <img src='https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png' className='w-9 h-9 rounded-full object-contain' alt='google' />
            Facebook
          </button>
          <button className='h-12 hover:bg-lightGray/20 text-sm border border-black  w-full rounded-full flex flex-row gap-x-2 items-center justify-center text-black font-semibold '>
            <img src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png' className='w-9 h-9 rounded-full object-contain' alt='google' />
            Facebook
          </button>
        </div>

      </div>
    </div>
  )
}

export default SigninPage