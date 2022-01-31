import React, { SyntheticEvent, useState, KeyboardEvent } from 'react';
import styles from './SearchLine.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setModalActive } from '../../store/actionCreators/modalAC';
import { useAppSelector } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/actionCreators/userAC';
import { Link } from 'react-router-dom';
import { tokenSelector } from '../../store/Selectors/Selectors';
import { getPosts } from '../../store/actionCreators/postsAC';
import { setSearchValue } from '../../store/actionCreators/searchAC';

const SearchLine = () => {
  const dispatch = useDispatch();
  const token = useAppSelector(tokenSelector);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const [inputOpen, setInputOpen] = useState(false);
  const handleOpen = () => {
    setInputOpen((prev) => !prev);
  };

  const onClickHandler = () => {
    dispatch(setModalActive());
  };
  const logoutHandler = () => {
    if (confirm('Вы действительно хотите выйти?')) {
      dispatch(removeUser());
      localStorage.clear();
    }
  };

  const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(getPosts(searchValue));
      dispatch(setSearchValue(''));
    }
  };

  return (
    <div className={styles.container}>
      <Link to={'/'}>
        <h4 className={styles.title}>VASYA BLOG</h4>
      </Link>
      <div
        className={cn(styles.search, {
          [styles.search_open]: inputOpen,
        })}
      >
        <input
          placeholder="Поиск статьи по заголовку или тексту..."
          className={styles.input}
          type="text"
          onChange={onChangeHandler}
          value={searchValue}
          onKeyPress={(e) => onKeyPress(e)}
        />
        <button onClick={handleOpen} className={styles.close}>
          <img src="/img/close.svg" alt="close" />
        </button>
      </div>
      {token ? (
        <div className={styles.iconBox}>
          <button onClick={handleOpen} className={styles.icon}>
            <img src="/img/search.svg" alt="search" />
          </button>
          <Link to="/createPost">
            <button className={styles.icon}>
              <img src="/img/edit.svg" alt="profile" />
            </button>
          </Link>
          <Link to="/">
            <button className={styles.icon} onClick={logoutHandler}>
              <img src="/img/logout.svg" alt="profile" />
            </button>
          </Link>
        </div>
      ) : (
        <div className={styles.iconBox}>
          <button onClick={handleOpen} className={styles.icon}>
            <img src="/img/search.svg" alt="search" />
          </button>
          <button className={styles.icon} onClick={onClickHandler}>
            <img src="/img/profile.svg" alt="profile" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchLine;
