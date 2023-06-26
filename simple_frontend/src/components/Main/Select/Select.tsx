import React, { createContext, createRef, useContext, useState } from 'react';
import styles from './select.module.css';
import { ICinema } from '@/types/api';

interface SelectProps
  extends React.PropsWithChildren<{
    label: string;
    onOpen: () => void;
    placeHolder: string;
    filter: string | ICinema | undefined;
    isOpen: boolean;
  }> {}

const PositionContext = createContext(null);

const Select = ({ label, onOpen, placeHolder, filter, isOpen, children }: SelectProps) => {
  const refSelect = createRef<HTMLDivElement>();
  const [rect, setRect] = useState<DOMRect>();

  const handleOnOpen = () => {
    if (refSelect && refSelect.current) {
      setRect(refSelect.current.getBoundingClientRect());
    }
    onOpen();
  };

  return (
    <>
      <span className={styles.form__label}>{label}</span>
      <div className={styles.form__select} onClick={handleOnOpen} ref={refSelect}>
        <span className={styles.form__selectPlaceholder} style={filter ? { color: '#1B1F23' } : {}}>
          {!filter ? placeHolder : filter?.name || filter}
        </span>
        <p className={styles.select__expand} style={isOpen ? { transform: 'rotate(180deg)' } : {}}></p>
      </div>
      <PositionContext.Provider value={rect}>{children}</PositionContext.Provider>
    </>
  );
};
export const usePositionContext = () => useContext(PositionContext);
export default Select;
