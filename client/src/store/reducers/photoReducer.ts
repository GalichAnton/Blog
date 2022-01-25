import { IPhotoState, photoActions, PhotoActionTypes } from '../../types/photoTypes';

const initialState: IPhotoState = {
  url: '',
  loading: false,
};

export const photoReducer = (state = initialState, action: photoActions): IPhotoState => {
  switch (action.type) {
    case PhotoActionTypes.PHOTO_FETCHING:
      return { ...state, loading: true };
    case PhotoActionTypes.SET_PHOTO_URL:
      return { ...state, url: action.payload };
    case PhotoActionTypes.PHOTO_FETCHED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
