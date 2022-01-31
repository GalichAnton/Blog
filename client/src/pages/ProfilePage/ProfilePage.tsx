import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchLine from '../../components/SearchLine/SearchLine';
import styles from './profilePage.module.css';
import Post from '../../components/Post/Post';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import Comment from '../../components/Comment/Comment';
import { getAllComments } from '../../store/actionCreators/commentAC';
import { postsSelector, userCommentsSelector } from '../../store/Selectors/Selectors';
import { getPosts } from '../../store/actionCreators/postsAC';
import { dateParser } from '../../utils/DateParser';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user);

  const posts = useAppSelector(postsSelector);
  const userComments = useAppSelector(userCommentsSelector);

  const [activeTab, setActiveTab] = useState<string>('posts');

  useEffect(() => {
    dispatch(getPosts('', 1, user._id));
    dispatch(getAllComments());
  }, []);

  const onPostTabClick = () => {
    setActiveTab('posts');
  };

  const onCommentTabClick = () => {
    setActiveTab('comment');
  };

  return (
    <>
      <div className={styles.profile__container}>
        <SearchLine />
        <Sidebar />
        <div className={styles.profile__content}>
          <div className={styles.profile__head}>
            <h1 className={styles.profile__name}>{user?.fullName}</h1>
            <h3 className={styles.profile__date}>
              Дата регистрации:
              <b>{user && dateParser(user.createdAt)}</b>
            </h3>
          </div>
          <div className={styles.profile__tabs}>
            <button
              onClick={onPostTabClick}
              className={cn(styles.profile__tab, {
                [styles.profile__tabActive]: activeTab === 'posts',
              })}
            >
              Статьи
            </button>
            <button
              onClick={onCommentTabClick}
              className={cn(styles.profile__tab, {
                [styles.profile__tabActive]: activeTab === 'comment',
              })}
            >
              Комментарии
            </button>
          </div>
          {activeTab === 'posts' && (
            <div className={styles.profile__posts}>
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
          )}
          {activeTab === 'comment' && (
            <div className={styles.profile__comments}>
              {userComments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
