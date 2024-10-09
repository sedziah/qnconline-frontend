import React from 'react'
import CustomInput from '../Inputs/CustomInput'

const SigninComponent = () => {

  return (
    <div className='transition-all w-full'
      style={{
        transitionTimingFunction: "linear",
        transition: "0.7s ease-out",
      }}
    >
      <div className='space-y-3 mb-7'>
        <CustomInput
          labal='Username'
          onChange={(e) => { }}
          value=''
          type='test'
          placeholder=''
        />
        <CustomInput
          labal='Password'
          onChange={(e) => { }}
          value=''
          type='password'
          placeholder=''
        />
      </div>

      <button className='h-12 bg-primary w-full rounded-full flex items-center justify-center text-white hover:bg-primary/90'>
        Sign in
      </button>
    </div>
  )
}

export default SigninComponent