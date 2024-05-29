export const postEvaluate = async (computingMethod: string) => {
  const res = await fetch('/api/evaluate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ computingMethod: computingMethod })
  });
  const data = await res.json();
  const { cipherText } = data;
  return { cipherText };
}
