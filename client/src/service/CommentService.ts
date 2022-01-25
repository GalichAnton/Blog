import { AxiosResponse } from 'axios';
import {
  CommentResponseType,
  CommentsResponseType,
} from '../types/responseTypes/ResponseTypes';
import { $commentsApi, $commentsApiWithToken } from '../http/CommentsApi';

export default class CommentService {
  static async getAllComments(search = ''): Promise<AxiosResponse<CommentsResponseType>> {
    return $commentsApi.get<CommentsResponseType>(`/comments?query=${search}&limit=100`);
  }

  static async createComment(
    text: string,
    postId: string
  ): Promise<AxiosResponse<CommentResponseType>> {
    return $commentsApiWithToken.post<CommentResponseType>(`/comments/`, { text, postId });
  }

  static async deleteComment(id: string): Promise<void> {
    return $commentsApiWithToken.delete(`/comments/${id}`);
  }

  static async updateComment(
    title: string,
    text: string,
    id: string
  ): Promise<AxiosResponse<CommentResponseType>> {
    return $commentsApiWithToken.patch<CommentResponseType>(`/comments/${id}`, {
      title,
      text,
      id,
    });
  }
}
