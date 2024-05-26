export const postEncrypt = async(inputLeft: string, inputRight: string) => {
  const res = await fetch('/api/encrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      number1: inputLeft,
      number2: inputRight
    })
  });
    const data = await res.json();
    const { cipherText1, cipherText2 } = data;
  return { cipherText1, cipherText2 };
}
