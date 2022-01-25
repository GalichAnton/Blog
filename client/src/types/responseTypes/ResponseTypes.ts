import { IUser } from '../userTypes';
import { IPost } from '../postsTypes';
import { IComment } from '../commentType';

export type AuthResponseType = IUser;
export type PostResponseType = IPost;
export type CommentResponseType = IComment;
export interface CommentsResponseType {
  total: number;
  items: IComment[];
}
export interface PostsResponseType {
  total: number;
  items: IPost[];
}

export interface PhotoResponse {
  url: string;
}
