import styles from './errorBlock.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorBlock() {
  return (
    <div className={styles.errorBlock}>
      <h1 className={styles.errorBlock__title}>404</h1>
      <div className={styles.errorBlock__message}>
        <p className={styles.errorBlock__text}>Страница не найдена</p>
        <Image
          src="/img/icon/smile_crying.svg"
          alt="crying smile"
          width={52}
          height={52}
        />
      </div>
      <p className={styles.errorBlock__hint}>
        Возможно, она была удалена или перенесена на другой адрес
      </p>
      <Link href="/" className={styles.errorBlock__button}>
        Вернуться на главную
      </Link>
    </div>
  );
}
