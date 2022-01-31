import axios, { AxiosRequestConfig } from 'axios';
import { IUserState } from '../types/userTypes';

export const $contentApi = axios.create({
  baseURL: process.env.REACT_APP_CONTENT_API_URL,
});

$contentApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const user: IUserState = JSON.parse(localStorage.getItem('user')!);
    const token = user.user.token;
    console.log(token);
    if (token) {
      config.headers!['Authorization'] = `${token}`;
    }
    config.headers!['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);
