import styles from './centerblock.module.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Track from '../Track/Track';
import { TrackType } from '@/sharedTypes/sharedTypes';

type CenterblockProps = {
  tracks: TrackType[];
};

export default function Centerblock({ tracks }: CenterblockProps) {
  return (
    <div className={styles.centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter tracks={tracks} />
      <Track tracks={tracks} playlist={tracks} />
    </div>
  );
}
