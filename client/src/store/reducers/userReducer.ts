import { IUser, IUserState, userActions, UserActionTypes } from '../../types/userTypes';

const initialState: IUserState = {
  user: {} as IUser,
  userError: '',
  userLoading: false,
};

export const userReducer = (state = initialState, action: userActions): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCHING_USER:
      return { ...state, userLoading: true };
    case UserActionTypes.SET_USER:
      return { ...state, user: action.payload, userLoading: false };
    case UserActionTypes.LOGOUT_USER:
      return (state = initialState);
    case UserActionTypes.SET_USER_ERROR:
      return { ...state, userError: action.payload };
    default:
      return state;
  }
};
