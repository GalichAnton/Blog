import { AxiosResponse } from 'axios';
import { PostResponseType, PostsResponseType } from '../types/responseTypes/ResponseTypes';
import { $contentApi } from '../http/ContentApi';

export default class PostService {
  static async getPosts(
    searchValue?: string,
    page?: number,
    userId = ''
  ): Promise<AxiosResponse<PostsResponseType>> {
    return $contentApi.get<PostsResponseType>(
      `/posts?page=${page}&query=${searchValue}&userId=${userId}`
    );
  }

  static async getPost(id: string): Promise<AxiosResponse<PostResponseType>> {
    return $contentApi.get<PostResponseType>(`/posts/${id}`);
  }

  static async createPost(
    title: string,
    text: string,
    description: string,
    photoUrl: string
  ): Promise<AxiosResponse<PostResponseType>> {
    return $contentApi.post<PostResponseType>(`/posts/`, {
      title,
      text,
      description,
      photoUrl,
    });
  }

  static async deletePost(id: string): Promise<void> {
    return $contentApi.delete(`/posts/${id}`);
  }

  static async updatePost(
    title: string,
    text: string,
    description: string,
    photoUrl: string,
    id: string
  ): Promise<AxiosResponse<PostResponseType>> {
    return $contentApi.patch<PostResponseType>(`/posts/${id}`, {
      title,
      text,
      description,
      photoUrl,
    });
  }
}
