import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { initializeSeal } from '../../../utils/sealInitialize';

export async function POST(req: Request) {
  try {
    const { encryptor, batchEncoder, decryptor } = await initializeSeal();
    const { number1, number2 } = await req.json();

    console.log('number1:', number1);
    console.log('number2:', number2);

    // 数値を暗号化
    const encodedNumber1 = batchEncoder.encode(Int32Array.from([number1]));
    const encodedNumber2 = batchEncoder.encode(Int32Array.from([number2]));
    // Encode処理がvoidでないことを確認
    if (!encodedNumber1 || !encodedNumber2) {
      throw new Error('Encode failed');
    }

    // 暗号文をBase64文字列として保存
    const cipherText1 = encryptor.encrypt(encodedNumber1);
    const cipherText2 = encryptor.encrypt(encodedNumber2);

    // 暗号文がvoidでないことを確認
    if (!cipherText1 || !cipherText2) {
      throw new Error('Encryption failed');
    }
    const cipherTextBase64_1 = cipherText1.save();
    const cipherTextBase64_2 = cipherText2.save();

    // ファイルに保存するパスを定義
    const filePath1 = path.join(process.cwd(), 'data', 'cipherText1.txt');
    const filePath2 = path.join(process.cwd(), 'data', 'cipherText2.txt');

    // ファイルに暗号文を非同期で書き込む
    await writeFile(filePath1, cipherTextBase64_1, 'utf8');
    await writeFile(filePath2, cipherTextBase64_2, 'utf8');

    return NextResponse.json({ cipherText1: cipherTextBase64_1, cipherText2: cipherTextBase64_2 }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
