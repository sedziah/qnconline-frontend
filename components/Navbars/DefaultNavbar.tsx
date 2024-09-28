import Image from 'next/image'
import React from 'react'

const DefaultNavbar = () => {
  return (
    <div style={{
      zIndex: 8888,
      transitionTimingFunction: "linear",
      transition: "transform 0.7s ease-out, opacity 0.7s ease-out"
    }} className={`w-full transition fixed left-0 right-0 top-0  shadow z-50 bg-white `}>
      {/* Mobile Nav */}
      <div className='p-4'>
        <a href="/">
          <Image
            width={100}
            height={100}
            src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
        </a>
      </div>
    </div>
  )
}

export default DefaultNavbar