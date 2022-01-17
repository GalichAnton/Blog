import { Dispatch } from 'redux';
import PhotoService from '../../service/PhotoService';
import { photoActions, PhotoActionTypes } from '../../types/photoTypes';

export const getPhotoUrl = (file: any) => {
  return async (dispatch: Dispatch<photoActions>) => {
    try {
      console.log(file);
      const { data } = await PhotoService.upload(file);
      console.log(data);
      dispatch({
        type: PhotoActionTypes.SET_PHOTO_URL,
        payload: data.url,
      });
    } catch (e: any) {
      console.log(e.response);
    }
  };
};
