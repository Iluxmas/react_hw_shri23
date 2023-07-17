import React, { PropsWithChildren } from 'react';
import styles from './sectionContainer.module.css';

const SectionContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
}

export default SectionContainer;
