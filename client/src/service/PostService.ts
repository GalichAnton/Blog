import { AxiosResponse } from 'axios';
import { PostResponseType, PostsResponseType } from '../types/responseTypes/ResponseTypes';
import { $contentApi } from '../http/ContentApi';

export default class PostService {
  static async getAllPost(search = ''): Promise<AxiosResponse<PostsResponseType>> {
    return $contentApi.get<PostsResponseType>(`/posts?query=${search}&limit=100`);
  }

  static async getPagePosts(): Promise<AxiosResponse<PostsResponseType>> {
    return $contentApi.get<PostsResponseType>(`/posts`);
  }

  static async getPost(id: string): Promise<AxiosResponse<PostResponseType>> {
    return $contentApi.get<PostResponseType>(`/posts/${id}`);
  }

  static async createPost(
    title: string,
    text: string,
    photoUrl?: string
  ): Promise<AxiosResponse<PostResponseType>> {
    return $contentApi.post<PostResponseType>(`/posts/`, { title, text, photoUrl });
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
