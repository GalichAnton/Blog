import React, { FC } from 'react';
import styles from './menu.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModalActive } from '../../../store/actionCreators/modalAC';
import { removeUser } from '../../../store/actionCreators/userAC';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { tokenSelector, userSelector } from '../../../store/Selectors/Selectors';

interface IProps {
  opened: boolean;
  openMenu: () => void;
}

const Menu: FC<IProps> = ({ opened, openMenu }) => {
  const dispatch = useDispatch();
  const token = useAppSelector(tokenSelector);
  const user = useAppSelector(userSelector);

  const openModal = () => {
    dispatch(setModalActive());
  };
  const logoutHandler = () => {
    dispatch(removeUser());
    localStorage.clear();
  };

  return (
    <div
      className={cn(styles.menu, {
        [styles.menu__hidden]: opened,
      })}
    >
      <div className={styles.blur} onClick={openMenu}>
        <div className={styles.menu__content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.menu__header}>
            <div className={styles.menu__name}>{user?.fullName}</div>
            <div className={styles.menu__date}>
              Дата регистрации:{' '}
              {user &&
                new Date(user.createdAt).toLocaleTimeString(navigator.language, {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
            </div>
          </div>
          <ul className={styles.menu__items}>
            <Link to="/">
              <li className={styles.menu__item}>Главная</li>
            </Link>
            {token && (
              <Link to="/profile">
                <li className={styles.menu__item}>Мой профиль</li>
              </Link>
            )}
            {token && (
              <Link to="/createPost">
                <li className={styles.menu__item}>Создать запись</li>
              </Link>
            )}
            {!token && (
              <li
                onClick={() => {
                  openModal();
                  openMenu();
                }}
                className={styles.menu__item}
              >
                Войти
              </li>
            )}
            {token && (
              <li
                onClick={() => {
                  logoutHandler();
                  openMenu();
                }}
                className={styles.menu__item}
              >
                Выйти
              </li>
            )}
          </ul>
          <div className={styles.menu__footer}>
            <button className={styles.menu__close} onClick={openMenu}>
              <img className={styles.menu__icon} src="/img/close.svg" alt="close" />
              МЕНЮ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
