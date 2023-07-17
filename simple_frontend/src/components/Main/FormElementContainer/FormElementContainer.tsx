import React, { PropsWithChildren } from 'react';
import styles from './formElementContainer.module.css';

const FormElementContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.form__fieldset}>{children}</div>;
};

export default FormElementContainer;
