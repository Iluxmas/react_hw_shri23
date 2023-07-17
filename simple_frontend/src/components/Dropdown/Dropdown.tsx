'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Genres, ICinema } from '@/types/api';
import { usePositionContext } from '../Main/Select/Select';

import styles from './dropdown.module.css';

interface DropdownProps {
  options?: Genres[] | ICinema[];
  onChoose: ((id: Genres) => void) | ((id: ICinema) => void);
  onClose: () => void;
}

const ModalContent = ({ options, onChoose, onClose }: DropdownProps) => {
  const [offset, setOffset] = useState({ top: 0, left: 0, width: 0 });
  const rect = usePositionContext();

  useLayoutEffect(() => {
    if (rect) {
      setOffset({
        top: rect.bottom + window.pageYOffset,
        left: rect.x - 1,
        width: rect.width + 2,
      });
    }
  }, []);

  useEffect(() => {
    const scrollHandle = () => {
      // if scroll with opened Select then close it
      onClose();
    };
    document.addEventListener('scroll', scrollHandle);

    return () => document.removeEventListener('scroll', scrollHandle);
  }, []);

  const dropdownRed = React.createRef<HTMLDivElement>();

  useEffect(() => {
    function handlerOutsideClick(event: MouseEvent) {
      if (event.target !== dropdownRed.current) {
        onClose();
      }
    }
    document.addEventListener('click', handlerOutsideClick);

    return () => document.removeEventListener('click', handlerOutsideClick);
  }, []);

  return (
    <div
      ref={dropdownRed}
      className={styles.dropdown__container}
      style={offset}>
      <div className={styles.dropdown__option} onClick={() => onChoose('')}>
        Не выбран
      </div>
      {options?.map(option => (
        <div
          key={option?.id || option}
          className={styles.dropdown__option}
          onClick={() => onChoose(option)}>
          {option?.name || option}
        </div>
      ))}
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChoose, onClose }) => {
  return createPortal(
    <ModalContent options={options} onClose={onClose} onChoose={onChoose} />,
    document.body,
  );
};

export default Dropdown;
