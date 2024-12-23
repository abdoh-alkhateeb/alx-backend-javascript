module.exports = function (success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
};
