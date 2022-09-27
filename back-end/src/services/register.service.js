const md5 = require('md5');
const CustomErro = require('../err/CustomErro');
const { generateToken } = require('../helpers/generate.token');
const registerRepository = require('../repositories/register.repository');

const postUser = async ({ name, email, password }) => {
  const hashedPassword = md5(password);
  const role = 'usuario';

  const user = await registerRepository.getUser({ name, email });
    
  if (user) throw new CustomErro(409, 'Conflict');

  const newUser = await registerRepository.postUser({ name, email, hashedPassword, role });
    
  const token = generateToken(newUser);
    
  return [{ token }];
};
  
module.exports = {
  postUser,
};