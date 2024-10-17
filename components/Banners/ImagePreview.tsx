/* eslint-disable @next/next/no-img-element */
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'

export const ImagePreview = () => {
  return (
    <div className="w-full ">
      <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Product"
        className="w-full object-contain h-96 rounded-lg mb-4" id="mainImage" />
      <div className="flex gap-1 py-4 justify-center items-center overflow-x-auto">

        <div className='flex items-center justify-center h-full'>
          <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
            <ArrowLeft2 size="20" color="#fff" />
          </button>
        </div>

        <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-2_a742998e-bcf1-4140-bb69-ecbeb631197a.jpg" alt="Thumbnail 1"
          className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
        />
        <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-4_78fff263-d9ea-4374-bddb-135fd7577c17.jpg" alt="Thumbnail 2"
          className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
        />
        <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-3_18d3c205-dd57-487b-93bb-88f502184864.jpg" alt="Thumbnail 3"
          className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
        />
        <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://d2e6ccujb3mkqf.cloudfront.net/432ab35d-2664-4918-9df5-bf534f41e0b9-1_382e462b-f6c3-4c70-ab8d-60a359bbeb76.jpg" alt="Thumbnail 4"
          className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
        />

        <div className='flex items-center justify-center h-full'>
          <button className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
            <ArrowRight2 size="20" color="#fff" />
          </button>
        </div>

      </div>
    </div>
  )
}
