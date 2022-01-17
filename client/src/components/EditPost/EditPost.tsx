import React, { SyntheticEvent, useEffect, useState } from 'react';
import styles from './editPost.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import { currentPostSelector } from '../../store/Selectors/Selectors';
import {
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../../store/actionCreators/postsAC';
import { SimpleMdeReact } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useParams } from 'react-router-dom';
import MyLoader from '../Skeleton/Loader';
import cn from 'classnames';

const EditPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useAppSelector((state) => state.posts.loading);
  const [inputValue, setInputValue] = useState({
    title: '',
    text: '',
    photoUrl: '',
  });
  const currentPost = useAppSelector(currentPostSelector);
  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, [id]);

  const onChangeTitle = (e: SyntheticEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      title: e.currentTarget.value,
    });
  };

  const onChangeText = (value: string) => {
    setInputValue({
      ...inputValue,
      text: value,
    });
  };

  const onChangeUrl = (e: SyntheticEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      photoUrl: e.currentTarget.value,
    });
  };

  const editPostClick = () => {
    if (id) {
      dispatch(updatePost(inputValue.title, inputValue.text, inputValue.photoUrl, id));
      dispatch(getAllPosts());
    }
  };

  const deletePostClick = () => {
    if (id) {
      dispatch(deletePost(id));
    }
  };

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <div className={styles.editPost__container}>
          <input
            onChange={onChangeTitle}
            className={styles.editPost__titleInput}
            name="title"
            value={inputValue.title}
            type="text"
            placeholder={currentPost.title}
          />
          <div className={styles.editPost__inputContainer}>
            <label className={styles.editPost__label} htmlFor="shortDescr">
              Короткое описание
            </label>
            <textarea className={styles.editPost__input} name="shortDescr" rows={5} />
          </div>
          <div className={styles.editPost__inputContainer}>
            <label className={styles.editPost__label} htmlFor="url">
              Ссылка на изображение:
            </label>
            <div className={styles.editPost__imgUpload}>
              <input
                onChange={onChangeUrl}
                value={inputValue.photoUrl}
                className={cn(styles.editPost__input, styles.editPost__inputImg)}
                name="url"
                type="url"
              />
              <button className={cn(styles.editPost__imgBtn, styles.editPost__save)}>
                Загрузить
              </button>
            </div>
          </div>
          <div className={styles.editPost__inputContainer}>
            <label className={styles.editPost__label} htmlFor="text">
              Полное описание
            </label>
            <SimpleMdeReact
              onChange={onChangeText}
              value={currentPost.text}
              className={styles.editPost__input}
            />
          </div>
          <div className={styles.editPost__btns}>
            <button onClick={deletePostClick} className={styles.editPost__delete}>
              Удалить
            </button>
            <button onClick={editPostClick} className={styles.editPost__save}>
              Сохранить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPost;
