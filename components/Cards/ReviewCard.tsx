/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ReviewCard = () => {
  return (
    <div className="flex items-start my-7 border-b border-lightGray pb-10">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture"/>
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
          </div>
          
        </div>
      </div>
      <div className="ml-5">
        <p className="flex items-center justify-between">
          <span className="text-black text-sm font-semibold">John Doe T.</span>
        <div className="flex items-center mt-1">
          <svg className="w-4 h-4 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          <svg className="w-4 h-4 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          <svg className="w-4 h-4 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          <svg className="w-4 h-4 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        </div>
        </p>
    
       
        <div className="mt-1">
          <span className="font-noemal text-sm text-lightGray">Sapien consequat eleifend!</span>
          <p className="mt-3 text-sm text-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard