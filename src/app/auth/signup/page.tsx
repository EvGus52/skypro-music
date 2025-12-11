'use client';

import { regUser } from '@/services/auth/regApi';
import styles from './signup.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !repeatPassword.trim()
    ) {
      return setErrorMessage('Заполните все поля!');
    }

    if (password !== repeatPassword) {
      return setErrorMessage('Пароли не совпадают!');
    }

    setIsLoading(true);

    regUser({ username, email, password })
      .then((res) => {
        console.log(res);
        setSuccessMessage('Поздравляем! Вы успешно зарегистрировались!');
        setTimeout(() => {
          router.push('/auth/signin');
        }, 1000);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            // Запрос был сделан и сервер ответил кодом состояния
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            setErrorMessage(
              error.response.data.message || 'Ошибка при регистрации',
            );
          } else if (error.request) {
            // Запрос был сделан, но ответ не получен
            console.log(error.request);
            setErrorMessage('Пропал интернет');
          } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
            setErrorMessage('Неизвестная ошибка, попробуйте позже');
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Link href="/">
        <div className={styles.modal__logo}>
          <img src="/img/logo_modal.png" alt="logo" />
        </div>
      </Link>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="username"
        placeholder="Имя пользователя"
        onChange={onChangeUsername}
        value={username}
      />
      <input
        className={styles.modal__input}
        type="text"
        name="email"
        placeholder="Почта"
        onChange={onChangeEmail}
        value={email}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={onChangePassword}
        value={password}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="repeatPassword"
        placeholder="Повторите пароль"
        onChange={onChangeRepeatPassword}
        value={repeatPassword}
      />
      {errorMessage && (
        <div className={styles.errorContainer}>{errorMessage}</div>
      )}
      {successMessage && (
        <div className={styles.successContainer}>{successMessage}</div>
      )}
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className={styles.modal__btnSignupEnt}
      >
        Зарегистрироваться
      </button>
    </>
  );
}
