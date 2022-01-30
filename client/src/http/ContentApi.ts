import axios, { AxiosRequestConfig } from 'axios';

export const $contentApi = axios.create({
  baseURL: process.env.REACT_APP_CONTENT_API_URL,
});

$contentApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers!['Authorization'] = `Bearer ${token}`;
    }
    config.headers!['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);
