const Post = {
  _id: '61ca0e10d06b1ed9a357aaa7',
  title: 'Заголовок',
  text: 'Текст статьи',
  views: 0,
  photoUrl: '',
  user: {
    _id: '61c773aa09ab4d6ab0083a8a',
    fullName: 'Vasya Pupkin',
    email: 'test@test.ru',
    password: '$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m',
    createdAt: '2021-12-25T19:40:26.074Z',
    updatedAt: '2021-12-25T19:40:26.074Z',
    __v: 0,
  },
  createdAt: '2021-12-27T19:03:44.876Z',
  updatedAt: '2021-12-27T19:31:59.093Z',
  __v: 0,
};

export type IPost = typeof Post;

export interface IPostState {
  posts: IPost[];
  currentPost: IPost;
  loading: boolean;
}

export enum PostsActionTypes {
  FETCH_POST = 'FETCH_POST',
  CREATE_POST = 'CREATE_POST',
  GET_ALL_POSTS = 'GET_ALL_POSTS',
  GET_POST = 'GET_POST',
  DELETE_POST = 'DELETE_POST',
  UPDATE_POST = 'UPDATE_POST',
}

interface IPostsActionCreate {
  type: PostsActionTypes.CREATE_POST;
  payload: IPost;
}

interface IPostActionGetAll {
  type: PostsActionTypes.GET_ALL_POSTS;
  payload: IPost[];
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

export type postActions =
  | IPostsActionCreate
  | IPostActionGetAll
  | IPostActionGet
  | IPostActionFetch
  | IPostDelete
  | IPostUpdate;
