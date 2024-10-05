import React, { useState } from 'react'
import BillingAddressModal from '../Modals/BillingAddressModal'

function RenderBilling() {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)


  return (
    <>
      <BillingAddressModal open={openModal} onCloseModal={toggleModal} />

      <div className='w-full rounded-md bg-white py-3 px-5 shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-base font-bold text-black capitalize'>Billing address</h1>

          <button onClick={toggleModal} className='text-sm border border-black hover:bg-bglight rounded-md px-4 py-1.5 text-black font-normal capitalize'>Edit</button>
        </div>

        <div className='mt-3'>
          <p className='text-sm text-black font-light'>There is no address registered yet.</p>
        </div>

      </div>
    </>
  )
}

export default RenderBilling