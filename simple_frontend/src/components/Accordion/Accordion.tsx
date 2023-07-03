'use client';

import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';
import CardContainer from '@/components/CardContainer/CardContainer';
import styles from './accordion.module.css';

interface Context {
  activeGroup: string;
  switchGroup: (title: string) => void;
}
const AccordionContext = createContext<Context>({ activeGroup: '', switchGroup: () => {} });

export const MenuAccordion = ({ children }: PropsWithChildren) => {
  const [activeGroup, setActiveGroup] = useState<string>('');
  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeGroup) => (activeGroup === title ? '' : title));
  }, []);

  return <AccordionContext.Provider value={{ activeGroup, switchGroup }}>{children}</AccordionContext.Provider>;
};

MenuAccordion.Container = function MenuContainer({ children, question }: PropsWithChildren<{ question: string }>) {
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

MenuAccordion.Answer = function MenuAnswer({ answer }: { answer: string }) {
  return <p className={styles.accordion__answer}>{answer}</p>;
};

export default MenuAccordion;
