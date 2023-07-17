import React from 'react';
import styles from './row.module.css';

interface IRow {
  title: string;
  text: string | number;
}

const Row = ({ title, text }: IRow) => {
  return (
    <div className={styles.row}>
      <p className={styles.row__paragraph}>
        <span className={styles.row__accent}>{title}: </span>
        {text}
      </p>
    </div>
  );
}

export default Row;
