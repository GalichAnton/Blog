const User = {
  _id: '61ca26319536ce2a60ec54f2',
  fullName: 'Vasya Pupkin',
  email: 'test@test.ru',
  password: '$2a$10$SILGY9XbHXr3aXMQXDEuNe9PkjP5RufOCrMoBPd9mpgy.ISbQEAZu',
  createdAt: '2021-12-27T20:46:41.497Z',
  updatedAt: '2021-12-27T20:46:41.497Z',
  __v: 0,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWNhMjYzMTk1MzZjZTJhNjBlYzU0ZjIiLCJpYXQiOjE2NDA2MzgyNjQsImV4cCI6MTY0MzIzMDI2NH0.T8wiKcAXFtpkSdeAawYK_JIkiaJACeIHexcdyw-bWnk',
};

export type IUser = typeof User;

export interface IUserState {
  user: IUser;
  userError: string;
  userLoading: boolean;
}

export enum UserActionTypes {
  FETCHING_USER = 'FETCHING_USER',
  SET_USER = 'SET_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SET_USER_ERROR = 'SET_USER_ERROR',
}
interface ISetUserFetching {
  type: UserActionTypes.FETCHING_USER;
}
interface ISetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}

interface ILogoutUserAction {
  type: UserActionTypes.LOGOUT_USER;
}

interface ISetUserErrorAction {
  type: UserActionTypes.SET_USER_ERROR;
  payload: string;
}

export type userActions =
  | ISetUserAction
  | ILogoutUserAction
  | ISetUserErrorAction
  | ISetUserFetching;
