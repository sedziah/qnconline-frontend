/* eslint-disable @next/next/no-img-element */
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'

interface ImagePreviewProps {
  images: {
    image: string
    alt_text?: string
    image_type?: string
  }[]
} 

export const ImagePreview = ({ images }: ImagePreviewProps) => {
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleImageChange = (image: {
    image: string
    alt_text?: string
    image_type?: string
  }) => {
    setCurrentImage(image)
  }

  return (
    <div className="w-full ">
      <img src={currentImage.image} alt={currentImage.alt_text}
        className="w-full object-contain h-96 rounded-lg mb-4" id="mainImage" />

      <div className="flex gap-1 py-4 justify-center items-center overflow-x-auto">

        <div className='flex items-center justify-center h-full'>
          <button
            onClick={() => handleImageChange(images[images.length - 1])}
            className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
            <ArrowLeft2 size="20" color="#fff" />
          </button>
        </div>

        {images.map((image) => (
          <img src={image.image} alt={image.alt_text}
            key={image.image}
            className="size-10 sm:size-10 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 border border-black"
          />
        ))}


        <div className='flex items-center justify-center h-full'>
          <button
            onClick={() => handleImageChange(images[images.length - 1])}
            className='bg-black hover:bg-black/90 w-8 h-8 flex flex-row items-center justify-center rounded-full'>
            <ArrowRight2 size="20" color="#fff" />
          </button>
        </div>

      </div>
    </div>
  )
}
