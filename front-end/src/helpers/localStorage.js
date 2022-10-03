export const setUserLocalStorage = (data) => {
  localStorage.setItem('user', JSON.stringify({ ...data }));
};

export const getUserLocalStorage = () => {
  const localStorageGET = JSON.parse(localStorage.getItem('user'));
  return localStorageGET;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('user');
};
