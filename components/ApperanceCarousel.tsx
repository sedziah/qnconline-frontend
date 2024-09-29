/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import dynamic from 'next/dynamic';
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { GiTripleScratches } from 'react-icons/gi'

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

const ApperanceCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const DUMMYCONTENTS = [
    {
      image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://front-office.statics.backmarket.com/dfdee5ff2a0e466da1385d4b303bf0ee611b12d4/img/product/funnel/grade-guidance/default/9_screen.jpg",
      label: "Screen",
      faults: [
        {
          icon: <GiTripleScratches />,
          description: "May have micro-scratches",
        },
        {
          icon: <MdOutlineVerifiedUser />,
          description: "Verified parts",
        }
      ]
    },
    {
      image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://front-office.statics.backmarket.com/dfdee5ff2a0e466da1385d4b303bf0ee611b12d4/img/product/funnel/grade-guidance/default/12_body.jpg",
      label: "Body",
      faults: [
        {
          icon: <GiTripleScratches />,
          description: "Visible signs of use",
        },
        {
          icon: <MdOutlineVerifiedUser />,
          description: "Verified parts",
        }
      ]
    }
  ]


  return (
    <>
      <Carousel
        responsive={responsive}
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
        className="rounded-xl"
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
        renderDotsOutside={false}
      >
        {DUMMYCONTENTS?.map((content, index) => <div key={content?.label} className='relative w-full h-[500px] bg-black'>
          <img className='w-full h-full object-cover' src={content?.image} alt='placeholder' />
          <div className='absolute left-0 right-0 bottom-10 px-4'>
            <h1 className='font-bold text-lg text-white'>{DUMMYCONTENTS[index]?.label}</h1>
            <div className="mt-1 flex flex-row items-center flex-wrap gap-3">
              {DUMMYCONTENTS[index]?.faults?.map((item) => <div className='flex text-xs text-black flex-row items-center gap-x-2 bg-white rounded-full px-2 py-1.5' key={item?.description}>
                {item?.icon}
                <p className='font-light'>{item?.description}</p>
              </div>)}
            </div>
          </div>
        </div>)}
      </Carousel>
    </>
  )
}

export default ApperanceCarousel