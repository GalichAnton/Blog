import { IModalState, modalActions, ModalActionTypes } from '../../types/modalTypes';

const initialState: IModalState = {
  active: false,
};

export const modalReducer = (state = initialState, action: modalActions): IModalState => {
  switch (action.type) {
    case ModalActionTypes.SET_MODAL_ACTIVE:
      return { ...state, active: !state.active };
    default:
      return state;
  }
};
