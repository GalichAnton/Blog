import axios from 'axios';

export const AUTH_API_URL = `${process.env.REACT_APP_CONTENT_API_URL}/auth`;

const $authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $authApi;
