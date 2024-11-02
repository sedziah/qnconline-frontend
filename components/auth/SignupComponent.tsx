import React from 'react'
import CustomInput from '../Inputs/CustomInput'

const SignupComponent = () => {
  return (
    <div className='transition-all w-full'
      style={{
        transitionTimingFunction: "linear",
        transition: "0.7s ease-out",
      }}
    >
      <div className='space-y-3 mb-7'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3'>
          <CustomInput
            labal='Username'
            onChange={(e) => { }}
            value=''
            type='test'
            placeholder=''
          />

          <CustomInput
            labal='Other names'
            onChange={(e) => { }}
            value=''
            type='test'
            placeholder=''
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3'>
          <CustomInput
            labal='Primary Phone Number'
            onChange={(e) => { }}
            value=''
            type='tel'
            placeholder=''
          />

          <CustomInput
            labal='Alternate Phone Number'
            onChange={(e) => { }}
            value=''
            type='test'
            placeholder=''
          />
        </div>
        <CustomInput
          labal='Password'
          onChange={(e) => { }}
          value=''
          type='password'
          placeholder=''
        />
      </div>

      <div>
        <p className='text-sm my-5 text-gray-500 font-normal'>
          By<span className='font-semibold text-gray-500'>&nbsp;Creating an account,&nbsp;</span>you agree to our&nbsp;<span className='underline'><a href=''>User Aggreement</a></span>&nbsp;and acknowledge reading our&nbsp;<span className='underline'><a href=''>Privacy Policy</a></span>
        </p>
      </div>


      <button className='h-12 bg-primary w-full rounded-full flex items-center justify-center text-white hover:bg-primary/90'>
        Create your account
      </button>
    </div>
  )
}

export default SignupComponent