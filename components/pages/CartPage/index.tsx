"use client"
import CartItem from '@/components/Cards/CartItem'
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import Image from 'next/image'
import React from 'react'

const CartPage = () => {


  // if (cartList?.length < 0) {
  //   return <section className="mt-20 py-8 antialiased md:py-16">
  //     <div>
  //       <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
  //         <h2 className="text-base pt-10 font-semibold text-gray-900  sm:text-2xl">There's nothing in your cart.</h2>


  //         <p className='text-sm text-gray-500 mt-2 mb-5'>
  //           All this stellar refurb isn't gonna shop itself!
  //         </p>

  //         <a href="/">

  //           <button className='px-2 py-3 bg-primary text-white rounded-md shadow-md text-sm font-semibold'>
  //             Explore more products
  //           </button>
  //         </a>


  //       </div>
  //     </div>
  //   </section>
  // }

  return (
    <div className='bg-bglight h-screen'>
      <DefaultNavbar />

      <section className="py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-base pt-10 font-semibold text-gray-900  sm:text-2xl">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">

                {Array(6).fill({})?.map((_, key) => <CartItem key={key} />)}

              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">Original price</dt>
                      <dd className="text-base font-medium text-gray-900 ">₵7,592.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                      <dd className="text-base font-medium text-green-600">-$299.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">Store Pickup</dt>
                      <dd className="text-base font-medium text-gray-900 ">₵99</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 ">₵799</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-base font-bold text-gray-900 ">Total</dt>
                    <dd className="text-base font-bold text-gray-900 ">₵8,191.00</dd>
                  </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 "> or </span>
                  <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline">
                    Continue Shopping
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 "> Do you have a voucher or gift card? </label>
                    <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary/90 focus:ring-primary " placeholder="" required />
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary ">Apply Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CartPage