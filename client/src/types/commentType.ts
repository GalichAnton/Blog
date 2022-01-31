import { IUser } from './userTypes';

const Comment = {
  _id: '61ca222fffbfbb7360ac71d0',
  text: 'текст комментария',
  post: '',
  user: {} as IUser,
  createdAt: '2021-12-27T20:29:35.448Z',
  updatedAt: '2021-12-27T20:29:35.448Z',
  __v: 0,
};

export type IComment = typeof Comment;

export interface ICommentState {
  comments: IComment[];
  loading: boolean;
  error: string;
}

export enum CommentsActionTypes {
  FETCHING_COMENT = 'FETCHING_COMENT',
  CREATE_COMMENT = 'CREATE_COMMENT',
  GET_ALL_COMMENTS = 'GET_ALL_COMMENTS',
}

interface ICommentActionCreate {
  type: CommentsActionTypes.CREATE_COMMENT;
  payload: IComment;
}

interface ICommentsActionGetAll {
  type: CommentsActionTypes.GET_ALL_COMMENTS;
  payload: IComment[];
}

interface ICommentFetching {
  type: CommentsActionTypes.FETCHING_COMENT;
}

export type commentsActions = ICommentActionCreate | ICommentsActionGetAll | ICommentFetching;
