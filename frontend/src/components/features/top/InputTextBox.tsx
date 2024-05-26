import React, { FC } from 'react'

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextBox: FC<Props> = ({ handleInputLeftChange, handleInputRightChange }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <p className="text-2xl">Input</p>
      <div className="w-3/5 flex items-center justify-center gap-8">
        <textarea className="w-1/2 h-16 bg-white rounded-lg text-black p-2" onChange={handleInputLeftChange}></textarea>
        <textarea className="w-1/2 h-16 bg-white rounded-lg text-black p-2" onChange={handleInputRightChange}></textarea>
      </div>
    </div>
  )
}

export default InputTextBox
