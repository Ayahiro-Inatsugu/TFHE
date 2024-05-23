import React, { FC } from 'react'

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextBox: FC<Props> = ({ handleInputChange }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl">Input</p>
      <textarea className="w-3/5 h-64 bg-white rounded-lg text-black p-2" onChange={handleInputChange}></textarea>
    </div>
  )
}

export default InputTextBox
