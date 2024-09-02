import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer  className="bg-gray-50">
      <div  className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div  className="max-w-sm">
          <div  className="mb-6 flex h-12 items-center space-x-2">
            <a href=''>
              <Image
                width={"100"}
                height={"40"}
                src="/assets/logo-small-removebg-preview.png" className='h-10 object-contain' alt='logo' />
            </a>
          </div>
          <div  className="text-gray-500">Welcome to Q&C! We bring you top-quality products with unmatched convenience. Shop confidently and enjoy the best in quality and service!</div>
        </div>
        <div  className="">
          <div  className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div  className="text-gray-500">
          +233 20 7597 903<br />
            17 Hill Street, <br />
            Accra Newtown, <br />
            info@qnconline.com
          </div>
        </div>
        <div  className="">
          <div  className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation"  className="text-gray-500">
            <ul  className="space-y-3">
              <li><a  className="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
              <li><a  className="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
              <li><a  className="hover:text-blue-600 hover:underline" href="#">Press</a></li>
              <li><a  className="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
              <li><a  className="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        
      </div>
      <div  className="bg-gray-100">
        <div  className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div  className="">© 2022 QNC | All Rights Reserved</div>
          <div  className="">
            <a  className="" href="#">Privacy Policy</a>
            <span>|</span>
            <a  className="" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer