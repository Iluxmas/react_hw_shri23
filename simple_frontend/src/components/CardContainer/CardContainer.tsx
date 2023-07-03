import React, { PropsWithChildren } from 'react';
import styles from './cardContainer.module.css';

interface CardContainerProps extends PropsWithChildren<{ style?: string; onClick?: () => void }> {}

const CardContainer = ({ children, style }: CardContainerProps) => {
  return <div className={`${styles.container} ${style || ''}`}>{children}</div>;
};

export default CardContainer;
