import { AxiosResponse } from 'axios';
import { PhotoResponse } from '../types/responseTypes/ResponseTypes';
import $photoApi from '../http/photoApi';

export default class PhotoService {
  static async upload(file: any): Promise<AxiosResponse<PhotoResponse>> {
    return $photoApi.post<PhotoResponse>('upload', file);
  }
}
