import Link from 'next/link';
import { useState } from 'react';
import { ArtistSchema } from '../graphql/types';

import styles from './styles/ArtistList.module.css';

import blankImg from '../public/images/blank.gif';

export const ArtistList = (props: { artists: ArtistSchema[] }) => {
  const { artists } = props;
  return (
    <>
      {artists.map((item, index) => {
        const [isHover, setIsHover] = useState(false);
        console.log(item.id)
        return (
          <Link href={`/artist/${item.id}`} key={index}>
            <div
              key={index}
              className={styles.artist_box}
              style={{ backgroundImage: `url(${item.photo})` }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <img src={blankImg.src} className={styles.artist_box_img} />
              <div className={styles.artist_box_bg} style={{ opacity: isHover ? 1 : 0 }}>
                <p className={styles.artist_box_bg_name}>{item.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
