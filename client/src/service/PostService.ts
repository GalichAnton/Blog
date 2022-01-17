import { $postsApi, $postsApiWithToken } from '../http/PostsApi';
import { AxiosResponse } from 'axios';
import { PostResponseType, PostsResponseType } from '../types/responseTypes/ResponseTypes';

export default class PostService {
  static async getAllPost(search = ''): Promise<AxiosResponse<PostsResponseType>> {
    return $postsApi.get<PostsResponseType>(`/posts?query=${search}&limit=100`);
  }

  static async getPost(id: string): Promise<AxiosResponse<PostResponseType>> {
    return $postsApi.get<PostResponseType>(`/posts/${id}`);
  }

  static async createPost(
    title: string,
    text: string,
    photoUrl: string
  ): Promise<AxiosResponse<PostResponseType>> {
    return $postsApiWithToken.post<PostResponseType>(`/posts/`, { title, text, photoUrl });
  }

  static async deletePost(id: string): Promise<void> {
    return $postsApiWithToken.delete(`/posts/${id}`);
  }

  static async updatePost(
    title: string,
    text: string,
    photoUrl: string,
    id: string
  ): Promise<AxiosResponse<PostResponseType>> {
    return $postsApiWithToken.patch<PostResponseType>(`/posts/${id}`, {
      title,
      text,
      photoUrl,
      id,
    });
  }
}
