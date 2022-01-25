import { modalActions, ModalActionTypes } from '../../types/modalTypes';

export const setModalActive = (): modalActions => {
  return {
    type: ModalActionTypes.SET_MODAL_ACTIVE,
  };
};
