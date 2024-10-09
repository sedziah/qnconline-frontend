/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const ITEMS = [
  {
    image: "https://compasia.com.ph/cdn/shop/files/iphone-14-pro-max-757354_600x.png?v=1717653209",
    href: "/products?s=iphone-0d39a2fe-87ae-4566-b4c6-b505a7f9df6e&name=iPhone",
    title: "iPhone",
  },
  {
    image: "https://lib.arizona.edu/sites/default/files/styles/lendable_item_image/public/2022-08/macbook.png?itok=OYz7BkZC",
    href: "/products?s=iphone-0d39a2fe-87ae-4566-b4c6-b505a7f9df6e&name=Macbook",
    title: "Macbook",
  },
  {
    image: "https://www.aptronixindia.com/media/catalog/product/i/p/ipad_10th_gen_1.png",
    href: "/products?s=iphone-0d39a2fe-87ae-4566-b4c6-b505a7f9df6e&name=iPad",
    title: "iPad",
  },
  {
    image: "https://myxprs.com/cdn/shop/products/sony-playstation-5-slim-570862.png?v=1723625774&width=700",
    href: "/products?s=iphone-0d39a2fe-87ae-4566-b4c6-b505a7f9df6e&name=Gaming consoles",
    title: "Gaming consoles",
  }
]


const RenderMostWantedCategory = () => {
  const [productCategories, setProductCategories] = useState(ITEMS)

  return (
    <div className="my-16 px-4 w-full max-w-6xl mx-auto">
      <div className="my-16 px-4 w-full max-w-6xl mx-auto">
        <h2 className='text-xl font-semibold text-black' >Shop our most wanted</h2>

        <div className='mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {productCategories?.map((item) => <div key={item?.title} className='w-full'>

            <a href={item?.href}>
              <div className='w-full h-44 rounded-md overflow-hidden flex items-center justify-center bg-[#ffc971]'>
                <img
                  src={item?.image}
                  alt={item.title}
                  className='w-36 h-36 object-contain' />
              </div>
            </a>

            <p className='text-base mt-1 font-bold text-black capitalize'>{item?.title}</p>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default RenderMostWantedCategory


