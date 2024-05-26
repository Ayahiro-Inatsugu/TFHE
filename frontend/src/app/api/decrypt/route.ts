import { NextResponse } from 'next/server';
import { initializeSeal } from '../../../utils/sealInitialize';
import { readFile } from 'fs/promises';
import path from 'path';

type DecryptResponseData = {
  number?: number;
  error?: string;
}

export async function POST(req: Request) {
  try {
    const { decryptor, batchEncoder, seal, context} = await initializeSeal();
    // ファイルから暗号文を読み込む
    const filePath = path.join(process.cwd(), 'data', 'accumulatedCipherText.txt');
    const cipherTextBase64 = await readFile(filePath, 'utf8');
    // 暗号文をロード
    const cipherTextLoad = seal.CipherText();
    cipherTextLoad.load(context, cipherTextBase64);
    // 復号化
    const decodedResult = decryptor.decrypt(cipherTextLoad);
    // decodedResultがvoidでないことを確認
    if (!decodedResult) {
        throw new Error('Decryption failed');
    }
    const resultArray = batchEncoder.decode(decodedResult);
    const number = resultArray[0];
    return NextResponse.json({ number: number }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
