import Image from 'next/image';

import { useEffect, useState } from 'react';

import { MemberSchema } from '../graphql/types';
import { unixTimeToLocalTime } from '../lib/utils';

import styles from './styles/MemberCard.module.css';

export const MemberCard = (props: { members: MemberSchema[] }) => {
  const { members } = props;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex(index >= members.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(timerId);
  }, [index]);
  const increment = () => {
    setIndex(index >= members.length - 1 ? 0 : index + 1);
  };
  const decrement = () => {
    setIndex(index === 0 ? members.length - 1 : index - 1);
  };
  return (
    <>
      <div className={styles.slide}>
        <div className={`${styles.slide_allow} ${styles.left_allow}`} onClick={() => decrement()} />
        <div className={styles.slide_wrapper}>
          <div className={styles.slide_wrapper_box}>
            {members.map((member, photoIndex) => {
              return (
                <div
                  key={photoIndex}
                  className={styles.slide_wrapper_box_pic}
                  style={{
                    opacity: photoIndex === index ? 1 : 0,
                  }}
                >
                  <Image
                    key={photoIndex}
                    src={member.photo}
                    alt='memberPic'
                    width={250}
                    height={300}
                  />
                  <div>
                    <p className={styles.member_ename}>{member.eName}</p>
                    <p className={styles.member_jname}>{member.jName}</p>
                    <p className={styles.member_birth}>
                      生年月日: {unixTimeToLocalTime(member.birth)}
                    </p>
                    <p className={styles.member_type}>血液型: {member.type}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${styles.slide_allow} ${styles.right_allow}`}
          onClick={() => increment()}
        />
      </div>
      <div className={styles.slide_rules}>
        {members.map((_, photoIndex) => {
          return (
            <p
              className={styles.slide_rules_item}
              style={{
                color: photoIndex === index ? 'black' : 'white',
                backgroundColor: photoIndex === index ? 'white' : 'black',
              }}
              key={photoIndex}
            />
          );
        })}
      </div>
    </>
  );
};
