export const postEvaluate = async () => {
  const res = await fetch('/api/evaluate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await res.json();
  const { cipherText } = data;
  return { cipherText };
}
