import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validationSchema';
import { loginUser, setUserError } from '../../store/actionCreators/userAC';
import { setModalActive } from '../../store/actionCreators/modalAC';
import styles from './form.module.css';
import cn from 'classnames';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState(false);
  const userError = useAppSelector((state) => state.user.userError);
  const loading = useAppSelector((state) => state.user.userLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    dispatch(loginUser(email, password));
  };

  const onClose = () => {
    dispatch(setModalActive());
    dispatch(setUserError(''));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate={true}>
      <div className={styles.form__header}>
        <h3>Вход в аккаунт</h3>
        <button type="button" className={styles.form__close} onClick={onClose}>
          <img src="./img/close.svg" alt="" />
        </button>
      </div>
      <div className={styles.form__inputContainer}>
        <label className={styles.form__label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          className={styles.form__input}
          id="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email')}
        />
        {errors.email && (
          <span className={styles.form__inputError} role="alert">
            {errors.email.message}
          </span>
        )}
        {userError && (
          <span className={styles.form__inputError} role="alert">
            {userError}
          </span>
        )}
      </div>
      <div className={styles.form__inputContainer}>
        <label className={styles.form__label} htmlFor="password">
          First name
        </label>
        <div className={styles.form__passwordContainer}>
          <input
            type={inputType ? 'text' : 'password'}
            placeholder="Пароль"
            className={styles.form__input}
            id="password"
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password')}
          />
          <img
            onClick={() => setInputType((prev) => !prev)}
            className={styles.form__passwordToggler}
            src="/img/crossEye.svg"
            alt="cross"
          />
        </div>
        {errors.password && (
          <span className={styles.form__inputError} role="alert">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        className={cn(styles.form__submit, {
          [styles.form__submit_loading]: loading,
        })}
        type="submit"
      >
        {!loading ? 'Войти' : 'Подожтите...'}
      </button>
    </form>
  );
};

export default LoginForm;
