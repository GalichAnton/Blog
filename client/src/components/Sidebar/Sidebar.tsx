import React, { useState } from 'react';
import styles from './sidebar.module.css';
import Menu from './Menu/Menu';

const Sidebar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const openMenu = () => {
    setMenuHidden((prev) => !prev);
  };
  return (
    <>
      <div className={styles.sidebar__container}>
        <h3 className={styles.sidebar__title}>МЕНЮ</h3>
        <div className={styles.sidebar__burger} onClick={openMenu}>
          <span className={styles.sidebar__line}></span>
          <span className={styles.sidebar__line}></span>
          <span className={styles.sidebar__line}></span>
        </div>
      </div>
      <Menu openMenu={openMenu} opened={menuHidden} />
    </>
  );
};

export default Sidebar;
