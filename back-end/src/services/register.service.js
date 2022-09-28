const md5 = require('md5');
const CustomError = require('../err/CustomError');
const { generateToken } = require('../helpers/generate.token');
const registerRepository = require('../repositories/register.repository');

const postUser = async ({ name, email, password }) => {
  const hashedPassword = md5(password);
  // const role = 'customer';

  const user = await registerRepository.getUser({ name, email });
    
  if (user) throw new CustomError(409, 'Conflict');

  const newUser = await registerRepository.postUser({ 
    name, 
    email, 
    password: hashedPassword, 
    role: 'customer',
  });

  const { id, role } = newUser.dataValues;
  const resultNewUser = { id, name, email, role };
    
  const token = generateToken(resultNewUser);
    
  return { token };
};
  
module.exports = {
  postUser,
};