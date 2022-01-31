import React, { ChangeEvent, FC, useState } from 'react';
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
  const [file, setFile] = useState<File>();
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
      onChangeUrl(fileList[0]?.name);
    } else alert('Вы не выбрали файл');
  };
  const onUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      dispatch(getPhotoUrl(formData));
      onChangeUrl(photoUrl);
    }
  };

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
          <label htmlFor="input__file" className={styles.input__fileButton}>
            <span
              className={cn(styles.input__fileButtonText, {
                [styles.input_loading]: loading,
              })}
            >
              <button className={cn(styles.input__btnUpload)} onClick={onUpload}>
                <img
                  className={styles.input__fileIcon}
                  src="/img/add.svg"
                  alt="Выбрать файл"
                  width="25"
                />
              </button>
              {!loading ? 'Выберите файл' : 'Подождите'}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadBar;
