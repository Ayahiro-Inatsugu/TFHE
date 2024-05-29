import React from 'react'

const ComputingSelect = ({computingMethod, handleChangeComputingMethod}) => {
  return (
    <div className="w-1/3 flex flex-col items-center gap-2">
      <p className="text-xl">Choose Computing Method</p>
      <select name="" id="" value={computingMethod} onChange={handleChangeComputingMethod} className="w-1/3 h-8 px-2 text-black rounded-md">
        <option value="addition">addition</option>
        <option value="subtraction">subtraction</option>
        <option value="multiplication">multiplication</option>
      </select>
    </div>
  )
}

export default ComputingSelect
