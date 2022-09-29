const axios = require('axios').default;

const makeRequest = async (url, method, data = null, params = null) => {
  const config = {
    method,
    baseURL: 'http://localhost:3001/',
    url: `/${url}`,
    params,
    data,
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;
};

// makeRequest(
//   'login',
//   'post',
//   {
//     email: 'adm@deliveryapp.com',
//     password: '--adm2@21!!--' },
// ).then((res) => console.log(res.data));

module.exports = makeRequest;
