export interface IModalState {
  active: boolean;
}

export enum ModalActionTypes {
  SET_MODAL_ACTIVE = 'SET_MODAL_ACTIVE',
}

interface IModalActionActive {
  type: ModalActionTypes.SET_MODAL_ACTIVE;
}

export type modalActions = IModalActionActive;
