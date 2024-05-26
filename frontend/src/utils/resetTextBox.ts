export const resetTextBox = () => {
  return fetch('/api/reset', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
