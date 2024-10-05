import React from 'react'

function OrdersPage() {
  return (
    <div className='px-4 w-full max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl font-semibold text-black text-center'>Orders</h1>
        <p className='text-sm text-gray-500 font-normal mt-1 text-center'>Shipping tracking, customer service, etc.</p>
      </div>

      <div className='mt-10 rounded-md bg-white shadow-xl gap-y-4 gap-x-5 p-5 flex flex-col md:flex-row lg:flex-row justify-between'>

        <div className='relative'>
          <h1 className='text-lg font-bold text-black'>It's pretty hard to believe.</h1>
          <p className='text-sm text-gray-500 font-normal mt-10'>But it looks like you haven't purchased anything on QnC yet.</p>

          <div className='hidden lg:block md:block absolute bottom-4'>
            <a href='/'>
              <button className='text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-md px-3 py-3'>
                Shop Sweet deals
              </button>
            </a>
          </div>
        </div>
        <div className=''>
          <img src='https://front-office.statics.backmarket.com/1bb6f9ac10a8c3f2fe52ec16cd5481d3e723651c/img/common/not-found-block.svg' alt='Order Placeholder' className='object-cover w-full h-56 rounded-md shadow-md' />
        </div>
        <div className='block lg:hidden md:hidden'>
          <a href='/'>
            <button className='text-sm items-center justify-center w-full font-semibold text-white bg-primary hover:bg-primary/90 rounded-md px-3 py-3'>
              Shop Sweet deals
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default OrdersPage