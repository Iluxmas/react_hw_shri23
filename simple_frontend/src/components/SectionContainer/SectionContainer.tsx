import React from 'react';
import styles from './sectionContainer.module.css';

function SectionContainer({ children }) {
  return <div className={styles.page}>{children}</div>;
}

export default SectionContainer;
