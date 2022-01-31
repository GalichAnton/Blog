import { IPost, IPostState, postActions, PostsActionTypes } from '../../types/postsTypes';

const initialState: IPostState = {
  posts: [],
  currentPost: {} as IPost,
  loading: false,
  total: 0,
  error: '',
};

export const postReducer = (state = initialState, action: postActions): IPostState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POST:
      return { ...state, loading: true };
    case PostsActionTypes.CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts], loading: false, error: '' };
    case PostsActionTypes.GET_PAGE_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        total: action.payload.total,
      };
    case PostsActionTypes.GET_POST:
      return { ...state, currentPost: action.payload, loading: false, error: '' };
    case PostsActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loading: false,
        error: '',
      };
    case PostsActionTypes.UPDATE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        error: '',
      };
    case PostsActionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
