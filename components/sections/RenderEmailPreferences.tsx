import React, { useState } from 'react'
import Switch from "react-switch"


function RenderEmailPreferences() {
  const [checked, setChecked] = useState(false)

  const handleChange = (checked: boolean) => {
    setChecked(checked)
  }

  return (
    <div className='w-full rounded-md bg-white py-3 px-5 shadow-md'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-base font-bold text-black capitalize'>
          Email preferences
        </h1>
      </div>

      <div className='mt-3'>
        <button onClick={() => setChecked(!checked)} className='flex flex-row items-center gap-x-2 outline-none border-none'>
          <Switch onChange={handleChange} checked={checked}
            uncheckedIcon={false} checkedIcon={false}
          />
          <p className='text-sm text-black font-light'>
            Get our best deals in your inbox.
          </p>
        </button>
        <button onClick={() => setChecked(!checked)} className='flex mt-2 flex-row items-center gap-x-2 outline-none border-none'>
          <Switch onChange={handleChange} checked={checked}
            uncheckedIcon={false} checkedIcon={false}
          />
          <p className='text-sm text-black font-light'>
            Get our newsletter for the latest in reborn tech.
          </p>
        </button>
      </div>

    </div>
  )
}

export default RenderEmailPreferences