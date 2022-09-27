const md5 = require('md5');
const CustomErro = require('../err/CustomErro');
const { generateToken } = require('../helpers/generate.token');
const registerRepository = require('../repositories/register.repository');

const postUser = async ({ name, email, password }) => {
  const hashedPassword = md5(password);

  const user = await registerRepository.getUser({ name, email });
    
  if (user) throw new CustomErro(409, 'Conflict');

  const newUser = await registerRepository.postUser({ name, email, hashedPassword });
    
  const token = generateToken(user);
    
  return [newUser, { token }];
};
  
module.exports = {
  postUser
};
  