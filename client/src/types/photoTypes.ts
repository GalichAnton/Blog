export interface IPhotoState {
  url: string;
  loading: boolean;
}

export enum PhotoActionTypes {
  PHOTO_FETCHING = 'PHOTO_FETCHING',
  SET_PHOTO_URL = 'SET_PHOTO_URL',
  PHOTO_FETCHED = 'PHOTO_FETCHED',
}

interface IPhotoActionActive {
  type: PhotoActionTypes.SET_PHOTO_URL;
  payload: string;
}

interface IPhotoFetching {
  type: PhotoActionTypes.PHOTO_FETCHING;
}

interface IPhotoFetched {
  type: PhotoActionTypes.PHOTO_FETCHED;
}
export type photoActions = IPhotoActionActive | IPhotoFetching | IPhotoFetched;
