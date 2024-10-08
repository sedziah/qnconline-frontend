import RenderBankDetail from '@/components/sections/RenderBankDetail'
import RenderBilling from '@/components/sections/RenderBilling'
import RenderEmailPreferences from '@/components/sections/RenderEmailPreferences'
import RenderPersonalDetail from '@/components/sections/RenderPersonalDetail'
import RenderShipping from '@/components/sections/RenderShipping'
import React from 'react'

function ProfilePage() {
  return (
    <div className='px-4 w-full max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl font-semibold text-black text-center'>Profile</h1>
        <p className='text-sm text-gray-500 font-normal mt-1 text-center'>
          Who am I? Where am I? Why am I? Look no further for the answers.
        </p>
      </div>

      <div className='mt-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

        {/* Personal Details */}
        <RenderPersonalDetail />


        {/* Billing address */}
        <RenderBilling />

        {/* Shipping address */}
        <RenderShipping />

        {/* Email preferences */}
        <RenderEmailPreferences />


        {/* Bank details */}
        <RenderBankDetail />

      </div>

    </div>
  )
}

export default ProfilePage