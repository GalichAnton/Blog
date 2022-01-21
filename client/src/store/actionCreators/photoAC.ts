import { Dispatch } from 'redux';
import PhotoService from '../../service/PhotoService';
import { photoActions, PhotoActionTypes } from '../../types/photoTypes';

export const getPhotoUrl = (file: any) => {
  return async (dispatch: Dispatch<photoActions>) => {
    try {
      dispatch({
        type: PhotoActionTypes.PHOTO_FETCHING,
      });
      const { data } = await PhotoService.upload(file);
      dispatch({
        type: PhotoActionTypes.SET_PHOTO_URL,
        payload: data.url,
      });
      dispatch({
        type: PhotoActionTypes.PHOTO_FETCHED,
      });
    } catch (e: any) {
      dispatch({
        type: PhotoActionTypes.PHOTO_FETCHED,
      });
    }
  };
};
