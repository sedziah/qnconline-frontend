import { ANIMATIONSTYLE } from '@/constants'
import { Warning2 } from 'iconsax-react'
import React, { useState } from 'react'

type Props = {
  handleNext: () => void
}

const carrierOptions = [
  {
    label: "Unlocked",
    image: ""
  },
  {
    label: "AT&T",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg"
  },
  {
    label: "Verizon",
    image: "https://pentagram-production.imgix.net/ba1eda20-927e-47ad-882b-037993fb348a/mb_verizon_01.jpg?crop=edges&fit=crop&h=630&rect=337%2C0%2C3834%2C2400&w=1200"
  },
  {
    label: "T-Mobile",
    image: "https://www.gsma.com/solutions-and-impact/connectivity-for-good/external-affairs/wp-content/uploads/2022/05/T-Mobile_New_Logo_Primary_RGB_M-on-W.jpg"
  },
  {
    label: "Sprint",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sprint_Corporation_Logo.svg"
  },
  {
    label: "Other",
  }
];

const CarrierForm = ({ handleNext }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div style={{ ...ANIMATIONSTYLE }} className='w-full transition'>

      <div className="my-7">
        <h1 className='text-lg font-semibold text-black'>
          Is your device unlocked or locked to a specific carrier?
        </h1>


        <div style={{ ...ANIMATIONSTYLE }} className='my-5 bg-lightblue/70 rounded-lg p-4 flex flex-row gap-x-4'>
          <Warning2 size="24" color="#2f3137" />
          <div className='w-full'>
            <p className='text-[13px] font-medium text-black'>Find out if your phone is unlocked</p>

            <p className='text-black text-[13px] font-normal my-5'>
              A locked phone has a software code that restricts it to one carrier while unlocked phones work with any carrier.
            </p>

            <p className='text-black text-[13px] font-normal'>
              {"Apple: “Settings” > “General” > “About” > “Carrier Lock”. Android: Insert a SIM card from a different carrier. If you get a network signal, it's unlocked. Alternatively, you can also contact your carrier for this info and to unlock your device."}
            </p>
          </div>
        </div>
      </div>

      <div className="my-7">
        <div className='grid grid-cols-2 gap-x-5'>
          {carrierOptions.map((condition, index) => (
            <button
              onClick={() => setSelectedOption(condition?.label)}
              key={condition?.label}
              className={`w-full transition-opacity my-2  delay-150  gap-x-3 flex flex-row justify-between rounded-md p-5 border  hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40 bg-white`}
            >


              {selectedOption === condition?.label ? <div className='w-5 h-5 border flex flex-row items-center justify-center bg-primary border-primary rounded-full'>
                <div className='h-2 w-2 bg-white rounded-full'></div>
              </div> :
                <div className='w-5 h-5 border border-primary rounded-full'></div>
              }

              <div className='flex-1 flex flex-row justify-between items-start'>
                <p className={`${selectedOption === condition?.label ? "font-bold" : "font-normal"} text-sm text-black`}>
                  {condition?.label}
                </p>

                {condition?.image && <img
                  src={condition?.image}
                  className='w-12 h-7 object-contain'
                />}

              </div>

            </button>
          ))}
        </div>
      </div>
      <div style={{ ...ANIMATIONSTYLE }} className='my-7 transition flex items-end justify-end'>
        <button onClick={handleNext} className='h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md'>
          Next
        </button>
      </div>

    </div>
  )
}

export default CarrierForm