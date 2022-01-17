export interface IPhotoState {
  url: string;
}

export enum PhotoActionTypes {
  SET_PHOTO_URL = 'SET_PHOTO_URL',
}

interface IPhotoActionActive {
  type: PhotoActionTypes.SET_PHOTO_URL;
  payload: string;
}

export type photoActions = IPhotoActionActive;
