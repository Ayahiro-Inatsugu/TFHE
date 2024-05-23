'use client';

import InputTextBox from '@/components/features/top/InputTextBox';
import CipherTextBox from '@/components/features/top/CipherTextBox';
import OutputTextBox from '@/components/features/top/OutputTextBox';
import ComputingButton from '@/components/features/top/ComputingButton';
import { FC, useState, useEffect } from 'react';

export const Top: FC = () => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold">SEAL Demo</h1>
        <InputTextBox
          handleInputChange={handleInputChange}
        />
        <CipherTextBox />
        <OutputTextBox />
        <ComputingButton />
      </main>
    </>
  );
};
