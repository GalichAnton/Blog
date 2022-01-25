import React, { FC } from 'react';
import styles from './modal.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import { setModalActive } from '../../store/actionCreators/modalAC';

const Modal: FC = ({ children }) => {
  const dispatch = useDispatch();
  const { active } = useAppSelector((state) => state.modal);
  const onClickHandler = () => {
    dispatch(setModalActive());
  };
  return (
    <div
      className={cn(styles.modal, {
        [styles.modal__active]: active,
      })}
      onClick={onClickHandler}
    >
      <div
        className={cn(styles.modal__content, {
          [styles.modal__content_active]: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
