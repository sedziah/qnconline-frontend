import React, { useState } from 'react'
import PersonalInformationModal from '../Modals/PersonalInformationModal'

function RenderPersonalDetail() {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)

  return (
    <>
      <PersonalInformationModal open={openModal} onCloseModal={toggleModal} />


      <div className='w-full rounded-md bg-white py-3 px-5 shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-base font-bold text-black capitalize'>Personal details</h1>

          <button onClick={toggleModal} className='text-sm border border-black hover:bg-bglight rounded-md px-4 py-1.5 text-black font-normal capitalize'>Edit</button>
        </div>

        <div className='mt-3'>
          <p className='text-sm text-black font-light'>Raymond John</p>
          <p className='text-sm mt-1 text-black font-light'>john@gmail.com</p>
        </div>
        <a href=''>
          <p className='text-sm mt-1 text-black font-bold underline'>Delete your account</p>
        </a>
      </div>
    </>
  )
}

export default RenderPersonalDetail