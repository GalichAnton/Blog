import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { modalReducer } from './modalReducer';
import { postReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { searchReducer } from './searchReducer';
import { photoReducer } from './photoReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  posts: postReducer,
  comments: commentsReducer,
  search: searchReducer,
  photo: photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
