import { AxiosResponse } from 'axios';
import {
  CommentResponseType,
  CommentsResponseType,
} from '../types/responseTypes/ResponseTypes';
import { $contentApi } from '../http/ContentApi';

export default class CommentService {
  static async getAllComments(search = ''): Promise<AxiosResponse<CommentsResponseType>> {
    return $contentApi.get<CommentsResponseType>(`/comments?query=${search}&limit=100`);
  }

  static async createComment(
    text: string,
    postId: string
  ): Promise<AxiosResponse<CommentResponseType>> {
    return $contentApi.post<CommentResponseType>(`/comments/`, { text, postId });
  }

  static async deleteComment(id: string): Promise<void> {
    return $contentApi.delete(`/comments/${id}`);
  }

  static async updateComment(
    title: string,
    text: string,
    id: string
  ): Promise<AxiosResponse<CommentResponseType>> {
    return $contentApi.patch<CommentResponseType>(`/comments/${id}`, {
      title,
      text,
      id,
    });
  }
}
