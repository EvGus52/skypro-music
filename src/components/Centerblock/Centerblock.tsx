import styles from './centerblock.module.css';
import Search from '../Search/Search';
import { data } from '@/data';
import Filter from '../Filter/Filter';
import Track from '../Track/Track';

export default function Centerblock() {
  return (
    <div className={styles.centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter tracks={data} />
      <Track tracks={data} />
    </div>
  );
}
