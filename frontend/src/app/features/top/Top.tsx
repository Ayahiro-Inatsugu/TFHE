'use client';

import { FC, useState, useEffect } from 'react';
import InputTextBox from '@/components/features/top/InputTextBox';
import CipherTextBox from '@/components/features/top/CipherTextBox';
import OutputTextBox from '@/components/features/top/OutputTextBox';
import ComputingSelect from '@/components/features/top/ComputingSelect';
import { postEncrypt } from '@/services/postEncrypt';

export const Top: FC = () => {
  const [inputLeft, setInputLeft] = useState<string>('');
  const [inputRight, setInputRight] = useState<string>('');
  const [cipherTextLeft, setCipherTextLeft] = useState<string>('');
  const [cipherTextRight, setCipherTextRight] = useState<string>('');

  const handleInputLeftChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputLeft(event.target.value);
  };
  const handleInputRightChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputRight(event.target.value);
  };

  useEffect(() => {
    console.log('cipherTextLeft:', cipherTextLeft)
  }, [cipherTextLeft]);

  const handleComputing = async () => {
    try {
      const { cipherText1, cipherText2 } = await postEncrypt(inputLeft, inputRight);
      setCipherTextLeft(cipherText1);
      setCipherTextRight(cipherText2);
    } catch (error: any) {
      console.error('Request failed:', error);
    }
  };

  return (
    <>
      <main className="flex flex-col items-center gap-8 p-8">
          <h1 className="text-4xl font-bold">SEAL Demo</h1>
          <InputTextBox
            handleInputLeftChange={handleInputLeftChange}
            handleInputRightChange={handleInputRightChange}
          />
          <ComputingSelect />
          <button className="bg-white text-black w-1/5 h-12 rounded hover:font-bold" onClick={handleComputing}>Computing</button>
          <hr className="w-4/5" />
          <CipherTextBox
            cipherTextLeft={cipherTextLeft}
            cipherTextRight={cipherTextRight}
          />
          <hr className="w-4/5" />
          <OutputTextBox />
      </main>
    </>
  );
};
