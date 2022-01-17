import axios from 'axios';

export const POST_API_URL = `http://localhost:5656`;

export const $postsApi = axios.create({
  baseURL: POST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const $postsApiWithToken = axios.create({
  baseURL: POST_API_URL,
  headers: {
    Authorization: localStorage.getItem('token') || '',
  },
});
