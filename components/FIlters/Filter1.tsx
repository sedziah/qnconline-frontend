import React, { useState } from "react"

const Filter1 = () => {
  const [showFilters, setShowfilters] = useState(true)
  const [check, setCheck] = useState({
    leather: false,
    cotton: false,
    fabric: false,
    crocodile: false,
    wool: false,
    large: false,
    medium: false,
    small: false,
    mini: false,
    luxesignatire: false,
    luxelondon: false,
  })

  const { leather, cotton, fabric, crocodile, wool, large, medium, small, mini, luxesignatire, luxelondon } = check

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    })
  }

  const applyFilters = (e) => {
    setCheck({
      ...check,
      leather: false,
      cotton: false,
      fabric: false,
      crocodile: false,
      wool: false,
      large: false,
      medium: false,
      small: false,
      mini: false,
      luxesignatire: false,
      luxelondon: false,
    })
  }

  return (
    <div className="hidden lg:block">


      <div id="filterSection" className="">


        {/* Colors Section */}


        <div>
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">Brand</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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

        <div className="mt-10">
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">Condition</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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
        
        <div className="mt-10">
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">Processor type</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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

        <div className="mt-10">
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">OS</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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
        

        <div className="mt-10">
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">Categories</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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
        
        
        <div className="mt-10">
          <div className=" flex space-x-2">
            <p className="text-sm leading-5 font-medium text-gray-800 ">Shipping time (business days)</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
              <div className=" mt-1 inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex">
              <input className="w-5 h-5 rounded-2xl mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
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



      </div>
    </div>
  )
}

export default Filter1
