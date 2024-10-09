/* eslint-disable @next/next/no-img-element */
"use client";
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'


const Carousel = dynamic(() => import('react-multi-carousel'));



const BannerCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
 
  return <Carousel
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={true}
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
    {DUMMYDATA?.map((item) => <div key={item} className='w-full h-96 md:h-96 lg:h-96'>
      <a className='w-full h-full' href=''>
        <img
          // width={100}
          // height={"200"}
          src={item} className='w-full h-full object-center lg:object-cover' alt='banner' />
      </a>
    </div>)}

  </Carousel>
}

const DUMMYDATA = [
  "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/3MsolfbYgGOEYFpCDYzAK9/8f88dfec68a72eb7af529a02d595a3da/Visible_CommCampaign_HP-Banner_A_Desktop_v3__1_.jpg",
  "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/t8JhndTyTa1sDJIhaH37I/f70c90624156c0562ad41e083da5e9e5/GENERIC_HPBANNERS_MacBookAirM1_Desktop_US.jpg",
  "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/6ftzgVlwDWYTxzFy3eY5Cw/f9253bace06cbba3ecfb98e8daca92a3/DN_HP-Banners_2_desktop_US.jpg"
]

export default BannerCarousel