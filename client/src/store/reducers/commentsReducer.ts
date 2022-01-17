import { commentsActions, CommentsActionTypes, ICommentState } from '../../types/commentType';

const initialState: ICommentState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: commentsActions
): ICommentState => {
  switch (action.type) {
    case CommentsActionTypes.CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case CommentsActionTypes.GET_ALL_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
