import React from 'react'

const CipherOutputTextBox = ({ cipherOutput }: { cipherOutput: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl">Cipher Output</p>
      <div className="w-3/5 h-64 bg-white rounded-lg text-black p-2 break-words overflow-auto">{cipherOutput}</div>
    </div>
  )
}

export default CipherOutputTextBox
