import React, { FC } from 'react';
import styles from './mainLayout.module.css';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <Posts />
      <Sidebar />
      <Modal>
        <Form />
      </Modal>
    </div>
  );
};

export default MainLayout;
