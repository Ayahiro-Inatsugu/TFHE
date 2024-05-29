import { NextResponse } from 'next/server';
import { initializeSeal } from '../../../utils/sealInitialize';
import { readFile } from 'fs/promises';
import path from 'path'
import { writeFile } from 'fs/promises';

type AddResponseData = {
  cipherText?: string;
  error?: string;
}

export async function POST(req: Request) {
  try {
    const { evaluator, encryptor, decryptor, batchEncoder, seal, context } = await initializeSeal();
    const { computingMethod } = await req.json();

    // ファイルから暗号文を読み込む
    const filePath1 = path.join(process.cwd(), 'data', 'cipherText1.txt');
    const cipherTextBase64_1 = await readFile(filePath1, 'utf8')
    const filePath2 = path.join(process.cwd(), 'data', 'cipherText2.txt');
    const cipherTextBase64_2 = await readFile(filePath2, 'utf8')

    // 暗号文をロード
    const cipherTextLoad_1 = seal.CipherText();
    const cipherTextLoad_2 = seal.CipherText();
    cipherTextLoad_1.load(context, cipherTextBase64_1);
    cipherTextLoad_2.load(context, cipherTextBase64_2);

    const accumulatedCipherText = seal.CipherText();

    // 演算手法によって処理を変更
    if (computingMethod === 'addition') {
    // 加算
      evaluator.add(cipherTextLoad_1, cipherTextLoad_2, accumulatedCipherText);
    } else if (computingMethod ==='subtraction') {
      // 減算
      evaluator.sub(cipherTextLoad_1, cipherTextLoad_2, accumulatedCipherText);
    } else if (computingMethod ==='multiplication') {
      // 乗算
      evaluator.multiply(cipherTextLoad_1, cipherTextLoad_2, accumulatedCipherText);
    } else {
      throw new Error('Invalid computing method');
    }
    // 加算結果の暗号文をBase64文字列として保存
    const cipherTextBase64 = accumulatedCipherText.save();
    const filePath = path.join(process.cwd(), 'data', 'accumulatedCipherText.txt');

    // ファイルに暗号文を非同期で書き込む
    await writeFile(filePath, cipherTextBase64, 'utf8')

    return NextResponse.json({ cipherText: cipherTextBase64 }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

