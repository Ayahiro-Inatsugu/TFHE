import React from 'react'

const CipherTextBox = ({ cipherTextLeft, cipherTextRight }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl">Cipher</p>
      <div className="w-3/5 flex items-center justify-center gap-8">
        <div className="w-1/2 h-64 bg-white rounded-lg text-black p-2 break-words overflow-auto">{cipherTextLeft}</div>
        <div className="w-1/2 h-64 bg-white rounded-lg text-black p-2 break-words overflow-auto">{cipherTextRight}</div>
      </div>
    </div>
  )
}

export default CipherTextBox
