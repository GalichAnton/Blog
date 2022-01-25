import axios from 'axios';

export const AUTH_API_URL = `http://localhost:5656/auth`;

const $authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $authApi;
