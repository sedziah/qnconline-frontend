"use client"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import ProductCard from '../Cards/ProductCard'
import BlogCard from '../Cards/BlogCard'
import { VideoPreviewCard } from '../Cards/VideoPreviewCard'


const DUMMYVIDEOS = [
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
  "https://videos.ctfassets.net/mmeshd7gafk1/1tKBCXe989lwAbp5LodXgD/99097bb13f54b04160cd44c8c31ffb65/IPAD-EN.mp4",
]



const RenderVideoReviews = () => {
  return (
    <div className='my-14 px-4 w-full max-w-6xl mx-auto'>
      <h2 className='text-base font-semibold'>Reviews</h2>

      <div className='mt-4'>
        <Carousel
          responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}>
          {DUMMYVIDEOS?.map((video, key) => <div key={key} className='mx-1 py-3'><VideoPreviewCard  videoURL={video}  /></div>)}

        </Carousel>
      </div>
    </div>
  )
}

export default RenderVideoReviews