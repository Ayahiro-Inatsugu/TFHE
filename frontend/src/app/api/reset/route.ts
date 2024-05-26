import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const keysFilePath = path.join(process.cwd(), 'data', 'keys.json');
  const cipherText1FilePath = path.join(process.cwd(), 'data', 'cipherText1.txt');
  const cipherText2FilePath = path.join(process.cwd(), 'data', 'cipherText2.txt');
  const reseultFilePath = path.join(process.cwd(), 'data', 'accumulatedCipherText.txt');
  await writeFile(keysFilePath, '', 'utf8');
  await writeFile(cipherText1FilePath, '', 'utf8');
  await writeFile(cipherText2FilePath, '', 'utf8');
  await writeFile(reseultFilePath, '', 'utf8');

  return NextResponse.json({ message: 'Reset success' }, { status: 200 });
}
