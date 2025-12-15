'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { clearUser } from '@/store/features/authSlice';

export default function Nav() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { access } = useAppSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthorized = !!access;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    setIsMenuOpen(false);
    router.push('/music/main');
    setTimeout(() => {
      dispatch(clearUser());
    }, 300);
  };

  const handleLoginClick = () => {
    setIsMenuOpen(false);
    router.push('/auth/signin');
  };

  const handleMainClick = () => {
    setIsMenuOpen(false);
    router.push('/music/main');
  };

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Image
          width={250}
          height={170}
          className={styles.logo__image}
          src="/img/logo.png"
          alt={'logo'}
        />
      </div>
      <div className={styles.nav__burger} onClick={toggleMenu}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div
        className={`${styles.nav__menu} ${isMenuOpen ? styles.nav__menu_open : ''}`}
      >
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <p onClick={handleMainClick} className={styles.menu__link}>
              Главное
            </p>
          </li>
          {isAuthorized && (
            <li className={styles.menu__item}>
              <Link
                href="/music/favorites"
                className={styles.menu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Мой плейлист
              </Link>
            </li>
          )}
          <li className={styles.menu__item}>
            {isAuthorized ? (
              <p onClick={logout} className={styles.menu__link}>
                Выйти
              </p>
            ) : (
              <p onClick={handleLoginClick} className={styles.menu__link}>
                Войти
              </p>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
