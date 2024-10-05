import React from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

type PropType = {
  open: boolean
  onCloseModal: () => void
}

const ShippingAddressModal = ({onCloseModal, open}: PropType) => {
  return (
    <Modal open={open} onClose={onCloseModal} center></Modal>
  )
}

export default ShippingAddressModal