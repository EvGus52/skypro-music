import styles from './not-found.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.errorBlock}>
      <h1 className={styles.errorBlock__title}>404</h1>
      <div className={styles.errorBlock__message}>
        <p className={styles.errorBlock__messageText}>Страница не найдена</p>
        <div className={styles.errorBlock__emoji}>
          <Image
            src="/img/icon/smile_crying.svg"
            alt="crying smile"
            width={52}
            height={52}
          />
        </div>
      </div>
      <div className={styles.errorBlock__content}>
        <div className={styles.errorBlock__textContainer}>
          <p className={styles.errorBlock__text}>Возможно, она была удалена</p>
          <p className={styles.errorBlock__text}>
            или перенесена на другой адрес
          </p>
        </div>
      </div>
      <Link href={'/music/main'} className={styles.errorBlock__button}>
        Вернуться на главную
      </Link>
    </div>
  );
}
