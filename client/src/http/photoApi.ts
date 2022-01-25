import axios from 'axios';

export const PHOTO_API_URL = `http://localhost:5656/posts/`;

const $photoApi = axios.create({
  baseURL: PHOTO_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default $photoApi;
