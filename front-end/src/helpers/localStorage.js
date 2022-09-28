export const setLocalStorage = (name, email, role, token) => {
  localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
};

export const getLocalStorage = () => {
  const localStorageGET = JSON.parse(localStorage.getItem('user'));
  return localStorageGET;
};

export const removeLocalStorage = () => {
  localStorage.removeItem('user');
};
