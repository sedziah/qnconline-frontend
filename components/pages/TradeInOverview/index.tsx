/* eslint-disable @next/next/no-img-element */
"use client";
import Breadcrumb from '@/components/breadcrumb';
import { CTAFour } from '@/components/CTAS/CTAFour';
import { CTAThree } from '@/components/CTAS/CTAThree';
import RenderTradeInCategory from '@/components/sections/RenderTradeInCategory';
import React from 'react';
import { COMPANY_NAME } from '@/constants';

const TradeInOverview = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: "Trade-in" },
  ];

  return (
    <div className=''>
      <Breadcrumb items={breadcrumbItems} />

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <p className='text-xl lg:text-2xl text-black font-bold'>Trade in your tech</p>
      </div>

      <RenderTradeInCategory />
      <CTAThree />

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <h1 className='text-lg lg:text-xl font-bold text-black'>
          Trade in your smartphones
        </h1>
        <div className='mt-2 flex flex-row flex-wrap gap-3'>
          <a href='/trade-in/iPhone'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your iPhones
            </button>
          </a>
          <a href='/trade-in/samsung'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Other phones
            </button>
          </a>
        </div>
      </div>

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 block md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>
            What’s {COMPANY_NAME} Trade-in?
          </h1>
        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>
                What’s {COMPANY_NAME} Trade-in?
              </h1>
            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              An easy win for your wallet and the planet...
            </p>
          </div>

          <div className='relative w-full h-72 rounded-xl overflow-hidden'>
            <img
              className='w-full h-full object-cover md:object-contain lg:object-cover'
              src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/5CIdvx4S7Zme5rGF3FxAj7/ea271b35c514f812df399a903551a063/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_1_V2__1_.png"
              alt='placeholder'
            />
          </div>
        </div>
      </div>

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div className='relative w-full h-72 rounded-xl overflow-hidden'>
            <img
              className='w-full h-full object-cover md:object-contain lg:object-cover'
              src="https://images.ctfassets.net/mmeshd7gafk1/1BU87ulRJwB86NiSOgc2OF/26d443409c6d1aecd6ef9048c700f6d7/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_2__1_.gif"
              alt='placeholder'
            />
          </div>
          <div>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>
              How does Trade-in work?
            </h1>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              1. Get an offer from our partners within minutes
            </p>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              2. Ship or deliver your device to our service center
            </p>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              3. Receive instant cash after we receive your device
            </p>
          </div>
        </div>
      </div>

      <CTAFour />
    </div>
  );
};

export default TradeInOverview;
