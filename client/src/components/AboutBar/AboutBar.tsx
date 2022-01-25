import React, { FC } from 'react';
import styles from './aboutBar.module.css';
const AboutBar: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.about__name}>Vasya Pupkin</h2>
      <h1 className={styles.about__title}>Блог фронтенд-разработчика</h1>
      <img
        className={styles.about__photo}
        src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
        alt="photo"
      />
      <h3 className={styles.about__subtitle}>Обо мне</h3>
      <p className={styles.about__descr}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu
        risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae
        quis nunc suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed porta ac enim.
        Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla sapien
        vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet amet, laoreet proin.
        Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.
      </p>
    </div>
  );
};

export default AboutBar;
