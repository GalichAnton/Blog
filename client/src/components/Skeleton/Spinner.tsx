import React, { FC } from 'react';
import styles from './spinner.module.css';
interface IProps {
  customText: string;
}
const Spinner: FC<IProps> = ({ customText }) => {
  return (
    <div className={styles.spinnerContainer}>
      <svg width="100%" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="spinner">
          <circle id="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" strokeWidth="18" />
          <circle
            className={styles.upper}
            cx="138"
            cy="138"
            r="123"
            stroke="#72BBFF"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="373 100"
            style={{ animationDuration: '2s' }}
          />
        </g>
      </svg>
      <p>{customText}</p>
    </div>
  );
};

export default Spinner;
