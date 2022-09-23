const axios = require('axios').default;

const makeRequest = async (url, method, data = null, params = null) => {
  const config = {
    method,
    baseURL: 'http://localhost:3005/',
    url: `/${url}`,
    params,
    data,
  };

  try {
    const resultAxios = await axios(config);
    return resultAxios.data;
  } catch (error) {
    console.error(error);
  }
};

// makeRequest(
//   'login',
//   'post',
//   {
//     email: 'adm@deliveryapp.com',
//     password: '--adm2@21!!--' },
// ).then((res) => console.log(res.data));

module.exports = makeRequest;

// const fetch = await makeRequest('register', post, <body, headers>, 1)
