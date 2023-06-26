import React, { FC, FormEvent } from 'react';
import styles from './input.module.css';

interface InputProps {
  label: string;
  onInput: (e: FormEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const Input: FC<InputProps> = ({ label, onInput, placeHolder }) => {
  return (
    <>
      <label htmlFor='name_filter' className={styles.form__label}>
        {label}
      </label>
      <input className={styles.form__input} type='text' placeholder={placeHolder} onInput={onInput} />
    </>
  );
};

export default Input;
