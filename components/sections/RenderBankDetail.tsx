import React, { useState } from 'react'

function RenderBankDetail() {
  const [openModal, setOpenModal] = useState(false)

  const toogleModal = () => setOpenModal(!openModal)


  return (
    <>
      <div className='w-full rounded-md bg-white py-3 px-5 shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-base font-bold text-black capitalize'>
            Bank details
          </h1>

        </div>

        <div className='mt-3'>
          <p className='text-sm text-black font-light'>
            You haven’t uploaded your bank details yet. Please note that uploading your bank details (including your IBAN and BIC) is mandatory if you have made more than $5000 through our Trade-in program.
          </p>
        </div>


        <button onClick={toogleModal} className='mt-3 text-sm border border-black hover:bg-bglight rounded-md px-4 py-1.5 text-black font-normal'>
          Upload bank Details
        </button>

      </div>
    </>
  )
}

export default RenderBankDetail