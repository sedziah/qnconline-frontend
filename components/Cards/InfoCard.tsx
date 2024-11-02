import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type CardProp = {
  title: string
  description: string
  link: string
}

const InfoCard = ({title, description, link }: CardProp) => {
  return (
    <div className='my-16 px-4 w-full max-w-6xl mx-auto'>
      <div className="relative my-10 mx-auto flex flex-col justify-between  px-10 lg:max-w-screen-lg lg:flex-row">
        <div className="bg-slate-100 absolute left-0 h-full w-full lg:w-5/6 rounded-md border border-blue-200"></div>
        <div className="relative py-10 ">
          <h2 className="text-slate-900 text-3xl font-bold lg:text-xl">{title}</h2>
          <p className="text-slate-700 mt-3 max-w-lg">{description}</p>

          <Link href={link}>
          <button type="button" className="mt-4 flex items-center justify-center w-full rounded-lg border border-primary px-5 py-2.5 text-xs font-medium text-primary hover:bg-slate-200 focus:outline-none focus:ring-4  focus:ring-primary-300">
            <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
            </svg>
            Get started
          </button>
          </Link>
        </div>
        <div className="relative flex items-center rounded-lg justify-center h-72 lg:w-72 overflow-hidden">
          
          <Image
            width={250}
            height={100}
            alt=''
            src='https://images.ctfassets.net/mmeshd7gafk1/4GY8ZXxlzpdhjzhNYgOoHq/953fa0dacf6f03fa2b5f127987fa8b7d/BUYBACK_CountryBusinessLaunch_EventPage_Bloc_3__1_.png'
            className='object-cover h-full w-w-full '
          />
        </div>
      </div>
    </div>
  )
}

export default InfoCard