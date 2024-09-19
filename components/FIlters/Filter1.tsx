import React, { useState } from "react"
import FilterCard from "../Cards/FIlterCard"

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

  const changeHandler = (e: any) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    })
  }

  const applyFilters = (e: any) => {
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


        {/* <FilterCard label="Brand" options={[]} />
        <FilterCard label="Brand" options={[]} />
        <FilterCard label="Brand" options={[]} />
        <FilterCard label="Brand" options={[]} />
        <FilterCard label="Brand" options={[]} /> */}




      </div>
    </div>
  )
}

export default Filter1
