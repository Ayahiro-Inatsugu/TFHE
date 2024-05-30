import React from 'react'

interface Props {
  inputLeft: string;
  inputRight: string;
  handleInputLeftChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputRightChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PlainInputTextBox = ({ inputLeft, inputRight, handleInputLeftChange, handleInputRightChange }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <p className="text-2xl">Plain Input</p>
      <div className="w-3/5 flex items-center justify-center gap-8">
        <textarea className="w-1/2 h-16 bg-white rounded-lg text-black p-2" value={inputLeft} onChange={handleInputLeftChange}></textarea>
        <textarea className="w-1/2 h-16 bg-white rounded-lg text-black p-2" value={inputRight} onChange={handleInputRightChange}></textarea>
      </div>
    </div>
  )
}

export default PlainInputTextBox
