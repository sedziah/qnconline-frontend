/* eslint-disable @next/next/no-img-element */
"use client"
import Breadcrumb from '@/components/breadcrumb'
import { CTAFour } from '@/components/CTAS/CTAFour'
import { CTAThree } from '@/components/CTAS/CTAThree'
import RenderTradeInCategory from '@/components/sections/RenderTradeInCategory'
import React from 'react'
import { COMPANY_NAME } from '@/constants'

const TradeInOverview = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: "Trade-in" },
  ]

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
          {/* <a href='/trade-in/macbook'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Laptops
            </button>
          </a> */}
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
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>What’s {COMPANY_NAME} Trade-in?</h1>

            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
            An easy win for your wallet and the planet. Sell your unwanted electronics to professional refurbishers on Back Market — just complete the assessment and see the best offer for your device in as little as 5 minutes.
            </p>
          </div>

          <div className='relative w-full h-72 rounded-xl overflow-hidden '>
            <img className='w-full h-full object-contain' src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/5CIdvx4S7Zme5rGF3FxAj7/ea271b35c514f812df399a903551a063/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_1_V2__1_.png" alt='placeholder' />
          </div>
        </div>
      </div>

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 block md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>How does Trade-in work?</h1>

        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div className='relative w-full h-72 rounded-xl overflow-hidden '>
            <img className='w-full h-full object-contain' src="https://images.ctfassets.net/mmeshd7gafk1/1BU87ulRJwB86NiSOgc2OF/26d443409c6d1aecd6ef9048c700f6d7/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_2__1_.gif" alt='placeholder' />
          </div>

          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>How does Trade-in work?</h1>

            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              1. Get an offer from our partners within minutes
            </p>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              2. Ship our delver your device to our service center
            </p>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              3. Receive instant cash after we receive your device
            </p>
          </div>


        </div>
      </div>

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 block md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>What goes into an offer?</h1>

        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>What goes into an offer?</h1>

            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              Our partners make offers based on your device’s condition and its current market value. If you don’t get an offer right away, you can always try again — Trade-in offers depend on the market, so there’s always round 2.
            </p>
          </div>

          <div className='relative w-full h-72 rounded-xl overflow-hidden '>
            <img className='w-full h-full object-contain' src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/2C9R0AWWaa6JwSEAOuHyH7/935531adc6c2c6e62b94008f229001bc/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_3__1_.png" alt='placeholder' />
          </div>
        </div>
      </div>

      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 block md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>See all frequently asked questions</h1>

        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div className='relative w-full h-72 rounded-xl overflow-hidden '>
            <img className='w-full h-full object-contain' src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/684ghVxy6omletOLUWKYez/c257f5e542a585d862fd3f1aa6990404/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_4__1_.png" alt='placeholder' />
          </div>

          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>See all frequently asked questions</h1>

            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              Answers answers everywhere.
            </p>

            <a href='/'>
              <button className="border border-lightGray py-2 text-sm px-2 w-1/2 mt-10 hover:bg-bglight rounded-lg">
                See FAQs
              </button>
            </a>
          </div>


        </div>
      </div>


      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <div className='w-full mb-3 block md:hidden lg:hidden'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Think it’s the end of the road for your device? Think again!</h1>

        </div>

        <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center'>
          <div className='relative w-full h-72 rounded-xl overflow-hidden '>
            <img className='w-full h-full object-contain' src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/3U63L801GXYYyH9dbtOgeY/00a70d21594d1dd7ff13d7df1dd7c7d2/Recyling_block.png" alt='placeholder' />
          </div>

          <div>
            <div className='w-full hidden md:block lg:block'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-black'>Think it’s the end of the road for your device? Think again!</h1>

            </div>
            <p className='text-sm text-gray-500 mt-2 leading-7'>
              Even non-functioning devices are still full of valuable raw materials. When you recycle with us, we see to it that as many parts as possible are reused and anything toxic is disposed of responsibly. Or, if the item is still functional, we’ll pass it along to a refurbisher.
            </p>

            <a href='/'>
              <button className="border border-lightGray py-2 text-sm px-2 w-1/2 mt-10 hover:bg-bglight rounded-lg">
                See FAQs
              </button>
            </a>
          </div>


        </div>
      </div>


      <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
        <h1 className='text-lg lg:text-xl font-bold text-black'>
          Instant cash offers, just a few clicks away
        </h1>
        <p className='text-sm text-gray-500 mt-4 leading-7'>
          Instant cash offers, just a few clicks away
        </p>
        <div className='mt-2 flex flex-row flex-wrap gap-3'>
          <a href='/trade-in/iPhone'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your iPhones
            </button>
          </a>
          <a href='/trade-in/samsung'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Smartphones
            </button>
          </a>
          <a href='/trade-in/macbook'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Laptops
            </button>
          </a>
          
          <a href='/trade-in/wallet'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Tablets
            </button>
          </a>
          
          <a href='/trade-in/consoles'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your consoles
            </button>
          </a> 
          
          <a href='/trade-in/glasses'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Audio
            </button>
          </a>
          
          {/* 
          <a href='/trade-in/glasses'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your glasses
            </button>
          </a> 

          <a href='/trade-in/wallet'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Appliances
            </button>
          </a>

          <a href='/trade-in/consoles'>
            <button className='text-sm font-normal text-white bg-[#000] hover:bg-[#000]/95 py-2 px-2 rounded-md'>
              Trade in your Audio
            </button>
          </a>
        */}
        </div>
      </div>

      <CTAFour />

   


      <div className='my-14 px-4 w-full max-w-3xl mx-auto'>
        <h1 className='text-lg lg:text-xl font-bold text-gray-500'>
          How does Trade-in work?
        </h1>

        <p className='text-sm text-gray-500 mt-4 leading-7'>
         {"In a nutshell: Trade in your old tech and get cash for it. Yep, unlike other trade-in programs out there, with Back Market Trade-in you get cold hard cash dropped straight into your bank account because, well, it's better than store credit (amiright?)."}
        </p>

        <p className='text-sm text-gray-500 leading-7 mt-10'>
          {"It's easy, too. Go through the assessment, get a price offer instantly from an expert refurbisher, and mail your device for free using our prepaid shipping label. Once the refurbisher receives the item, they'll check to see that it matches the assessment. If it's all good, they'll pay you by direct deposit. If things are a little off, all is not lost! The refurbisher will send you a counteroffer. But the power is always yours: you're free to accept or reject any offers."}
        </p>

        <p className='text-sm text-gray-500  eading-7 mt-10'>
         {"You can sell smartphones, tablets, gaming consoles, headphones, earphones, and speakers through Trade-in. Even broken ones. There's a lot of trash out there, but when it comes to tech a lot of it isn't. Refurbishers will restore your old electronics to perfect working condition so that any tech you sell can live its best reborn life."}
        </p>

        <p className='text-sm text-gray-500 leading-7 mt-10'>
         {"Why's that? Reusing, repairing, and refurbishing our electronics is a simple way to reduce the environmental damage that comes from manufacturing brand-new tech and lower the amount of toxic e-waste that ends up in our landfills. Guess this makes you a do-gooder. We're okay with it if you are."}
        </p>

      </div>

    </div>
  )
}

export default TradeInOverview