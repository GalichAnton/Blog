import $authApi from '../http/AuthApi';
import { AxiosResponse } from 'axios';
import { AuthResponseType } from '../types/responseTypes/ResponseTypes';

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseType>> {
    return $authApi.post<AuthResponseType>('/login', { email, password });
  }

  static async registration(
    fullName: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseType>> {
    return $authApi.post<AuthResponseType>('/register', { fullName, email, password });
  }
}
