import React, { useEffect, useState } from 'react';
import styles from './detailedPost.module.css';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useDispatch } from 'react-redux';
import { getPost } from '../../store/actionCreators/postsAC';
import Comment from '../Comment/Comment';
import { createComment, getAllComments } from '../../store/actionCreators/commentAC';
import MyLoader from '../Skeleton/Loader';
import {
  currentPostSelector,
  postCommentsSelector,
  tokenSelector,
} from '../../store/Selectors/Selectors';
import { SimpleMdeReact } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { dateParser } from '../../utils/DateParser';

const DetailedPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>('');
  const postComments = useAppSelector(postCommentsSelector);
  const loading = useAppSelector((state) => state.posts.loading);
  const token = useAppSelector(tokenSelector);
  const currentPost = useAppSelector(currentPostSelector);
  console.log(id);
  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
    dispatch(getAllComments());
  }, [id]);

  const onChangeComment = (value: string) => {
    setComment(value);
  };

  const sendComment = (text: string, postId: string) => {
    if (text && token) {
      dispatch(createComment(text, postId));
      setComment('');
    } else {
      alert('Введите что то!');
    }
  };

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <div className={styles.detailedPost__container}>
          <div
            className={styles.detailedPost__head}
            style={{ background: 'url(' + currentPost.photoUrl + ')' }}
          >
            <div className={styles.detailedPost__info}>
              <div className={styles.detailedPost__data}>
                {dateParser(currentPost.createdAt)}
              </div>
              <div className={styles.detailedPost__views}>
                <img src="/img/eye.svg" alt="eye" />
                {currentPost.views}
              </div>
            </div>
            <div className={styles.detailedPost__title}>{currentPost.title}</div>
            <div className={styles.detailedPost__subtitle}>{currentPost.user?.fullName}</div>
          </div>
          <div className={styles.detailedPost__body}>
            <div className={styles.detailedPost__text}>{currentPost && currentPost.text}</div>
            <h3 className={styles.detailedPost__commentTitle}>
              Комментарии ({postComments?.length})
            </h3>
            <div className={styles.detailedPost__comments}>
              {postComments?.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            </div>

            {token ? (
              <div className={styles.detailedPost__addComment}>
                <h4 className={styles.detailedPost__addComment_title}>Добавить комментарий</h4>
                <SimpleMdeReact value={comment} onChange={onChangeComment} />
                <button
                  onClick={() => id && sendComment(comment, id)}
                  className={styles.detailedPost__addComment_btn}
                >
                  Отправить
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedPost;
