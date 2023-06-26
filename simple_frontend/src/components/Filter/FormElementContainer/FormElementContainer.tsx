import React, { FC } from 'react';
import styles from './formElementContainer.module.css';

const FormElementContainer: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.form__fieldset}>{children}</div>;
};

export default FormElementContainer;
