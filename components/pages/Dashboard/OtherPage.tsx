import React from 'react'

function OtherPage() {
  return (
    <div className='px-4 w-full max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl font-semibold text-black text-center'>Other</h1>

      </div>

      <div className='mt-10 rounded-md bg-white shadow-xl p-5'>
        <p className='text-base text-black font-light'>My Credits</p>
        <p className='text-lg text-black font-bold'>₵ 0.00</p>
      </div>

      <p className='mt-10 text-xl text-black font-bold'>
        List of transactions
      </p>

      <div className='mt-5 rounded-md bg-white shadow-xl p-5'>
        <p className='text-sm text-black font-light'>No transactions</p>
      </div>

    </div>
  )
}

export default OtherPage