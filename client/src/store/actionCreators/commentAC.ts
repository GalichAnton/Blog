import { Dispatch } from 'redux';
import { commentsActions, CommentsActionTypes } from '../../types/commentType';
import CommentService from '../../service/CommentService';

export const getAllComments = () => {
  return async (dispatch: Dispatch<commentsActions>) => {
    try {
      const { data } = await CommentService.getAllComments();
      dispatch({
        type: CommentsActionTypes.GET_ALL_COMMENTS,
        payload: data.items,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};

export const createComment = (text: string, postId: string) => {
  return async (dispatch: Dispatch<commentsActions>) => {
    try {
      dispatch({ type: CommentsActionTypes.FETCHING_COMENT });
      const { data } = await CommentService.createComment(text, postId);
      dispatch({
        type: CommentsActionTypes.CREATE_COMMENT,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};
