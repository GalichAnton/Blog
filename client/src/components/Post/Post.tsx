import React, { FC } from 'react';
import styles from './post.module.css';
import { IPost } from '../../types/postsTypes';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import { userSelector } from '../../store/Selectors/Selectors';
import { dateParser } from '../../utils/DateParser';

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
  const user = useAppSelector(userSelector);
  const isOwner = post.user._id === user._id;
  return (
    <NavLink
      to={`/postPage/${post._id}`}
      className={({ isActive }) =>
        isActive ? styles.container + ' ' + styles.container_active : styles.container
      }
    >
      <div className={styles.post__top}>
        <h3 className={styles.post__title}>
          {post.title}
          <object>
            {isOwner ? (
              <NavLink to={`/editPage/${post._id}`}>
                <img src="/img/edit.svg" alt="edit" />
              </NavLink>
            ) : null}
          </object>
        </h3>

        {post.photoUrl && (
          <img
            className={styles.post__img}
            src={
              post.photoUrl.startsWith('http')
                ? post.photoUrl
                : `http://localhost:5656/${post.photoUrl}`
            }
            alt="test"
          />
        )}
      </div>
      <p className={styles.post__descr}>{post.description}</p>
      <div className={styles.post__info}>
        <div className={styles.post__data}>{dateParser(post.createdAt)}</div>
        <div className={styles.post__views}>
          <img src="/img/eye.svg" alt="eye" />
          {post.views}
        </div>
      </div>
    </NavLink>
  );
};

export default Post;
