import { IUser } from './userTypes';

const Post = {
  _id: '61ca0e10d06b1ed9a357aaa7',
  title: 'Заголовок',
  text: 'Текст статьи',
  description: '',
  views: 0,
  photoUrl: '',
  user: {} as IUser,
  createdAt: '2021-12-27T19:03:44.876Z',
  updatedAt: '2021-12-27T19:31:59.093Z',
  __v: 0,
};

export type IPost = typeof Post;

export interface IPostState {
  posts: IPost[];
  currentPost: IPost;
  loading: boolean;
  total: number;
  error: string;
}

export enum PostsActionTypes {
  FETCH_POST = 'FETCH_POST',
  CREATE_POST = 'CREATE_POST',
  GET_POSTS = 'GET_PAGE_POSTS',
  GET_POST = 'GET_POST',
  DELETE_POST = 'DELETE_POST',
  UPDATE_POST = 'UPDATE_POST',
  SET_ERROR = 'SET_ERROR',
}

interface IPostsActionCreate {
  type: PostsActionTypes.CREATE_POST;
  payload: IPost;
}

interface IPagePostGet {
  type: PostsActionTypes.GET_POSTS;
  payload: { posts: IPost[]; total: number };
}

interface IPostActionGet {
  type: PostsActionTypes.GET_POST;
  payload: IPost;
}

interface IPostActionFetch {
  type: PostsActionTypes.FETCH_POST;
}

interface IPostDelete {
  type: PostsActionTypes.DELETE_POST;
  payload: string;
}

interface IPostUpdate {
  type: PostsActionTypes.UPDATE_POST;
  payload: IPost;
}

interface IPostSetError {
  type: PostsActionTypes.SET_ERROR;
  payload: string;
}
export type postActions =
  | IPostsActionCreate
  | IPostActionGet
  | IPostActionFetch
  | IPostDelete
  | IPostUpdate
  | IPagePostGet
  | IPostSetError;
