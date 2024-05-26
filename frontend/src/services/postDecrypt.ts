export const postDecrypt = async() => {
  const res = await fetch('/api/decrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  const { number } = data;
  return { number };
}
