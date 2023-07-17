'use client';

import React, { ReactElement } from 'react';
import styles from './reviews.module.css';
import CardContainer from '../CardContainer/CardContainer';
import { useGetReviewQuery } from '@/redux/services/biletApi';
import { IReview } from '@/types/api';

const Reviews: React.FC<{ movieId: string }> = ({
  movieId,
}): ReactElement | false => {
  const { data: reviews, isLoading } = useGetReviewQuery(movieId);

  return (
    !isLoading && (
      <>
        {reviews.map(({ name, id, rating, text }: IReview, idx: number) => (
          <CardContainer key={`review_${id}_${idx}`} style={styles.review}>
            <div className={styles.review__avatar}></div>
            <div className={styles.review__content}>
              <div className={styles.review__header}>
                <p className={styles.review__author}>{name}</p>
                <p className={styles.review__rating}>
                  Оценка:{' '}
                  <strong className={styles.review__accent}>{rating}</strong>
                </p>
              </div>
              <div className={styles.review__text}>{text}</div>
            </div>
          </CardContainer>
        ))}
      </>
    )
  );
};

export default Reviews;
