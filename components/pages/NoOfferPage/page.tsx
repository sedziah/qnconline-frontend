"use client"
import Breadcrumb from '@/components/breadcrumb'
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import { useRouter } from 'next/navigation'
import React from 'react'

const NoOfferPage = () => {
  const router = useRouter()
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: "Trade in", href: '/trade-in' },
    { label: "Your item", href: `/trade-in/${3423}` },
    { label: 'Offer' },
  ]

  return (

    <>
      <DefaultNavbar />
      <div className='pt-24 px-4 bg-bglight'>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="w-full h-screen overflow-hidden overflow-y-scroll bg-bglight">
        <div className='w-full  px-4 mt-10 max-w-3xl mx-auto'>
          <div className='flex items-center justify-center'>
            <img
              src='https://front-office.statics.backmarket.com/7c1d68ac99eade219e3285af64697c7d0989886e/img/buyback/no-offer.svg'
              className='w-36 h-36 object-contain'
            />
          </div>
          <div className='mt-10'>
            <h1 className='text-lg lg:text-xl font-semibold text-black'>
              Sorry, we didn’t find an offer.
            </h1>
            <p className='text-sm my-5 text-gray-600 font-normal leading-7'>
              We know it’s a bummer to not get an offer — this can happen when your device is too old or too damaged.
            </p>

            <button onClick={() => {
              router.push('/trade-in')
            }} className='px-6 border border-medium py-2 bg-primary text-sm font-semibold rounded-md text-white transition-all'>
              Trade in something else
            </button>

          </div>
        </div>
      </div>

    </>
  )
}

export default NoOfferPage