const md5 = require('md5');
const CustomError = require('../err/CustomError');
const { generateToken } = require('../helpers/generate.token');
const adminRepository = require('../repositories/admin.repository');

const postUser = async ({ name, email, password, role }) => {
  const hashedPassword = md5(password);
  // const role = 'customer';

  const user = await adminRepository.getUser({ name, email });
    
  if (user) throw new CustomError(409, 'Conflict');

  const newUser = await adminRepository.postUser({ 
    name,
    email,
    password: hashedPassword, 
    role,
  });

  console.log(newUser, 'newUser');

  // const { id, role } = newUser.dataValues;
  // const resultNewUser = { id, name, email, role };
    
  const token = generateToken(newUser);
    
  return { token };
};

const getUser = async ({ name, email, role }) => {
    const users = await adminRepository.getUser({ name, email, role });
    return users
};

const deleteUser = async ({ name, email, role }) => {
    const deletedUser = await adminRepository.deleteUser({ name, email });
    return deleteUser
};
  
module.exports = {
  postUser,
  getUser,
  deleteUser,
};