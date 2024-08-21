import React from 'react'

const BlogCard = () => {
  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white overflow-hidden shadow-lg">
      <img className="h-48 w-full object-cover object-center" src="https://images.ctfassets.net/mmeshd7gafk1/d0605b78c85d3b0b09a9dcc76d28fd93-meta-526-276/235d1caf12a040da70d5ea6a07b5bb5a/Locked_Banner_meta.png" alt="Product Image" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text-xs font-medium text-lightGray">Product Name</h2>
        <p className="mb-2 text-sm text-black font-semibold">Why is refurbished better than new?</p>
        <p className="mt-2 text-sm text-black font-light">When comparing new versus refurbished tech, refurbished takes the cake. Here’s why.</p>
        
      </div></div>
  )
}

export default BlogCard