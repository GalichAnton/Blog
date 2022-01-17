import { Dispatch } from 'redux';
import { commentsActions, CommentsActionTypes } from '../../types/commentType';
import CommentService from '../../service/CommentService';

export const getAllComments = () => {
  return async (dispatch: Dispatch<commentsActions>) => {
    try {
      const { data } = await CommentService.getAllComments();
      console.log(data);
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
      const { data } = await CommentService.createComment(text, postId);
      console.log(data);
      dispatch({
        type: CommentsActionTypes.CREATE_COMMENT,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};
