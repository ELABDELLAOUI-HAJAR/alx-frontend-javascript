export default function handleResponseFromAPI(promise) {
  const successBody = { status: 200, body: 'success' };
  return promise
    .then(() => successBody)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
