

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8181';

export const registerUser = (newUser) => {
  return axios.post(`${API_BASE_URL}/api/register`, newUser);
};
