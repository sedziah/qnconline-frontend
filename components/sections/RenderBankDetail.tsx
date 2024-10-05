import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { LuPencil } from 'react-icons/lu'

function RenderBankDetail() {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)


  return (
    <>
      <Modal open={openModal} onClose={toggleModal} center showCloseIcon={false}
        styles={{
          modalContainer: {
            zIndex: 9999
          },
          modal: {
            borderRadius: 10,
            background: "#f8f9fc"
          }
        }}
      >
        <div className='w-96 md:w-[30rem] lg:w-[40rem]'>
          <div className='flex flex-row items-center justify-between py-3 border-b border-lightGray'>
            <div className='w-10'></div>
            <p className='text-sm text-center text-black'>Upload my bank details</p>
            <button onClick={toggleModal} className=' hover:bg-lightGray/10 rounded-full items-center text-base  flex justify-center w-10 h-10 text-black font-normal capitalize'>
              <IoClose size={25} />
            </button>
          </div>
          <div className='my-10 space-y-3'>
            <div className='transition-opacity delay-300 flex flex-row gap-x-3 bg-lightblue/60 p-4 rounded-lg'>
              <LuPencil className='text-black text-xl' size={30} />
              <div>
                <p className='text-sm text-start flex text-black font-semibold'>
                  Important! Name your file carefully
                </p>

                <p className='text-sm mt-2 text-start flex text-gray-700 font-norma'>
                  To protect your privacy, we don’t display the file you upload. You’ll only be able to see the name of the file after you’ve uploaded it.
                </p>
              </div>
            </div>

            <p className='text-sm text-black font-light'>
              Make sure your bank details are the same as those you included on the “Trade-ins” page.
            </p>
          </div>

          <button className='h-12 bg-primary w-full rounded-md flex items-center justify-center text-white hover:bg-primary/90'>
            Continue
          </button>
        </div>
      </Modal>


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


        <button onClick={toggleModal} className='mt-3 text-sm border border-black hover:bg-bglight rounded-md px-4 py-1.5 text-black font-normal'>
          Upload bank Details
        </button>

      </div>
    </>
  )
}

export default RenderBankDetail