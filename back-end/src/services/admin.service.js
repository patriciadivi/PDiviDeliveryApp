const md5 = require('md5');
const CustomError = require('../err/CustomError');
// const { generateToken } = require('../helpers/generate.token');
const adminRepository = require('../repositories/admin.repository');

const getUsers = async () => {
  const users = await adminRepository.getUsers();
  return users;
};

const postUser = async ({ name, email, password, role }) => {
  const hashedPassword = md5(password);

  const user = await adminRepository.getUser({ name, email });

  if (user) throw new CustomError(409, 'Conflict');

  await adminRepository.postUser({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return { message: 'New user added successfully' };
};

const deleteUser = async ({ name, email }) => {
    const deletedUser = await adminRepository.deleteUser({ name, email });
    return { message: `${deletedUser} user deleted successfully` };
};

module.exports = {
  postUser,
  getUsers,
  deleteUser,
};
