const axios = require('axios').default;

const makeRequest = async (url, method, data = null, params = null) => {
  const config = {
    method,
    baseURL: 'http://localhost:3005/',
    url: `/${url}`,
    params,
    data,
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;

  // try {
  // } catch (error) {
  //   const message = Promise.resolve({ error });
  //   const result = JSON.parse({ message });
  //   console.log(result);
  //   // console.log(message.toJSON(), message);
  //   return message.toJSON();
  // }
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
