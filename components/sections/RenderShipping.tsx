import React, { useState } from 'react'
import ShippingAddressModal from '../Modals/ShippingAddressModal'

function RenderShipping() {
  const [openModal, setOpenModal] = useState(false)

  const toogleModal = () => setOpenModal(!openModal)

  return (
    <>
      <ShippingAddressModal open={openModal} onCloseModal={toogleModal} />

      <div className='w-full rounded-md bg-white py-3 px-5 shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-base font-bold text-black capitalize'>
            Shipping address
          </h1>

          <button onClick={toogleModal} className='text-sm border border-black hover:bg-bglight rounded-md px-4 py-1.5 text-black font-normal capitalize'>Edit</button>
        </div>

        <div className='mt-3'>
          <p className='text-sm text-black font-light'>
            There is no address registered yet.
          </p>
        </div>

      </div>
    </>
  )
}

export default RenderShipping