import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './validationSchema';
import { registerUser, setUserError } from '../../store/actionCreators/userAC';
import { setModalActive } from '../../store/actionCreators/modalAC';
import styles from './form.module.css';
import cn from 'classnames';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState(false);
  const userError = useAppSelector((state) => state.user.userError);
  const loading = useAppSelector((state) => state.user.userLoading);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = ({ fullName, email, password }) => {
    dispatch(registerUser(fullName, email, password));
  };

  const onClose = () => {
    dispatch(setModalActive());
    dispatch(setUserError(''));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate={true}>
      <div className={styles.form__header}>
        <h3>Регистрация</h3>
        <button type="button" className={styles.form__close} onClick={onClose}>
          <img src="./img/close.svg" alt="" />
        </button>
      </div>
      <div className={styles.form__inputContainer}>
        <label className={styles.form__label} htmlFor="fullName">
          Ваше имя
        </label>
        <input
          type="text"
          placeholder="Ваше полное имя"
          className={styles.form__input}
          id="fullName"
          aria-invalid={errors.fullName ? 'true' : 'false'}
          {...register('fullName')}
        />
        {errors.fullName && (
          <span className={styles.form__inputError} role="alert">
            {errors.fullName.message}
          </span>
        )}
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
          Пароль
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
        disabled={!isValid}
        className={cn(styles.form__submit, {
          [styles.form__submit_loading]: loading,
        })}
        type="submit"
      >
        {!loading ? 'Зарегистрироваться' : 'Подожтите...'}
      </button>
    </form>
  );
};

export default RegisterForm;
