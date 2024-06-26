'use client';

import { FC, useState, useEffect } from 'react';
import ComputingSelect from '@/components/features/top/ComputingSelect';
import PlainInputTextBox from '@/components/features/top/PlainInputTextBox';
import CipherInputTextBox from '@/components/features/top/CipherInputTextBox';
import CipherOutputTextBox from '@/components/features/top/CipherOutputTextBox';
import PlainOutputTextBox from '@/components/features/top/PlainOutputTextBox';
import { postEncrypt } from '@/services/postEncrypt';
import { postEvaluate } from '@/services/postEvaluate';
import { postDecrypt } from '@/services/postDecrypt';
import { resetTextBox } from '@/utils/resetTextBox';


export const Top: FC = () => {
  const [computingMethod, setComputingMethod] = useState<string>('addition');
  const [inputLeft, setInputLeft] = useState<string>('');
  const [inputRight, setInputRight] = useState<string>('');
  const [cipherTextLeft, setCipherTextLeft] = useState<string>('');
  const [cipherTextRight, setCipherTextRight] = useState<string>('');
  const [cipherOutput, setCipherOutput] = useState<string>('');
  const [plainOutput, setPlainOutput] = useState<number | undefined>();

  const handleChangeComputingMethod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setComputingMethod(event.target.value);
  };

  const handleInputLeftChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputLeft(event.target.value);
  };
  const handleInputRightChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputRight(event.target.value);
  };

  const handleComputing = async () => {
    try {
      const { cipherText1, cipherText2 } = await postEncrypt(inputLeft, inputRight);
      setCipherTextLeft(cipherText1);
      setCipherTextRight(cipherText2);
      const { cipherText } = await postEvaluate(computingMethod);
      setCipherOutput(cipherText);
    } catch (error: any) {
      console.error('Request failed:', error);
    }
  };

  const handleDecrypting = async () => {
    try {
      const { number } = await postDecrypt();
      setPlainOutput(number);
    } catch (error: any) {
      console.error('Request failed:', error);
    }
  };

  const handleReset = () => {
    setComputingMethod('addition');
    setInputLeft('');
    setInputRight('');
    setCipherTextLeft('');
    setCipherTextRight('');
    setCipherOutput('');
    setPlainOutput(undefined);
    resetTextBox();
  };

  return (
    <>
      <main className="flex flex-col items-center gap-8 p-8">
          <h1 className="text-4xl font-bold">SEAL Demo</h1>
          <ComputingSelect
            computingMethod={computingMethod}
            handleChangeComputingMethod={handleChangeComputingMethod}
          />
          <PlainInputTextBox
            inputLeft={inputLeft}
            inputRight={inputRight}
            handleInputLeftChange={handleInputLeftChange}
            handleInputRightChange={handleInputRightChange}
          />
          <button className="bg-white text-black w-1/5 h-12 rounded hover:font-bold" onClick={handleComputing}>Computing</button>
          <hr className="w-4/5" />
          <CipherInputTextBox
            cipherTextLeft={cipherTextLeft}
            cipherTextRight={cipherTextRight}
          />
          <CipherOutputTextBox
            cipherOutput={cipherOutput}
          />
          <button className="bg-white text-black w-1/5 h-12 rounded hover:font-bold" onClick={handleDecrypting}>Decrypting</button>
          <hr className="w-4/5" />
          <PlainOutputTextBox
            plainOutput={plainOutput}
          />
          <button className="bg-white text-black w-1/5 h-12 rounded hover:font-bold" onClick={handleReset}>Reset</button>
      </main>
    </>
  );
};
