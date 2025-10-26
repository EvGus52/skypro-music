import styles from './page.module.css';
import Bar from '@/components/Bar/Bar';
import Nav from '@/components/Nav/Nav';
import ErrorBlock from '@/components/ErrorBlock/ErrorBlock';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <ErrorBlock />
        </main>
        <Bar />
      </div>
    </div>
  );
}
