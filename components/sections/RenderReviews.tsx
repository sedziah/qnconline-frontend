import React from 'react'
import ReviewCard from '../Cards/ReviewCard'
import { MdOutlineVerifiedUser } from 'react-icons/md'

const RenderReviews = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">

      <div className='mx-4 mb-10'>
        <h1 className='text-lg font-semibold text-black'>iPhone SE (2020) - Unlocked's customer reviews</h1>
        <div className='mt-4 flex flex-row items-center gap-x-2'>
          <div className="flex items-center">
            <svg className="w-5 h-5 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          </div>
          <p className='text-base text-black font-semibold'>4.0/5</p>
          <p className='text-sm font-normal flex flex-row items-center gap-x-1'>
            <MdOutlineVerifiedUser /> {" "}
            <span>294 verified reviews in the last 6 months.</span>
          </p>
        </div>
      </div>

      <div className='mx-4 mb-10 grid grid-cols-1 lg:grid-cols-3'>
        <div>
          <p className='text-sm font-medium text-black'>Filter by stars</p>
          <div className='mt-7'></div>
        </div>
        <div className='col-span-1 lg:col-span-2'>
          {Array(10).fill({})?.map((_, key) => <ReviewCard key={key} />)}
        </div>
      </div>
    </div>
  )
}

export default RenderReviews