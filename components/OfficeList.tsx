import { useAppSelector } from '../lib/app/hooks';
import { ArtistList } from './ArtistList';

import styles from './styles/OfficeList.module.css';

export const OfficeList = () => {
  const { officeData } = useAppSelector((state) => state.kpop);
  return (
    <>
      {officeData?.map((item, index) => {
        return (
          <div key={index}>
            <p className={styles.office_list_name}>{item.name}</p>
            <ArtistList artists={item.artist}/>
          </div>
        );
      })}
    </>
  );
};
