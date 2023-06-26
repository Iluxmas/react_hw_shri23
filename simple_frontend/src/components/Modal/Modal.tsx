'use client';
import React from 'react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CardContainer from '../CardContainer/CardContainer';
import styles from './modal.module.css';

interface ButtonProps {
  style: string;
  text?: string;
  onClickAction: MouseEventHandler<HTMLButtonElement>;
}

interface ModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

const Button = ({ style, text, onClickAction }: ButtonProps) => {
  return (
    <button className={`${styles.modal__button} ${style || ''}`} onClick={onClickAction}>
      {text}
    </button>
  );
};

const Popup = ({ onConfirm, onClose }: ModalProps) => {
  const modalRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    function handlerOutsideClick(event: MouseEvent) {
      if (event.target === modalRef.current) {
        onClose();
      }
    }

    document.addEventListener('click', handlerOutsideClick);

    return () => document.removeEventListener('click', handlerOutsideClick);
  }, []);

  return (
    <div className={styles.modal} ref={modalRef}>
      <CardContainer style={styles.modal__wrapper}>
        <h3 className={styles.modal__header}>Удаление билета</h3>
        <p className={styles.modal__question}>Вы уверены, что хотите удалить билет?</p>
        <div className={styles.modal__buttons}>
          <Button style={styles.modal__button_yes} text={'Да'} onClickAction={onConfirm} />
          <Button style={styles.modal__button_no} text={'Нет'} onClickAction={onClose} />
        </div>
        <Button style={styles.modal__button_close} text={''} onClickAction={onClose} />
      </CardContainer>
    </div>
  );
};

const Modal = ({ onConfirm, onClose }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (typeof window === 'undefined' || !isMounted) {
    return null;
  }

  return createPortal(<Popup onConfirm={onConfirm} onClose={onClose} />, document.body);
};

export default Modal;
