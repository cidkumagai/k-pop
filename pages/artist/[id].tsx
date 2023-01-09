import { useRouter } from 'next/router';

import { DragBox } from '../../components/DragBox';
import { ErrorMsg } from '../../components/ErrorMsg';
import { Loading } from '../../components/Loading';
import { MemberCard } from '../../components/MemberCard';

import { createYoutubeSrc, unixTimeToLocalTime } from '../../lib/utils';
import { useGetArtistById } from '../../lib/queris/getArtist';

import styles from '../../styles/Artist.module.css';
import Head from 'next/head';

export { Artist as default };

const Artist = () => {
  const pageTitle = 'Artist';
  const router = useRouter();
  const id = router.query.id ? String(router.query.id) : '0';
  const { data, loading, error } = useGetArtistById(id);
  const musics = data ? data.getArtist.music : [];
  const music = musics[Math.floor(Math.random() * musics.length)];
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMsg message={error.message} />;
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {data && (
        <DragBox logoPath={data.getArtist.logo}>
          <div className={styles.header_space} />
          <div className={styles.music}>
            <iframe
              className={styles.music_player}
              src={createYoutubeSrc(music.id)}
              title='YouTube video player'
              frameBorder='0'
              allowFullScreen
            />
          </div>
          <div className={styles.space} />
          <MemberCard members={data.getArtist.member} />
          <div className={styles.space} />
          <table border={1} className={styles.artist_table}>
            <tr>
              <th>タイトル</th>
              <th>YouTubeリンク</th>
              <th>投稿日</th>
            </tr>
            {musics.map((music) => {
              return (
                <tr>
                  <td>{music.name}</td>
                  <td>
                    <a href={music.url} className={styles.artist_table_link}>
                      {music.url}
                    </a>
                  </td>
                  <td>{unixTimeToLocalTime(music.date)}</td>
                </tr>
              );
            })}
          </table>
          <div className={styles.space} />
        </DragBox>
      )}
    </>
  );
};
