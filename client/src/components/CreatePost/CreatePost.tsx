import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import styles from './createPost.module.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/actionCreators/postsAC';
import { SimpleMdeReact } from 'react-simplemde-editor';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getPhotoUrl } from '../../store/actionCreators/photoAC';

const CreatePost = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.posts.loading);
  const photoUrl = useAppSelector((state) => state.photo.url);
  const [file, setFile] = useState<File>();
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
  const onChangeUrl = (e: SyntheticEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      photoUrl: e.currentTarget.value,
    });
  };
  const createPostClick = () => {
    dispatch(createPost(inputValue.title, inputValue.text, inputValue.photoUrl));
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
      setInputValue({ ...inputValue, photoUrl: fileList[0].name });
      console.log(fileList[0]);
    }
  };

  const onUpload = () => {
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      dispatch(getPhotoUrl(formData));
      setInputValue({ ...inputValue, photoUrl: photoUrl });
    }
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
      <div className={styles.createPost__inputContainer}>
        <label className={styles.createPost__label} htmlFor="url">
          Ссылка на изображение:
        </label>
        <div className={styles.createPost__imgUpload}>
          <input
            onChange={onChangeUrl}
            value={inputValue.photoUrl}
            className={cn(styles.createPost__input, styles.createPost__inputImg)}
            name="url"
            type="url"
          />
          <div className={styles.input__wrapper}>
            <input
              onChange={onChangeFile}
              name="file"
              type="file"
              id="input__file"
              className={cn(styles.input, styles.input__file)}
              multiple
            />
            <label htmlFor="input__file" className={styles.input__fileButton}>
              <span className={styles.input__fileButtonText}>
                <button className={styles.input__btnUpload} onClick={onUpload}>
                  <img
                    className={styles.input__fileIcon}
                    src="/img/add.svg"
                    alt="Выбрать файл"
                    width="25"
                  />
                </button>
                Выберите файл
              </span>
            </label>
          </div>
        </div>
      </div>
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
