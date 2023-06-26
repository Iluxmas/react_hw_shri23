'use client';

import React, { ReactElement, useState } from 'react';
import CardContainer from '@/components/CardContainer/CardContainer';
import styles from './accordion.module.css';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CardContainer>
      <div className={styles.accordion__item}>
        <div className={styles.accordion__header} onClick={() => setIsOpen((prev) => !prev)}>
          <span className={styles.accordion__question}>{question}</span>
          <button className={`${styles.accordion__expand} ${isOpen ? styles.accordion__expand_open : ''}`}></button>
        </div>
        <p className={`${styles.accordion__answer} ${isOpen ? styles.accordion__answer_open : ''}`}>{answer}</p>
      </div>
    </CardContainer>
  );
};

export default Accordion;
