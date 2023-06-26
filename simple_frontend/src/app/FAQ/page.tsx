import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import CardContainer from '@/components/CardContainer/CardContainer';

import styles from './faq.module.css';

const data = [
  {
    question: 'Что такое Билетопоиск?',
    answer:
      'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
  },
  {
    question: 'Какой компании принадлежит Билетопоиск?',
    answer:
      'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
  },
  {
    question: 'Как купить билет на Билетопоиск?',
    answer:
      'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
  },
  {
    question: 'Как оставить отзыв на Билетопоиск?',
    answer:
      'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
  },
];

function Page(props) {
  return (
    <div>
      <CardContainer>
        <h1 className={styles.title}>Вопросы-ответы</h1>
      </CardContainer>

      <ul className={styles.faq__list}>
        {data.map(({ question, answer }, idx) => (
          <Accordion key={idx} question={question} answer={answer}></Accordion>
        ))}
      </ul>
    </div>
  );
}

export default Page;
