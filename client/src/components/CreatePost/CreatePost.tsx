import React, { SyntheticEvent, useState } from 'react';
import styles from './createPost.module.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/actionCreators/postsAC';
import { SimpleMdeReact } from 'react-simplemde-editor';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux-hooks';
import UploadBar from '../UploadBar/UploadBar';

const CreatePost = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.posts.loading);

  const [inputValue, setInputValue] = useState({
    title: '',
    text: '',
    photoUrl: '',
  });

  const onChangeText = (value: string) => {
    setInputValue({
      ...inputValue,
      text: value,
    });
  };
  const onChangeTitle = (e: SyntheticEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      title: e.currentTarget.value,
    });
  };
  const onChangeUrl = (url: string) => {
    setInputValue({
      ...inputValue,
      photoUrl: url,
    });
  };
  const createPostClick = () => {
    if (inputValue.photoUrl) {
      dispatch(createPost(inputValue.title, inputValue.text, inputValue.photoUrl));
    }
    dispatch(createPost(inputValue.title, inputValue.text));
  };

  return (
    <div className={styles.createPost__container}>
      <input
        onChange={onChangeTitle}
        className={styles.createPost__titleInput}
        name="title"
        value={inputValue.title}
        type="text"
        placeholder="Введите заголовок..."
      />
      <div className={styles.createPost__inputContainer}>
        <label className={styles.createPost__label} htmlFor="shortDescr">
          Короткое описание
        </label>
        <textarea className={styles.createPost__input} name="shortDescr" rows={5} />
      </div>
      <UploadBar onChangeUrl={onChangeUrl} url={inputValue.photoUrl} />
      <div className={styles.createPost__inputContainer}>
        <label className={styles.createPost__label} htmlFor="text">
          Полное описание
        </label>
        <SimpleMdeReact
          onChange={onChangeText}
          value={inputValue.text}
          className={styles.editPost__input}
        />
      </div>
      <button
        onClick={createPostClick}
        className={cn(styles.createPost__btn, {
          [styles.createPost_loading]: loading,
        })}
      >
        {!loading ? 'Опубликовать' : 'Подожтите...'}
      </button>
    </div>
  );
};

export default CreatePost;
