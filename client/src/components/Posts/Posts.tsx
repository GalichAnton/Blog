import React, { useEffect, useState } from 'react';
import SearchLine from '../SearchLine/SearchLine';
import styles from './posts.module.css';
import Post from '../Post/Post';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../store/actionCreators/postsAC';
import { useAppSelector } from '../../hooks/redux-hooks';
import cn from 'classnames';
import { postsSelector } from '../../store/Selectors/Selectors';

const Posts = () => {
  const limit = 5;
  const dispatch = useDispatch();
  const posts = useAppSelector(postsSelector);
  const total = useAppSelector((state) => state.posts.total);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const [currentPage, setCurrentPage] = useState(1);
  const [disabled, setDisabled] = useState({ prevDisabled: true, nextDisabled: false });
  const totalPages = Math.ceil(total / limit);
  useEffect(() => {
    dispatch(getPosts(searchValue, currentPage));
  }, []);

  useEffect(() => {
    if (posts.length < total) {
      dispatch(getPosts(searchValue, currentPage));
    }
  }, [currentPage]);

  const onNext = () => {
    if (currentPage < totalPages) {
      console.log(currentPage);
      setDisabled({ ...disabled, prevDisabled: false });
      setCurrentPage((prev) => prev + 1);
      console.log(currentPage);
      return;
    }
    setDisabled({ ...disabled, nextDisabled: true });
  };

  const onPrev = () => {
    if (currentPage > 1) {
      setDisabled({ ...disabled, nextDisabled: false });
      setCurrentPage((prev) => prev - 1);
      return;
    }
    setDisabled({ ...disabled, prevDisabled: true });
  };

  return (
    <div className={styles.posts__container}>
      <SearchLine />
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <div className={styles.posts__bottom}>
        <div className={styles.posts__btns}>
          <button
            disabled={disabled.prevDisabled}
            onClick={() => onPrev()}
            className={cn(styles.posts__arrow, styles.posts__arrowLeft, {
              [styles.posts__arrowDisabled]: disabled.prevDisabled,
            })}
          >
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
          <button
            onClick={() => onNext()}
            disabled={disabled.nextDisabled}
            className={cn(styles.posts__arrow, {
              [styles.posts__arrowDisabled]: disabled.nextDisabled,
            })}
          >
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className={styles.posts__pages}>
          Страница {currentPage} из {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Posts;
