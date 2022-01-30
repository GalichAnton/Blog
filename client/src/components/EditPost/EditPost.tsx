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
import UploadBar from '../UploadBar/UploadBar';

const EditPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useAppSelector((state) => state.posts.loading);
  const [inputValue, setInputValue] = useState({
    title: '',
    text: '',
    description: '',
    photoUrl: '',
  });
  const currentPost = useAppSelector(currentPostSelector);
  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
    setInputValue({
      title: currentPost.title,
      text: currentPost.text,
      description: currentPost.description,
      photoUrl: currentPost.photoUrl,
    });
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

  const onChangeUrl = (url: string) => {
    setInputValue({
      ...inputValue,
      photoUrl: url,
    });
  };
  const onChangeDescr = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      description: e.currentTarget.value,
    });
  };
  const editPostClick = () => {
    if (id) {
      dispatch(
        updatePost(
          inputValue.title,
          inputValue.text,
          inputValue.description,
          inputValue.photoUrl,
          id
        )
      );
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
            value={currentPost.title}
            type="text"
          />
          <div className={styles.editPost__inputContainer}>
            <label className={styles.editPost__label} htmlFor="shortDescr">
              Короткое описание
            </label>
            <textarea
              onChange={onChangeDescr}
              value={inputValue.description}
              className={styles.editPost__input}
              name="shortDescr"
              rows={5}
            />
          </div>
          <UploadBar onChangeUrl={onChangeUrl} url={inputValue.photoUrl} />
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
