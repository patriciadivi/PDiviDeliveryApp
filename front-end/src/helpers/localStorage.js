export const setUserLocalStorage = (name, email, role, token) => {
  localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
};

export const getUserLocalStorage = () => {
  const localStorageGET = JSON.parse(localStorage.getItem('user'));
  return localStorageGET;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('user');
};
