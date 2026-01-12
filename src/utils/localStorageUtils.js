// utils/localStorageUtils.js
export const getEmployees = () => {
  return JSON.parse(localStorage.getItem("employees")) || [];
};

export const saveEmployees = (data) => {
  localStorage.setItem("employees", JSON.stringify(data));
};
