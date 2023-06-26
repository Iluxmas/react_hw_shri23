'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import CardContainer from '@/components/CardContainer/CardContainer';
import styles from './accordion.module.css';

const AccordionContext = createContext();

export const MenuAccordion = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState();
  const switchGroup = useCallback((title) => {
    setActiveGroup((activeGroup) => (activeGroup === title ? undefined : title));
  }, []);

  return <AccordionContext.Provider value={{ activeGroup, switchGroup }}>{children}</AccordionContext.Provider>;
};

MenuAccordion.Container = function MenuContainer({ children, question }) {
  const { activeGroup, switchGroup } = useContext(AccordionContext);

  const isOpen = activeGroup === question;

  return (
    <CardContainer>
      <div className={styles.accordion__item}>
        <div className={styles.accordion__header} onClick={() => switchGroup(question)}>
          <span className={styles.accordion__question}>{question}</span>
          <button className={`${styles.accordion__expand} ${isOpen ? styles.accordion__expand_open : ''}`}></button>
        </div>
        {isOpen && children}
      </div>
    </CardContainer>
  );
};

MenuAccordion.Answer = function MenuAnswer({ answer }) {
  return <p className={styles.accordion__answer}>{answer}</p>;
};

export default MenuAccordion;
