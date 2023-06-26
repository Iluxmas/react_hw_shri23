'use client';
import React, { ReactElement } from 'react';
import { useGetMovieQuery } from '@/redux/services/biletApi';
import { IMovie } from '@/types/api';
import Row from './Row/Row';
import CardContainer from '../CardContainer/CardContainer';
import Spinner from '../Spinner/Spinner';

import styles from './filmdescription.module.css';
import { genreMapFunction } from '@/utils/genreMapFunction';

const FilmDescription: React.FC<{ movieId: string }> = ({ movieId }): ReactElement => {
  const { data: movie, isLoading } = useGetMovieQuery(movieId);

  return isLoading ? (
    <CardContainer style={styles.description__outerContainer}>
      <Spinner />
    </CardContainer>
  ) : (
    <CardContainer style={styles.description__outerContainer}>
      <div className={styles.description__posterContainer}>
        <img className={styles.description__poster} src={movie?.posterUrl} alt='' />
      </div>
      <div>
        <div className={styles.description__header}>
          <h1>{movie?.title}</h1>
          <div></div>
        </div>
        <Row title={'Жанр'} text={genreMapFunction(movie?.genre)}></Row>
        <Row title={'Год выпуска'} text={movie?.releaseYear}></Row>
        <Row title={'Рейтинг'} text={movie?.rating}></Row>
        <Row title={'Режиссер'} text={movie?.director}></Row>
        <p className={styles.description__label}>Описание</p>
        <p className={styles.description__text}>{movie?.description}</p>
      </div>
    </CardContainer>
  );
};

export default FilmDescription;
