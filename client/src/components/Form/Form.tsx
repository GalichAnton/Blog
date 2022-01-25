import React, { useState } from 'react';
import styles from './form.module.css';
import { useDispatch } from 'react-redux';
import { setUserError } from '../../store/actionCreators/userAC';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Form = () => {
  const dispatch = useDispatch();
  const onFormChange = () => {
    setRegistration((prev) => !prev);
    dispatch(setUserError(''));
  };
  const [registration, setRegistration] = useState(false);
  return (
    <>
      {registration ? <RegisterForm /> : <LoginForm />}
      <span className={styles.form__registration} onClick={() => onFormChange()}>
        {registration ? 'Войти на аккаунт' : 'У Вас еще нет аккаунта? Зарегистрироваться!'}
      </span>
    </>
  );
};

export default Form;
