export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Example');
    reject(new Error('Error message here'));
  });
}
