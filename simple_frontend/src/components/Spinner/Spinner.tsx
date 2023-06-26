import React from 'react';
import styles from './spinner.module.css';

function Spinner(props) {
  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
