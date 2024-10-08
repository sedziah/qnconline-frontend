import React from 'react'

function FavoritesPage() {
  return (
    <div className='px-4 w-full max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl font-semibold text-black text-center'>Favorites</h1>

      </div>
    

      <div className='mt-10 rounded-md bg-white shadow-xl gap-y-4 gap-x-5 p-5 flex flex-col md:flex-row lg:flex-row justify-between'>

        <div className='relative'>
          <h1 className='text-lg font-bold text-black'>Nothing to see here… yet</h1>
          <p className='text-sm text-gray-500 font-normal mt-10'>Keep tabs on your favorite devices by saving them here.</p>

          <div className='hidden lg:block md:block absolute bottom-4'>
            <a href='/'>
              <button className='text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-md px-3 py-3'>
                Find your faves
              </button>
            </a>
          </div>
        </div>
        <div className=''>
          <img src='https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/3e1b7102a63d74ae4c52ecc8bc1123aab9ab974e/img/myFavorites/ghost_large-screen.svg' alt='Order Placeholder' className='object-contain w-full h-56 rounded-md' />
        </div>
        <div className='block lg:hidden md:hidden'>
          <a href='/'>
            <button className='text-sm items-center justify-center w-full font-semibold text-white bg-primary hover:bg-primary/90 rounded-md px-3 py-3'>
              Shop Sweet deals
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default FavoritesPage