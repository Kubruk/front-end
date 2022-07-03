import api from '@helpers/api';

const hasToken = () => {
  const token = localStorage.getItem('token');

  if (!token) false;
  return true;
};

const onLogin = (token) => {
  localStorage.setItem('token', token);
};
