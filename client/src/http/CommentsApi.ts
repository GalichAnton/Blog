import axios from 'axios';

export const COMMENTS_API_URL = `http://localhost:5656`;

export const $commentsApi = axios.create({
  baseURL: COMMENTS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const $commentsApiWithToken = axios.create({
  baseURL: COMMENTS_API_URL,
  headers: {
    Authorization: localStorage.getItem('token') || '',
  },
});
