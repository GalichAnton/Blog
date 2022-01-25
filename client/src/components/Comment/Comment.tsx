import React, { FC } from 'react';
import styles from './comment.module.css';
import { IComment } from '../../types/commentType';
import { dateParser } from '../../utils/DateParser';

interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
  return (
    <div className={styles.comment__container}>
      <div className={styles.comment__head}>
        <div className={styles.comment__name}>{comment.user.fullName}</div>
        <div className={styles.comment__date}>{dateParser(comment.createdAt)}</div>
      </div>
      <div className={styles.comment__text}>{comment.text}</div>
    </div>
  );
};

export default Comment;
