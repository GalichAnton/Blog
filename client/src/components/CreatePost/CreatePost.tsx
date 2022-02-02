import React, { SyntheticEvent, useMemo, useState } from 'react';
import styles from './createPost.module.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/actionCreators/postsAC';
import SimpleMdeReact from 'react-simplemde-editor';
import SimpleMDE from 'easymde';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux-hooks';
import UploadBar from '../UploadBar/UploadBar';
const CreatePost = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.posts.loading);
  const error = useAppSelector((state) => state.posts.error);

  const [inputValue, setInputValue] = useState({
    title: '',
    text: '',
    description: '',
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

  const onChangeDescr = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      description: e.currentTarget.value,
    });
  };

  const createPostClick = async () => {
    await dispatch(
      createPost(inputValue.title, inputValue.text, inputValue.description, inputValue.photoUrl)
    );
  };
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    } as SimpleMDE.Options;
  }, []);
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
        <textarea
          onChange={onChangeDescr}
          value={inputValue.description}
          className={styles.createPost__input}
          name="shortDescr"
          rows={5}
        />
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
          options={autofocusNoSpellcheckerOptions}
        />
      </div>
      <div className={styles.createPost_bottom}>
        {error ? <h2 className={styles.createPost_error}>{error}</h2> : null}
        <button
          onClick={createPostClick}
          className={cn(styles.createPost__btn, {
            [styles.createPost_loading]: loading,
          })}
        >
          {!loading ? 'Опубликовать' : 'Подожтите...'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
