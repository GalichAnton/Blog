import React, { ChangeEvent, FC, useEffect } from 'react';
import styles from './uploadBar.module.css';
import cn from 'classnames';
import { getPhotoUrl } from '../../store/actionCreators/photoAC';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useDispatch } from 'react-redux';
interface IProps {
  onChangeUrl: (url: string) => void;
  url: string;
}

const UploadBar: FC<IProps> = ({ onChangeUrl, url }) => {
  const dispatch = useDispatch();
  const photoUrl = useAppSelector((state) => state.photo.url);
  const loading = useAppSelector((state) => state.photo.loading);
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const formData = new FormData();
      formData.append('file', fileList[0]);
      dispatch(getPhotoUrl(formData));
    } else window.alert('Вы не выбрали файл');
  };
  useEffect(() => {
    onChangeUrl(photoUrl);
  }, [photoUrl]);
  return (
    <div className={styles.uploadBar__inputContainer}>
      <label className={styles.uploadBar__label} htmlFor="url">
        Ссылка на изображение:
      </label>
      <div className={styles.uploadBar__imgUpload}>
        <input
          onChange={(e) => onChangeUrl(e ? e.currentTarget.value : photoUrl)}
          value={url}
          className={cn(styles.uploadBar__input, styles.uploadBar__inputImg)}
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
          <label
            htmlFor="input__file"
            className={cn(styles.input__fileButton, {
              [styles.input_loading]: loading,
            })}
          >
            {!loading ? 'Выберите файл' : 'Подождите'}
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadBar;
