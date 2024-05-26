import React from 'react'

const ComputingSelect = () => {
  return (
    <div className="w-1/3 flex flex-col items-center gap-2">
      <p className="text-xl">Choose Computing Method</p>
      <select name="" id="" className="w-1/4 h-8 px-2 text-black rounded-md">
        <option value="">-</option>
        <option value="">加法</option>
        <option value="">減法</option>
        <option value="">乗法</option>
        <option value="">除法</option>
      </select>
    </div>
  )
}

export default ComputingSelect
