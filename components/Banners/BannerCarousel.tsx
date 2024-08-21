"use client";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'


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
    {DUMMYDATA?.map((item) => <div key={item} className='w-full h-[400px] md:h-96 lg:h-96'>
      <a className='w-full h-full'>
        <img src={item} className='w-full h-full lg:object-cover' alt='banner'/>
      </a>
    </div>)}

  </Carousel>
}

const DUMMYDATA = [
  "https://images.ctfassets.net/mmeshd7gafk1/N89lOcXmDMzcHylfC5uIM/5aece37d20ed9cede35d3de23650033d/HP_banner_-_desktop_-_SWAP_-_US.jpeg",
  "https://images.ctfassets.net/mmeshd7gafk1/2Sjyr850qM5Kj1VV6yyn3O/fe4f23e5572b8705d6e8d7357ad91225/HP_banner_-_desktop_-_generic_B_-_US.jpg",
  "https://images.ctfassets.net/mmeshd7gafk1/3Xpl0rtrXbBRIZDONnbeNm/da1ec02caca4b8dcba2f8c5b31c68d6b/GENERIC_HPBANNERS_iPad2021_Desktop_US.jpg"
]

export default BannerCarousel