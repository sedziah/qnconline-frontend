/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CTATwo = () => {
  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>
      <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
        <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-64">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
       
            <p className="text-xl font-bold">Welcome to QNC</p>
            <p className="mt-4 text-sm mb-4 max-w-md text-gray-500">The best prices for high-quality reborn tech by sellers we’ve checked and vetted. We don’t mind if you</p>

            <a href="#" className="group mt-auto flex w-48 cursor-pointer select-none items-center justify-center rounded-md bg-primary px-6 py-2 text-white transition">
              <span className="group flex w-full items-center justify-center rounded py-1 text-center font-normal text-sm"> Get to know us </span>

              <svg className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="order-first ml-auto h-28 w-full  sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img className="h-full w-full object-cover" src="https://front-office.statics.backmarket.com/7c1d68ac99eade219e3285af64697c7d0989886e/img/product/about-us/desktop.svg" loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CTATwo