import { IPhotoState, photoActions, PhotoActionTypes } from '../../types/photoTypes';

const initialState: IPhotoState = {
  url: '',
};

export const photoReducer = (state = initialState, action: photoActions): IPhotoState => {
  switch (action.type) {
    case PhotoActionTypes.SET_PHOTO_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};
