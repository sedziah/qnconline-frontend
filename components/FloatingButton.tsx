import React from 'react'

type PropType = {
  label: string
  onClick: () => void
}

const FloatingButton = ({ label, onClick }: PropType) => {
  return (
    <div className='w-full absolute bottom-10 left-0 px-4 right-0'>
      <button onClick={onClick} className='h-12 text-base font-medium text-white w-full bg-primary hover:bg-primary/90 rounded-md flex items-center justify-center'>
        {label}
      </button>
    </div>
  )
}

export default FloatingButton