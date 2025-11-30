'use client';

import { ReactNode } from 'react';
import styles from './layout.module.css';
import Bar from '@/components/Bar/Bar';
import Nav from '@/components/Nav/Nav';
import Sidebar from '@/components/Sidebar/Sidebar';
import Search from '@/components/Search/Search';
import Filter from '@/components/Filter/Filter';
import {
  MusicLayoutProvider,
  useMusicLayout,
} from '@/context/MusicLayoutContext';
import centerblockStyles from '@/components/Centerblock/centerblock.module.css';
import trackStyles from '@/components/Track/track.module.css';
import classNames from 'classnames';

function MusicLayoutContent({ children }: { children: ReactNode }) {
  const { title, tracks } = useMusicLayout();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={centerblockStyles.centerblock}>
            <Search />
            <h2 className={centerblockStyles.centerblock__h2}>{title}</h2>
            {tracks.length > 0 && <Filter tracks={tracks} />}
            <div className={trackStyles.centerblock__content}>
              <div className={trackStyles.content__title}>
                <div
                  className={classNames(
                    trackStyles.playlistTitle__col,
                    trackStyles.col01,
                  )}
                >
                  Трек
                </div>
                <div
                  className={classNames(
                    trackStyles.playlistTitle__col,
                    trackStyles.col02,
                  )}
                >
                  Исполнитель
                </div>
                <div
                  className={classNames(
                    trackStyles.playlistTitle__col,
                    trackStyles.col03,
                  )}
                >
                  Альбом
                </div>
                <div
                  className={classNames(
                    trackStyles.playlistTitle__col,
                    trackStyles.col04,
                  )}
                >
                  <svg className={trackStyles.playlistTitle__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              {children}
            </div>
          </div>
          <Sidebar />
        </main>
        <Bar />
      </div>
    </div>
  );
}

interface MusicLayoutProps {
  children: ReactNode;
}

export default function MusicLayout({ children }: MusicLayoutProps) {
  return (
    <MusicLayoutProvider>
      <MusicLayoutContent>{children}</MusicLayoutContent>
    </MusicLayoutProvider>
  );
}
