import { createSelector } from 'reselect';
import { RootState } from '../reducers/rootReducer';

export const userSelector = (state: RootState) => state.user.user;
export const userIdSelector = (state: RootState) => state.user.user._id;
export const postsSelector = (state: RootState) => state.posts.posts;
export const commentsSelector = (state: RootState) => state.comments.comments;
export const currentPostIdSelector = (state: RootState) => state.posts.currentPost._id;
export const currentPostSelector = (state: RootState) => state.posts.currentPost;
export const tokenSelector = (state: RootState) => state.user.user.token;

export const userCommentsSelector = createSelector(
  [userIdSelector, commentsSelector],
  (id, comments) => {
    return comments.filter((comment) => comment.user._id === id);
  }
);

export const postCommentsSelector = createSelector(
  [commentsSelector, currentPostIdSelector],
  (comments, id) => {
    return comments.filter((comment) => comment.post === id);
  }
);
