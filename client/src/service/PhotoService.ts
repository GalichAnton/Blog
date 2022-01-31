import { AxiosResponse } from 'axios';
import { PhotoResponse } from '../types/responseTypes/ResponseTypes';
import { $contentApi } from '../http/ContentApi';

export default class PhotoService {
  static async upload(file: any): Promise<AxiosResponse<PhotoResponse>> {
    return $contentApi.post<PhotoResponse>('posts/upload', file);
  }
}
