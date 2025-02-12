import { ANIMATIONSTYLE } from '@/constants'
import React, { useState } from 'react'

type Props = {
  handleNext: (selectedData: { label: string; value: string }) => void;
};

const functionalityQuestions = [
  "The device turns on, turns off, and charges. It has a battery, case, and SIM drawer.",
  "The front and rear cameras work perfectly.",
  "The speakers and microphones work perfectly.",
  "Touch ID and Face ID are functional (if present).",
  "All other features including Wi-Fi, Bluetooth, buttons, etc. work perfectly.",
  "Important: iCloud, Google, or any other accounts must be disconnected whether your item is functional or not. We don't accept bent and/or oxidized items."
];

export const FunctionalityForm = ({ handleNext }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div style={{ ...ANIMATIONSTYLE }} className='w-full transition'>
      <div className="my-7">
        <h1 className='text-lg font-semibold text-black'>
          Is it functional?
        </h1>

        <div className="my-7">
          {functionalityQuestions?.map((question) => (
            <p key={question} className='my-3 text-sm font-normal text-black'>
              {`• ${question}`}
            </p>
          ))}
        </div>

        <div className='flex flex-row items-center justify-center gap-x-5'>
          {["No", "Yes"].map((condition) => (
            <button
              key={condition}
              onClick={() => setSelectedOption(condition)}
              className={`w-full transition-opacity my-2 gap-x-3 flex flex-row justify-between rounded-md p-5 border hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40 bg-white`}
            >
              {selectedOption === condition ? (
                <div className='w-5 h-5 border flex flex-row items-center justify-center bg-primary border-primary rounded-full'>
                  <div className='h-2 w-2 bg-white rounded-full'></div>
                </div>
              ) : (
                <div className='w-5 h-5 border border-primary rounded-full'></div>
              )}

              <div className='flex-1 flex flex-col items-start'>
                <p className={`${selectedOption === condition ? "font-bold" : "font-normal"} text-sm text-black`}>
                  {condition}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* See the Offer Button */}
        <div style={{ ...ANIMATIONSTYLE }} className='my-7 transition flex items-end justify-end'>
          <button
            onClick={() => {
              if (selectedOption) {
                handleNext({ label: "Functionality", value: selectedOption });
              }
            }}
            disabled={!selectedOption} // Prevent proceeding without selection
            className='h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md'
          >
            See the offer
          </button>
        </div>
      </div>
    </div>
  );
};
