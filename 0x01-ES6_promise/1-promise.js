export default function getResponseFromAPI(success) {
  return Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
