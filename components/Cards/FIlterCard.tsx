import React, { useState } from 'react'


interface PropType {
  key: string;
  label: string;
  options: string[];
  selectedOption: string; // Add this line
  onChange: (e: any) => void;
}


const FilterCard = ({label, options }: PropType) => {
  const [checked, setIsChecked] = useState(false)

  const onChange = () => setIsChecked(!checked)

  return <div className='mb-10'>
    <div className=" flex space-x-2">
      <p className="text-sm leading-5 font-medium text-gray-800 ">{label}</p>
    </div>
    <div className="space-y-3 mt-4">
      <div className=" flex">
        <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="checked" name="checked" value="checked" checked={checked} onChange={onChange} />
        <div className=" mt-1 inline-block">
          <div className=" flex space-x-6 justify-center items-center">
            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="checked">
              checked
            </label>
          </div>
        </div>
      </div>
      <div className=" flex">
        <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={checked} onChange={onChange} />
        <div className=" mt-1 inline-block">
          <div className=" flex space-x-6 justify-center items-center">
            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
              Cotton
            </label>
          </div>
        </div>
      </div>
      <div className=" flex">
        <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={checked} onChange={onChange} />
        <div className=" mt-1 inline-block">
          <div className=" flex space-x-6 justify-center items-center">
            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
              Fabric
            </label>
          </div>
        </div>
      </div>
      <div className=" flex">
        <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={checked} onChange={onChange} />
        <div className=" mt-1 inline-block">
          <div className=" flex space-x-6 justify-center items-center">
            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
              Crocodile
            </label>
          </div>
        </div>
      </div>
      <div className=" flex">
        <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={checked} onChange={onChange} />
        <div className=" mt-1 inline-block">
          <div className=" flex space-x-6 justify-center items-center">
            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Wool">
              Wool
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
}



export default FilterCard