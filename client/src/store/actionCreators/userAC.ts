import { userActions, UserActionTypes } from '../../types/userTypes';
import { Dispatch } from 'redux';
import AuthService from '../../service/AuthService';
import { modalActions, ModalActionTypes } from '../../types/modalTypes';

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<userActions | modalActions>) => {
    try {
      dispatch({ type: UserActionTypes.FETCHING_USER });
      const response = await AuthService.login(email, password);
      dispatch({
        type: UserActionTypes.SET_USER,
        payload: response.data,
      });
      dispatch({ type: UserActionTypes.SET_USER_ERROR, payload: '' });
      dispatch({ type: ModalActionTypes.SET_MODAL_ACTIVE });
    } catch (e: any) {
      if (e.response) {
        dispatch(setUserError(e.response.data.error));
      } else if (e.request) {
        console.log(e.request);
      }
      dispatch({ type: UserActionTypes.FETCHING_USER });
    }
  };
};

export const registerUser = (fullName: string, email: string, password: string) => {
  return async (dispatch: Dispatch<userActions | modalActions>) => {
    try {
      dispatch({ type: UserActionTypes.FETCHING_USER });
      const response = await AuthService.registration(fullName, email, password);
      dispatch({
        type: UserActionTypes.SET_USER,
        payload: response.data,
      });
      dispatch({ type: UserActionTypes.SET_USER_ERROR, payload: '' });
      dispatch({ type: ModalActionTypes.SET_MODAL_ACTIVE });
    } catch (e: any) {
      if (e.response) {
        console.log(e.response.data.error);
        dispatch(setUserError(e.response.data.error));
      } else if (e.request) {
        console.log(e.request);
      }
    }
  };
};

export const removeUser = (): userActions => {
  return {
    type: UserActionTypes.LOGOUT_USER,
  };
};

export const setUserError = (errorMessage: string): userActions => {
  return {
    type: UserActionTypes.SET_USER_ERROR,
    payload: errorMessage,
  };
};
