import Image from 'next/image';

import { useState } from 'react';

import styles from './styles/DragBox.module.css';

export const DragBox = (props: { logoPath: string; children: React.ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div
      onMouseMove={(e) => mouseMove(e)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.dragger_wrapper}
    >
      <Image
        src={props.logoPath}
        alt='dragger'
        width={40}
        height={40}
        className={styles.dragger_wrapper_logo}
        style={{
          display: isHover ? 'flex' : 'none',
          top: y - 20,
          left: x - 20,
        }}
      />
      {props.children}
    </div>
  );
};
